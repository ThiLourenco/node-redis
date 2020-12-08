import Mail from '../lib/Mail';

export default {
  
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3
  },
  async handle({ data }) {
    const { user: { name, email, password } } = data;

    await Mail.sendMail({
      from: 'Thiago Lourenço <contato@ti.com.br>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de email',
      html: 
      `<h2> Bem vindo, ${name}!!<h2>
      
      <h3>Sua senha foi gerada com sucesso:<h3>

      <h4>SENHA: ${password}</h4>
      
      <i>Não esqueça de alterar a senha no próximo login.</i>

      <p>Pronto, agora é possível acessar ao sistema:</p>
      <a target="_blank" href="https://www.google.com.br">Voltar</a>
      `,
      
    })
  }
}