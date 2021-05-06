describe('Event Details', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
    cy.get('form input[type=email]').type(`testing@example.com`)
    cy.get('form input[type=password]').type('password')
    cy.get('form button').click()
    cy.wait(500)

    cy.get('.NavBar a').eq(0).click()
    cy.get('.fc').find('.fc-daygrid-event')
    .eq(1).click();
    cy.wait(500)
  });
  
  it('should be on the event-details page', () => {
    cy.url().should('contain', '/event-details');
  });

  it('should have a visible event component', () => {
    cy.get('.Event').should('be.visible');
  });

  it('should display the current event\'s name', () => {
    cy.get('h1').should('be.visible')
  })

  it('should display the current event\'s venue name', () => {
    cy.get('p:first').should('be.visible');
  })

  it('should display the event\'s date', () => {
    cy.get('.date-info').should('be.visible')
  });

  it('should display an agenda', () => {
    cy.get('.agenda-display').should('be.visible');
  });

  it('should have a form to add to the agenda', () => {
    cy.get('.agenda-form').should('be.visible');
  });

  it('should have some instructions for the form', () => {
    cy.get('.agenda-form h3').should('contain', 'Add to the Agenda');
  });

  it('should have allow the user to input a new event', () => {
    cy.get('.agenda-time').type('06:30');
    cy.get('.agenda-title').type('melt faces');
    cy.get('.agenda-description').type('find faces, melt them');
    // cy.get('.form-button').click();

    // cy.get('.agenda-list').should('be.visible');
    // cy.get('.agenda-item').should('be.visible');
    // cy.get('.agenda-check').should('be.visible');
    // cy.get('.agenda-check').should('not.be.checked');
    // cy.get('.agenda-item-title').should('contain', '6:30AM - melt faces');
    // cy.get('.agenda-item-desc').should('contain', 'find faces, melt them');
  });

   after('Logout', () => {
    cy.get('.Header').find('.logout-btn').click()
  })
});