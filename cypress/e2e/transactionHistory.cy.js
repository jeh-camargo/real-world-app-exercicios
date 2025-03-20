import userData from '../fixtures/userData.json';
import HomeAccountBankPage from '../pages/homeAccountBankPage';
import LoginPage from '../pages/loginPage';

const loginPage = new LoginPage()
const homeAccountBankPage = new HomeAccountBankPage()

describe('Visualizar histórico de transações com sucesso', () => {
    it('Exibe o histórico de transações de um usuário corretamente', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
      loginPage.checkAcessValid()

      homeAccountBankPage.userTransactionHistory()
      
    });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
      loginPage.checkAcessValid()

      homeAccountBankPage.userTransactionHistory()
      homeAccountBankPage.userTransactionHistoryWithFilter()

    });
});