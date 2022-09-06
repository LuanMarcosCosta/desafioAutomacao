package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pages.CadastroPage;
import runner.RunCucumberTest;
import support.Utils;

public class CadastroStep extends RunCucumberTest {
    CadastroPage cadastroPage = new CadastroPage();
    // retirei os campos que não eram obrigatórios

    @Dado("^que eu estou no site$")
    public void que_eu_estou_no_site() {
        cadastroPage.acessarAplicacao();
    }

    @Quando("^preencho dados de login CPF$")
    public void preencho_dados_de_login_CPF() {
        //cadastroPage.preencheClicaarpreco();
        cadastroPage.preencheCPFValido(Utils.geraCPFRandom(false));
    }

    @Quando("^clico em continuar$")
    public void clico_entrar() {
        cadastroPage.cliqueEntrar();
    }

    @Quando("^vejo dados cadastrados$")
    public void validarDadosCadastros() {
        cadastroPage.validarTelaCadastro();
    }

    @Quando("^preencho o campo nome$")
    public void preencherNome(){
        cadastroPage.preencheNome("Luan Costa");
    }

    @Quando("^seleciono o genero$")
    public void genero()  {
        cadastroPage.radioGroupSexo();
    }

    @Quando("^preencho o campo celular$")
    public void preencho_o_campo_celular()  {
        cadastroPage.preencheCelular("27996419906");
    }

    @Quando("^preencho o campo e-mail$")
    public void preencho_o_campo_e_mail()  {
        cadastroPage.preencheEmail(Utils.geraEmailrandom());
    }

    @Quando("^preencho a data de nascimento$")
    public void preencho_a_data_de_nascimento()  {
       cadastroPage.preencheDataAniversario("07011998");
    }

    @Quando("^preencho o campo CEP$")
    public void preencho_o_campo_CEP()  {
        cadastroPage.preencheCampoCep("80730480");
    }


    @Quando("^preencho o campo numero$")
    public void preencho_o_campo_numero()  {
        cadastroPage.preencheNumeroResidencia("55");
    }

    @Quando("^preencho o campo dados de acesso campo senha$")
    public void preencheSenhaeConfirmacao()  {
        cadastroPage.preencherSenha("Senh@12");
    }

    @Quando("^clico no botao li e concordo$")
    public void cliqueBotaoConcordo()  {
        cadastroPage.clicaTermoAdesao();
    }

    @Quando("^clico no botao cadastrar$")
    public void cliqueBotaoCadastrar()  {
        cadastroPage.clicaBotaoCadastrar();
    }

    @Entao("^clico no botao finalizar para ver a home$")
    public void cliqueBotaoFinalizarHome()  {
        cadastroPage.clicaFinalizarCadastro();
    }


}
