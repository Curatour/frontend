describe('NavBar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/' || 'https://curatour.vercel.app/')
  });

  it('should have three links', () => {
    cy.get('.NavBar a').should('have.length', 3);
  });

  it('should have a link to the calendar', () => {
    cy.get('.NavBar a:first').should('have.attr', 'href', '/calendar');
  });

  it('should have an icon in the calendar link', () => {
    cy.get('.NavBar a:first svg').should('have.attr', 'data-icon', 'calendar-alt')
  });

  it('should have a link to add an event to the calendar', () => {
    cy.get('.NavBar a').eq(1).should('have.attr', 'href', '/new-event')
  });

  it('should have an icon in the add to calendar link', () => {
    cy.get('.NavBar a svg').eq(1).should('have.attr', 'data-icon', 'calendar-plus')
  });

  it('should have a link to the contacts', () => {
    cy.get('.NavBar a:last').should('have.attr', 'href', '/contacts')
  });

  it('should have an icon in the add to calendar link', () => {
    cy.get('.NavBar a svg:last').should('have.attr', 'data-icon', 'address-book')
  });
});