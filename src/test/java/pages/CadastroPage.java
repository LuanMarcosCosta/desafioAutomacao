package pages;

import org.openqa.selenium.*;
import runner.RunCucumberTest;
import support.Utils;

public class CadastroPage extends RunCucumberTest {

    private By vCPFValido = By.name("cpfCnpj");
    private By vBotaoEntrar = By.xpath("//*[@id=\"app\"]/div/main/div/div/div[2]/div/div/div[2]/button/span");
    private By vBotaoFechar = By.xpath("//*[@id=\"app\"]/div/main/div/section/div/div[2]/button/span");
    private By VDefinirPreco = By.xpath("/html/body/div[2]/div/div/div/div/form/div[1]/div[2]/div/label[1]/span[2]");
    private By Vseguinte = By.xpath("/html/body/div[2]/div/div/div/div/form/div[2]/div[2]/button");
    private By VfecharDois = By.xpath("/html/body/div[2]/div/div/div/div/form/div[1]/div/div/div/button");
    private By VvalidarTelaCadastro = By.xpath("//*[@id=\"app\"]/div/main/div/div/div/div[2]/div/div/div/div[2]/div");
    private By VpreencherCampoNome = By.id("input-42");
    private By VselecionarSexo = By.xpath("//*[@id=\"app\"]/div/main/div/div/div/div[2]/div/div/div/div[3]/div/div/div[1]/div/div[2]/div/div");
    private By Vcampocelular = By.id("input-46");
    private By VcampoEmail = By.id("input-50");
    private By vCampoDataAniversario = By.id("input-54");
    private By VcampoCep = By.id("input-81");
    private By VcampoNumero = By.id("input-108");
    private By Vsenha = By.id("input-68");
    private By VsenhaConfirmacao = By.id("input-72");
    private By VtermoAdesao = By.xpath("//*[@id=\"app\"]/div/main/div/div/div/div[2]/div/div/div/div[9]/div[1]");
    private By VtextoAdesao = By.id("2-como-posso-aderir-ao-clube");
    private By vConcordacomTermo = By.xpath("//*[@id=\"termos-adesao-card\"]/button[1]");
    private By vRealizaCadastro = By.xpath("//*[@id=\"app\"]/div/main/div/div/div/div[2]/div/div/div/div[9]/div[2]/button[1]");
    private By vBotaoFinalizar = By.xpath("//*[@id=\"app\"]/div/main/div/div/div[2]/div/div/div/button");

    public void acessarAplicacao() {
        getdriver().manage().window().maximize();
        getdriver().get("https://cadastramento-demo.mercafacil.com/#/home");

        Utils.esperarElementoEstarPresente(vBotaoFechar, 10);
        getdriver().findElement(vBotaoFechar).click();
    }

    public void preencheClicaarpreco() {
        Utils.esperarElementoEstarPresente(VDefinirPreco, 10);
        getdriver().findElement(VDefinirPreco).click();
        getdriver().findElement(Vseguinte).click();
        getdriver().findElement(VfecharDois).click();
    }

    public void preencheCPFValido(String CPF) {
        Utils.esperarElementoEstarPresente(vCPFValido, 10);
        getdriver().findElement(vCPFValido).sendKeys(CPF);
    }

    public void cliqueEntrar() {
        getdriver().findElement(vBotaoEntrar).click();
    }

    public void validarTelaCadastro() {
        Utils.esperarElementoEstarPresente(VvalidarTelaCadastro, 10);
        String textovalidarTelaCadastro = getdriver().findElement(VvalidarTelaCadastro).getText();
        System.out.println(textovalidarTelaCadastro);
    }

    public void preencheNome(String nomeClient){
        getdriver().findElement(VpreencherCampoNome).sendKeys(nomeClient);
    }

    public void radioGroupSexo() {
        getdriver().findElement(VselecionarSexo).click();
    }

    public void preencheCelular(String Celular){
        getdriver().findElement(Vcampocelular).sendKeys(Celular);
    }

    public void preencheEmail(String email){
        getdriver().findElement(VcampoEmail).sendKeys(email);
    }

    public void preencheDataAniversario(String dataAniversario){
        getdriver().findElement(vCampoDataAniversario).sendKeys(dataAniversario);
    }

    public void preencheCampoCep(String Cep){
        getdriver().findElement(VcampoCep).sendKeys(Cep);
    }

    public void preencheNumeroResidencia(String NumeroResidencia){
        getdriver().findElement(VcampoNumero).sendKeys(NumeroResidencia);
    }

    public void preencherSenha(String senha){
        getdriver().findElement(Vsenha).sendKeys(senha);
        getdriver().findElement(VsenhaConfirmacao).sendKeys(senha);
    }

    public void clicaTermoAdesao(){
        getdriver().findElement(VtermoAdesao).click();
        Utils.esperarElementoEstarPresente(VtextoAdesao, 10);

        JavascriptExecutor jse = (JavascriptExecutor) getdriver();
        jse.executeScript("window.scrollTo(0, 10000)");
        getdriver().findElement(vConcordacomTermo).click();
    }

    public void clicaBotaoCadastrar(){
        Utils.esperarElementoEstarPresente(vRealizaCadastro, 10);
        getdriver().findElement(vRealizaCadastro).click();
    }

    public void clicaFinalizarCadastro(){
        Utils.esperarElementoEstarPresente(vBotaoFinalizar, 5);
        getdriver().findElement(vBotaoFinalizar).click();
    }

}
