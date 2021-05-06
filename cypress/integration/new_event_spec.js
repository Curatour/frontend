describe('New Event', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
     cy.get('form input[type=email]').type(`testing@example.com`)
    cy.get('form input[type=password]').type('password')
    cy.get('form button').click()
    cy.wait(500)
    cy.get('.NavBar').find('a').eq(1).click()
  });

  it('should display the form page', () => {
    cy.get('.form-page').should('be.visible')
  });

  it('should only display the city and state inputs', () => {
    cy.get('input').should('have.length', 2)
  })

  it('should be able to search venues by location', () => {
    cy.get('input[type=text]').eq(0).type('Denver')
    cy.get('input[type=text]').eq(1).type('CO')
    cy.get('.form-button').click()
  })

  it('should populate the drop down menu with pre-existing venues in that location', () => {    
    cy.get('select').select('Diran Amphitheater')
    //change amphitheater when mock data working
    cy.get('.form-button').eq(1).should('contain', 'Next')
      .click()
    cy.get('.date-time').should('be.visible')
  })

  it('should be able to input a new venue', () => {
    // cy.get('input[type=text]').eq(0).type('Denver')
    // cy.get('input[type=text]').eq(1).type('CO')
    // cy.get('.form-button').click()

    // cy.get('select').select('Add New Venue')
    // cy.get('.venue-add-section').find('input[type=text]')

    // cy.get('input[type=text]').eq(2).type('Gyachung Kang Amphitheater')
    // cy.get('input[type=text]').eq(3).type('910 Mayme Locks')
    // cy.get('input[type=text]').eq(4).type('80203')

    // cy.get('.form-button').eq(1).should('contain', 'Add Venue')
    //   .click()
  })

  it('should be able to add time and date and name to the event', () => {
    // cy.get('input[type=text]').eq(0).type('Denver')
    // cy.get('input[type=text]').eq(1).type('CO')
    // cy.get('.form-button').click()
    
    // cy.get('select').select('Diran Amphitheater')
    // //change amphitheater when mock data working
    cy.get('.form-button').eq(1).should('contain', 'Next')
      .click()


    cy.get('input[type=date]').type('2021-04-20')
    cy.get('input[type=time]').eq(0).type('11:30')
    cy.get('input[type=time]').eq(1).type('15:30')
    cy.get('input[type=text]').eq(2).type('New Event')
    /* 
    cy.get('.form-button).eq(2).click() 

    Without stubbing this will effect our database
    */
  })

   after('Logout', () => {
    cy.get('.Header').find('.logout-btn').click()
  })
});