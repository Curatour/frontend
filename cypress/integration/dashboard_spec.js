describe('Dashboard', () => {
  beforeEach(() => {
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
    cy.get('.ContactsPreview a').should('have.length', 3);
  });

  it('should have a Tour Display with the name of the user\'s current tour', () => {
    cy.get('.TourDisplay > h1')
  });

  // it.skip('', () => {

  // });
});