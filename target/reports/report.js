$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cadastro.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de Cliente",
  "description": "Eu como novo usuario\r\nQuero cadastrar no Sistema\r\nPara acessar a aplicação",
  "id": "cadastro-de-cliente",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 9,
  "name": "Cadastrar Cliente CPF",
  "description": "",
  "id": "cadastro-de-cliente;cadastrar-cliente-cpf",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@CadastroCPFValido"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que eu estou no site",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "preencho dados de login CPF",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "clico em continuar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "vejo dados cadastrados",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencho o campo nome",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "seleciono o genero",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencho o campo celular",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencho o campo e-mail",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "preencho a data de nascimento",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "preencho o campo CEP",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "preencho o campo numero",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencho o campo dados de acesso campo senha",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clico no botao li e concordo",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clico no botao finalizar para ver a home",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroStep.que_eu_estou_no_site()"
});
formatter.result({
  "duration": 4976839900,
  "status": "passed"
});
formatter.match({
  "location": "CadastroStep.preencho_dados_de_login_CPF()"
});
formatter.result({
  "duration": 194509300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroStep.clico_entrar()"
});
formatter.result({
  "duration": 141689100,
  "status": "passed"
});
formatter.match({
  "location": "CadastroStep.validarDadosCadastros()"
});
formatter.result({
  "duration": 1175050100,
  "status": "passed"
});
formatter.match({
  "location": "CadastroStep.preencherNome()"
});
formatter.result({
  "duration": 146993300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#input\\-42\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LUAN-TESTE\u0027, ip: \u0027192.168.1.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 104.0.5112.29 (eff877e18f76..., userDataDir: C:\\Users\\luanm\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60500}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f6b10d2c1b953e12161331f35e292b95\n*** Element info: {Using\u003did, value\u003dinput-42}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pages.CadastroPage.preencheNome(CadastroPage.java:62)\r\n\tat steps.CadastroStep.preencherNome(CadastroStep.java:37)\r\n\tat ✽.E preencho o campo nome(cadastro.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CadastroStep.genero()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroStep.preencho_o_campo_celular()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroStep.preencho_o_campo_e_mail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroStep.preencho_a_data_de_nascimento()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroStep.preencho_o_campo_CEP()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroStep.preencho_o_campo_numero()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroStep.preencheSenhaeConfirmacao()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroStep.cliqueBotaoConcordo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroStep.cliqueBotaoCadastrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroStep.cliqueBotaoFinalizarHome()"
});
formatter.result({
  "status": "skipped"
});
});