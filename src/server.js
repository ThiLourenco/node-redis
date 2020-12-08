import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';

import UserController from './app/controllers/UserController';
import Queue from './app/lib/Queue';

const app = express();
// mapping the queue and adding in the Bull
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());

app.post('/users', UserController.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(process.env.PORT, () => console.log(`Server running on the port: ${process.env.PORT}`));
