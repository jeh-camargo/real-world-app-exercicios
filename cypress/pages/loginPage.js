class LoginPage {
    selectorsList(){
        const selectors = {
            usernameField: "#username",
            passwordField: "#password",
            signButton: "[data-test='signin-submit']",
            wrongCredencialAlert: ".MuiAlert-message",
            confirmLoginAccess: "[href='/personal']"
        }

        return selectors
    }

    accessLoginPage(){
        cy.visit('http://localhost:3000/signin')
    }

    loginWithAnyUser (username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signButton).click()
    }

    checkAcessInvalid(){
        cy.get(this.selectorsList().wrongCredencialAlert)
    }

    checkAcessValid(){
        cy.get(this.selectorsList().confirmLoginAccess)
    }
}

export default LoginPage