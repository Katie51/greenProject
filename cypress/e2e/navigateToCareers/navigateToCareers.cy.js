import data from '/Users/kate/Desktop/green project/cypress/fixtures/data.json'
import careersPage from '../../fixtures/pageObject/careersPage';
import homePage from '../../fixtures/pageObject/homePage';

describe('Navigate to careers', () => {
    beforeEach(() => {
      cy.errorHandler();
      cy.visit('')
    })
  
  it('Should navigate to careers and subscribe', () => {
   
    homePage.careersLink.click();
    careersPage.exploreOpportunitiesTitle.should('be.visible').should('have.text','Explore Opportunities');
    careersPage.careersUrl.should('include', '/careers')
    careersPage.emailInput.type(data.email);
  
  });

  it('Should check that three benefits are present on careers page', () => {
  
    homePage.careersLink.click();
    careersPage.workRemotelyCard.should('include.text','Work Remotely')
    careersPage.generousTimeOffCard.should('include.text','Generous Time Off')
    careersPage.benefitsCard.should('include.text','Benefits')


  });
});