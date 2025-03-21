class HomeAccountBankPage{
    
    selectorList(){
        const selectors = {
            newTransactionButton: "[data-test='nav-top-new-transaction']",
            myAccountUser: "[data-test='sidenav-user-settings']",
            mineHistory:"[href='/personal']",
            confirmTransactionMine: ".MuiListSubheader-root",
            filterDateTransaction: "[data-test='transaction-list-filter-date-range-button']",
            filterToday: ".Cal__Day__today",
            confirmNoTransactions: "[data-test='empty-list-header']"
        }

        return selectors
    }

    newTransaction(){
        cy.get(this.selectorList().newTransactionButton).click()
    }

    userTransactionHistory(){
        cy.get(this.selectorList().mineHistory).click()
        cy.get(this.selectorList().confirmTransactionMine).should('have.text','Personal')
    }

    userTransactionHistoryWithFilter(){
        cy.get(this.selectorList().filterDateTransaction).click({force : true})
        cy.get(this.selectorList().filterToday).dblclick({force: true}).click({force: true})
        cy.get(this.selectorList().confirmNoTransactions).should('have.text','No Transactions')
    }

    userSettings(){
        cy.get(this.selectorList().myAccountUser).click()
    }


    

}

export default HomeAccountBankPage