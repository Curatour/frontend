describe('Contacts', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('.NavBar').find('a').eq(0).click()
  });

  it('should display the Calendar page', () => {
    cy.get('.fc').find('.fc-toolbar-title').should('be.visible')
  
  })
});