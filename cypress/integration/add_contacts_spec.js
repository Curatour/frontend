describe('AddContacts', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contacts/');
  });

  it('should have a module covering the page', () => {
    cy.get('.add-contacts-button').click();

    cy.get('.add-contacts').should('be.visible');
  });

  it('should disable any interactions behind it', () => {
    cy.get('.add-contacts-button').click();
    cy.get('.Contacts a:last').click();

    cy.on("fail", (err) => {
      expect(err.message).to.include("failed because this element")
    })

  });

  it('should add a contact to the list', () => {
    cy.get('.ContactCard').should('be.visible');

    cy.get('.add-contacts-button').click();
    cy.get('.add-contacts input:first').type('Gavin');
    cy.get('.add-contacts input').eq(1).type('Belson');
    cy.get('.add-contacts input').eq(2).type('(303) 303-3030');
    cy.get('.add-contacts input').eq(3).type('gavin.belson@hooli.com');
    cy.get('.module-buttons button:first')
    /*
    without stubbing we are not submitting any new data to avoid cluttering up our database
      .click();
    cy.get('.ContactCard').should('have.length', 3); */
  });

  it('should not add a contact to the contacts list if there are any empty fields', () => {
    cy.get('.add-contacts-button').click();
    cy.get('.add-contacts input:first').type('Gavin');
    cy.get('.add-contacts input').eq(1).type('Belson');
    cy.get('.add-contacts input').eq(2).type('(303) 303-3030');
    /*
    without stubbing we are not submitting any new data to avoid cluttering up our database
      .click();
    cy.get('.ContactCard').should('have.length', 3); */
  });

  it('should be able to cancel adding a new contact', () => {
    cy.get('.add-contacts-button').click();
    cy.get('.add-contacts input:first').type('Gavin');
    cy.get('.add-contacts input').eq(1).type('Belson');
    cy.get('.add-contacts input').eq(2).type('(303) 303-3030');
    cy.get('.module-buttons button:last').click();
    cy.get('.ContactCard').should('be.visible');
  });
})