import userData from '../fixtures/userData.json';
import NewAccountPage from '../pages/newAccountPage';
import LoginPage from '../pages/loginPage';


const loginPage = new LoginPage()
const newAccountPage = new NewAccountPage()
const Chance = require('chance')
const chance = new Chance()

describe ('Registro de novos usuários', () => {
    it('Registra um novo usuário com informações válidas', () => {
        loginPage.accessLoginPage()
        newAccountPage.accessCreateAccount()
        newAccountPage.createAccountUser(chance.first(), chance.last(),chance.word(), userData.createUserSuccess.password)
        newAccountPage.confirmSignUpButton()
    })

    it('Tentar registrar um novo usuário com informações incompletas', () => {
        loginPage.accessLoginPage()
        newAccountPage.accessCreateAccount()
        newAccountPage.createAccountUser(userData.createUserFail.firstName, chance.last(),chance.word(), userData.createUserFail.password)
        newAccountPage.createAccountFail()
    })
})