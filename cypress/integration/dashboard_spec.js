describe('Dashboard', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have a header', () => {
    cy.get('.Header').find('.logo').should('have.attr', 'src', '/static/media/CuratourLogo.90886745.png')
  });

 
});