class NewAccountPage {
    
    selectorsList(){
        const selectors = {
            createAccountLink: "[href='/signup']",
            firstNameField: "#firstName",
            lastNameField: "#lastName",
            usernameField: "#username",
            passwordField: "#password",
            confirmPasswordField: "#confirmPassword",
            signUpButton: "[data-test='signup-submit']",
            signUpButtonAccountFail: ".SignUpForm-form"
           
         }
         
         return selectors
    }
    
    accessCreateAccount(){
        cy.get(this.selectorsList().createAccountLink).click()
    }

    createAccountUser(firstName, lastName, username, password,confirmPassword){
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName) 
        cy.get(this.selectorsList().usernameField).type(username) 
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword) 
    }

    confirmSignUpButton(){
        cy.get(this.selectorsList().signUpButton).click()
    }
    
    createAccountFail(){
        cy.get(this.selectorsList().signUpButtonAccountFail).contains(/First Name is required| Last Name is required| Username is required|Enter your password|Password must contain at least 4 characters|Confirm your password|Password does not match/).should('exist')
    }
}

export default NewAccountPage