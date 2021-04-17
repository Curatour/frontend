describe('AddContacts', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contacts')
      .get('.add-contacts-button').click();
  });

  it('should have a module covering the page', () => {
    cy.get('.add-contacts').should('be.visible');
  });

  it('should disable any interactions behind it', () => {

    cy.on("fail", (err) => {
      expect(err.message).to.include("failed because this element")
    })

    cy.get('.Contacts a:last').click();
  });
})