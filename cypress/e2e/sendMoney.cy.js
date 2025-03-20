import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userData.json'
import HomeAccountBankPage from '../pages/homeAccountBankPage'
import TransactionPage from '../pages/transactionPage';

const loginPage = new LoginPage()
const homeAccountBankPage = new HomeAccountBankPage()
const transactionPage = new TransactionPage()

describe('Enviar dinheiro com saldo suficiente', () => {
    it('Enviando dinheiro com sucesso', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.checkAcessValid()

        homeAccountBankPage.newTransaction()
        transactionPage.selectContact()
        transactionPage.sendValidMoney('35','dinner')


    });

    describe('Enviar dinheiro com saldo insuficiente', () => {
        it.only('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
         loginPage.accessLoginPage()
         loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
         loginPage.checkAcessValid()

         homeAccountBankPage.newTransaction()
         transactionPage.selectContact()
         transactionPage.sendInvalidMoney('1800','shopping')
         
         //bug, sistema aceita transferencia de valor mesmo com saldo insuficiente
         
        });
      });

  });