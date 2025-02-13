import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()

describe('Login Real World App', () => {

  it('Login com um usuário válido', () => {
   loginPage.accessLoginPage()
   loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
   loginPage.checkAcessValid()
  })
  
  it('Exibe uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
    })
  
})