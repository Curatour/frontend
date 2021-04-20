describe('New Event', () => {
  beforeEach(() => {
    // cy.intercept('POST', '/graphql', (req) => {
    //   const { body } = req
    //   if (body.hasOwnProperty('query') && req.body.query.includes('events')) {
    //     req.reply({ fixture: 'events.json'});
    //   } 
    // })
    // cy.intercept('POST', '/graphql', (req) => {
    //   const { body } = req
    //   if (body.hasOwnProperty('mutation') && req.body.query.includes('events')) {
    //     req.reply({ fixture: 'newEvent.json'})
    //   } 
    // })
    cy.clock(Date.UTC(2021, 3, 20), ['Date'])
    cy.visit('http://localhost:3000/')
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

});

// "createEvent": {
//      "endTime": "2021-04-14T00:00:00Z",
//      "id": "32",
//      "name": "FIXTURE EVENT",
//      "startTime": "2021-04-14T00:00:00Z",
//      "venue": {
//        "address": "910 Mayme Locks",
//        "city": "Denver",
//        "id": "4",
//        "name": "Gyachung Kang Amphitheater",
//        "state": "CO",
//        "zip": "80203"