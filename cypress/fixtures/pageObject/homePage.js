class HomePage {

    get careersLink() {return cy.get('[href="/careers"]')}
    get solutionsMenu() {return cy.get('[aria-controls="w-dropdown-list-0"]')}
    get solutionsDropdownSupplyChain() {return cy.contains('Supply Chain Solutions')}

}
export default new HomePage();