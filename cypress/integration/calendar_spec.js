describe('Contacts', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('.NavBar').find('a').eq(0).click()
  });

  it('should display the Calendar page', () => {
    cy.get('.fc').find('.fc-toolbar-title').should('be.visible')
    // 'contain', 'April 2021'
  });

  it('should display events on the monthly calendar view that can be clicked and take user to event details page', () => {
    cy.get('.fc').find('.fc-daygrid-event').should('have.length', 7)
      .eq(0).should('contain', 'The La\'s')
    // ~~~~~~~~~~Add in once stubs are fully implemented
    //   .click()
    //   .get('.Event').should('be.visible')
    // cy.get('.NavBar').find('a').eq(0).click()
  });
 
   it('should be able to show a week view', () => {
    cy.get('.fc').find('.fc-timeGridWeek-button').click()
    cy.get('.fc-timeGridWeek-view').should('be.visible')
    cy.get('.event-link').find('.')
   .click()
    //   .get('.Event').should('be.visible')
    // cy.get('.NavBar').find('a').eq(0).click()

    
  });
});