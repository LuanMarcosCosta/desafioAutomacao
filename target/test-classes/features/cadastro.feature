# language: pt

Funcionalidade: Cadastro de Cliente
  Eu como novo usuario
  Quero cadastrar no Sistema
  Para acessar a aplicação

  @CadastroCPFValido
  Cenario: Cadastrar Cliente CPF
    Dado que eu estou no site
    Quando preencho dados de login CPF
    E clico em continuar
    E vejo dados cadastrados
    E preencho o campo nome
    E seleciono o genero
    E preencho o campo celular
    E preencho o campo e-mail
    E preencho a data de nascimento
    E preencho o campo CEP
    E preencho o campo numero
    E preencho o campo dados de acesso campo senha
    E clico no botao li e concordo
    E clico no botao cadastrar
    Entao clico no botao finalizar para ver a home



