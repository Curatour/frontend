describe('Contacts', () => {
  beforeEach(() => {
    cy.intercept('POST', '/graphql', (req) => {
      const { body } = req
      if (body.hasOwnProperty('query') && req.body.query.includes('events')) {
        req.reply({ fixture: 'events.json'});
      } 
    })
    cy.clock(Date.UTC(2021, 3, 20), ['Date']);
    cy.visit('http://localhost:3000/');
    cy.get('.NavBar').find('a').eq(0).click()
  });
  
  it('should display the Calendar page', () => {
    cy.get('.fc').find('.fc-toolbar-title').should('be.visible')
    // 'contain', 'April 2021'
  });

  it('should display events on the monthly calendar view that can be clicked and take user to event details page', () => {
    cy.get('.fc').find('.fc-daygrid-event').should('have.length', 2)
      .eq(0).should('contain', 'Bob Marley (and the Wailers)')
      .click()
      .get('.Event').should('be.visible')
    cy.get('.NavBar').find('a').eq(0).click()
  });
 
   it('should be able to show a week view', () => {
    cy.get('.fc').find('.fc-timeGridWeek-button').click()
    cy.get('.fc-timeGridWeek-view').should('be.visible')
    cy.get('.event-link').find('b').eq(0).should('contain', '11:20 - 2:20')
      .click()
      .get('.Event').should('be.visible')
    cy.get('.NavBar').find('a').eq(0).click()
  });

  it('should be able to show a daily calendar view', () => {
    cy.get('.fc').find('.fc-timeGridDay-button').click()
    cy.get('.fc-timeGridDay-view').should('be.visible')

  })
});