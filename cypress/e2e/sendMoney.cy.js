import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userData.json'
import HomeAccountBankPage from '../pages/homeAccountBankPage';

const loginPage = new LoginPage()
const homeAccountBankPage = new HomeAccountBankPage

describe('Enviar dinheiro com saldo suficiente', () => {
    it.only('Enviando dinheiro com sucesso', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.checkAcessValid()

        homeAccountBankPage.newTransaction()
        homeAccountBankPage.selectContact()
        homeAccountBankPage.sendValidMoney('35','dinner')


    });

    describe('Enviar dinheiro com saldo insuficiente', () => {
        it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
         
        });
      });

  });