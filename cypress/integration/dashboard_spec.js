describe('Dashboard', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have a header', () => {
    cy.get('.Header').find('.logo').should('have.attr', 'src', '/static/media/CuratourLogo.90886745.png')
  });

  it('should have a navbar', () => {
    cy.get('.NavBar').find('a').should('have.length', 3)
  });

  it('should have a Contacts Preview', () => {
    cy.get('.ContactsPreview').find('.top-three a').should('have.length', 3)
    cy.get('.ContactsPreview p').eq(0).should('contain', 'Main Contacts')
    cy.get('.ContactsPreview').find('.all-contacts').should('contain', 'All Contacts')
      .click().get('.Contacts').should('be.visible')
    cy.get('.Header').find('.logo').click()
  });

});