class HomeAccountBankPage{
    
    selectorList(){
        const selectors = {
            newTransactionButton: "[data-test='nav-top-new-transaction']",
            searchField: "[placeholder='Search...']",
            searchAnswer: "[data-test='user-list-item-M1ty1gR8B3']",
            amountField: "#amount",
            addNoteField: "[placeholder='Add a note']",
            payButton: "[data-test='transaction-create-submit-payment']",
            confirmTransaction: "[data-test='alert-bar-success']",
            returnTransactionButton: "[data-test='new-transaction-return-to-transactions']",
            createAnotherTransactionButton: "[data-test='new-transaction-create-another-transaction']"
        }

        return selectors
    }

    newTransaction(){
        cy.get(this.selectorList().newTransactionButton).click()
    }

    selectContact(){
        cy.get(this.selectorList().searchField).type('Ruthie Prosacco')
        cy.get(this.selectorList().searchAnswer).click()
    }

    sendValidMoney(amount,note){
        cy.get(this.selectorList().amountField).type(amount)
        cy.get(this.selectorList().addNoteField).type(note)
        cy.get(this.selectorList().payButton).click()
        cy.get(this.selectorList().confirmTransaction).should('be.visible')
    }


}





export default HomeAccountBankPage