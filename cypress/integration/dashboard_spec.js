describe('Dashboard', () => {
  beforeEach(() => {
    cy.intercept('POST', '/graphql', (req) => {
      const { body } = req
      if (body.hasOwnProperty('query') && req.body.query.includes('events')) {
        req.reply({ fixture: 'events.json'});
      } 
    })
    cy.clock(Date.UTC(2021, 3, 20), ['Date']);
    cy.visit('http://localhost:3000/');
  });

  it('should have a header', () => {
    cy.get('header');
  });

  it('should have a navbar', () => {
    cy.get('.NavBar');
  });

  it('should have a Dashboard component', () => {;
    cy.get('.Dashboard')
  });

  it('should have a Contacts Preview with three contacts', () => {
    // cy.get('.ContactsPreview a').should('have.length', 3);
  });

  it('should have a Tour Display with the name of the user\'s current tour', () => {
    cy.get('.TourDisplay > h1')
  });

  // it.skip('', () => {

  // });
});