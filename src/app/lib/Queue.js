import Queue from 'bull';
import redisConfig from '../../config/redis';
import 'dotenv/config';
import * as Sentry from '@sentry/node';

import * as jobs from '../jobs';

// criando fila para ser exibida para o redis
const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

// failure monitoring
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

export default {
  queues,
  // validing to add new queue
  add(name, data) {
    const queue = this.queues.find(queue => queue.name === name);

    return queue.bull.add(data, queue.options);
  },
  // handle queue processs
  process() {
    return this.queues.forEach(queue => {
      queue.bull.process(queue.handle);
      // monitoring and capture errors in the queue    
      queue.bull.on('failed', (job, err) => {
        Sentry.captureException(err, queue.key);
        console.log('Job failed', queue.key, job.data);
        console.log(err);
      });  
    });
  }
}