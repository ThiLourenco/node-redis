import passwordGenerator from 'password-generator';
import Mail from '../lib/Mail';

export default {
  async store(req, res) {
    const { name, email } = req.body;

    const user = {
      name,
      email,
      password: passwordGenerator(15,false)
    };

    await Mail.sendMail({
      from: 'Thiago Lourenço <contato@ti.com.br>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de email',
      html: `Olá, ${name}, bem-vindo ao nosso email teste.`


    })

    return res.json(user);
  }
}