describe('Not Found', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/njaosfgoiahsf');
  });

  it('should have an error message', () => {
    cy.get('.Not-Found').find('.not-found-heading').should('contain', 'This page does not exist! Apologies, please head back to the dashboard.')
    cy.get('.not-found-message').should('contain', 'This is what we get for letting the drummer work on some of this code.');
  });

  it('should be able to navigate back to the dashboard by clicking the logo in the header', () => {
    cy.get('.Header').find('.logo').click()
  })
});