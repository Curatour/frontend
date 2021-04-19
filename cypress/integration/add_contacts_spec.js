describe('AddContacts', () => {
  beforeEach(() => {
    cy.intercept('POST', '/graphql', (req) => {
      const { body } = req
      if (body.hasOwnProperty('mutation') && req.body.query.includes('contact')) {
        req.reply({ fixture: 'contacts.json'});
      } 
    })
    cy.visit('http://localhost:3000/contacts/');
  });

  it('should have a module covering the page', () => {
    cy.get('.add-contacts-button').click();

    cy.get('.add-contacts').should('be.visible');
  });

  it('should disable any interactions behind it', () => {
    cy.get('.add-contacts-button').click();

    cy.on("fail", (err) => {
      expect(err.message).to.include("failed because this element")
    })

    cy.get('.Contacts a:last').click();
  });

  it('should have 4 inputs fields', () => {
    cy.get('.add-contacts-button').click();
    
    cy.get('.add-contacts input').should('have.length', 4);
  });

  // it('should add a contact to the list', () => {
  //   cy.get('.ContactCard').should('have.length', 4);

  //   cy.get('.add-contacts-button').click();
  //   cy.get('.add-contacts input:first').type('Gavin');
  //   cy.get('.add-contacts input').eq(1).type('Belson');
  //   cy.get('.add-contacts input').eq(2).type('gavin.belson@hooli.com');
  //   cy.get('.add-contacts input:last').type('(303) 303-3030');
  //   cy.get('.module-buttons button:first').click();

  //   cy.get('.ContactCard').should('have.length', 5);
  // });

  // it('should not add a contact to the contacts list if there are any empty fields', () => {
  //   cy.get('.ContactCard').should('have.length', 4);

  //   cy.get('.add-contacts-button').click();
  //   cy.get('.add-contacts input:first').type('Gavin');
  //   cy.get('.add-contacts input').eq(1).type('Belson');
  //   cy.get('.add-contacts input').eq(2).type('gavin.belson@hooli.com');
  //   cy.get('.module-buttons button:first').click();

  //   cy.get('.ContactCard').should('have.length', 4);
  // });
})