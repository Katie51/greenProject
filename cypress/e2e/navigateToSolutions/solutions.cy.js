import homePage from "../../fixtures/pageObject/homePage";
import solutionsSupplyPage from "../../fixtures/pageObject/solutionsSupplyPage";

describe('Select Supply Chain Solutions', () => {
    beforeEach(() => {
        cy.errorHandler();
        cy.visit('')
      })

    it('should open Solutions dropdown and click Supply Chain Solutions', () => {

        homePage.solutionsMenu.click();
        homePage.solutionsDropdownSupplyChain.click();
        solutionsSupplyPage.supplyChainSolutionsTitle.should('exist').should('have.text', 'Supply Chain Solutions')
    });
});