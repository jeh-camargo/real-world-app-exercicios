class HomeAccountBankPage{
    
    selectorList(){
        const selectors = {
            newTransactionButton: "[data-test='nav-top-new-transaction']",
            myAccountUser: "[data-test='sidenav-user-settings']"
        }

        return selectors
    }

    newTransaction(){
        cy.get(this.selectorList().newTransactionButton).click()
    }

    userSettings(){
        cy.get(this.selectorList().myAccountUser).click()
    }

    

}

export default HomeAccountBankPage