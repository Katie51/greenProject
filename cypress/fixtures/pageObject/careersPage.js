class CareersPage {

    get exploreOpportunitiesTitle() {return cy.get('#explore-opportunities')}
    get careersUrl() {return cy.url()}
    get emailInput() {return cy.get('.email-form-text-field.w-input')}
    get workRemotelyCard() {return cy.get('#w-node-_721583cb-d190-2754-4870-b170e0400e19-46eab7f5')}
    get generousTimeOffCard() {return cy.get('#w-node-_721583cb-d190-2754-4870-b170e0400e21-46eab7f5')}
    get benefitsCard() {return cy.get('#w-node-_721583cb-d190-2754-4870-b170e0400e29-46eab7f5')}

}
export default new CareersPage();