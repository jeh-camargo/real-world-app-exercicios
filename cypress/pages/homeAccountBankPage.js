class HomeAccountBankPage{
    
    selectorList(){
        const selectors = {
            newTransactionButton: "[data-test='nav-top-new-transaction']",
            myAccountUser: "[data-test='sidenav-user-settings']",
            mineHistory:"[href='/personal']",
            confirmTransactionMine: ".MuiListSubheader-root",
            filterTransactionButton: ".MuiModal-backdrop",
            filterToday: "('.Cal__Day__today > span')"
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
        cy.get(this.selectorList().filterTransactionButton).click()
        cy.get(this.selectorList().filterToday).dblclick()
    }

    userSettings(){
        cy.get(this.selectorList().myAccountUser).click()
    }


    

}

export default HomeAccountBankPage