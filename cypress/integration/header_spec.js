describe('Header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should have a header', () => {
    cy.get('header');
  });

  it('should have a logo in the header', () => {
    cy.get('header img').should('have.attr', 'src', '/static/media/CuratourLogo.90886745.png');
  });

  it('should have a link to the dashboard', () => {
    cy.get('header a').should('have.attr', 'href', '/');
  });
});