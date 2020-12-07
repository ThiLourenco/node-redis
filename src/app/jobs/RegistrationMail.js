import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    //
  },
  async handle({ data }) {
    const { user: { name, email } } = data;

    await Mail.sendMail({
      from: 'Thiago Lourenço <contato@ti.com.br>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de email',
      html: `Olá, ${name}, bem-vindo ao nosso email teste.`
    })
  }
}