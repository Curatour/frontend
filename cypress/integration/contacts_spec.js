describe('Contacts', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contacts');
  });

  it('should have a contacts area', () => {
    cy.get('.Contacts');
  });

  it('should have a list of all contacts', () => {
    // cy.get('.ContactCard').should('have.length', 4);
  });

  it('should have an icon on each contact card', () => {
    cy.get('.contact-icons p').should('have.length', 4);
  });

  it('should have a name on each contact card', () => {
    cy.get('.contact-name').should('have.length', 4);
  });

  it('should have an email on each contact card', () => {
    cy.get('.email')
      .should('have.length', 4)
      .should('have.attr', 'href');
  });

  it('should have a phone number on each contact card', () => {
    cy.get('.phone')
      .should('have.length', 4)
      .should('have.attr', 'href');
  });

  it('should have a search bar that can filter displayed contacts', () => {
    // cy.get('.ContactCard').should('have.length', 4);
    
    // cy.get('.handle-contacts-options input')
    //   .type('kevin');

    // cy.get('.ContactCard').should('have.length', 1);
  });
})