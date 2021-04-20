describe('Dashboard', () => {
  beforeEach(() => {
       // cy.intercept('POST', '/graphql', (req) => {
    //   const { body } = req
    //   if (body.hasOwnProperty('query') && req.body.query.includes("venues")) {
    //     console.log('venue query')
   //     req.reply({fixture: 'venues.json'})
   //   }
    // })

  //   cy.intercept('POST', '/graphql', (req) => {
  //     const { body } = req
  //      if (body.hasOwnProperty('query') && req.body.query.includes("user")) {
  //       req.reply({fixture: 'login.json'})
  //       console.log( req, 'user query')
  //     } 
  //   })

  //  cy.clock(Date.UTC(2021, 3, 20), ['Date']);
    cy.visit('http://localhost:3000/');
  });

  it('should have a header', () => {
    cy.get('.Header').find('.logo').should('have.attr', 'src', '/static/media/CuratourLogo.90886745.png')
  });

  it('should have a navbar', () => {
    cy.get('.NavBar').find('a').should('have.length', 3)
  });

  it('should have a Contacts Preview', () => {
    cy.get('.ContactsPreview').find('.top-three a').should('be.visible')
    cy.get('.ContactsPreview p').eq(0).should('contain', 'Main Contacts')
    cy.get('.ContactsPreview').find('.all-contacts').should('contain', 'All Contacts')
      .click().get('.Contacts').should('be.visible')
    cy.get('.Header').find('.logo').click()
  });

  it('should have a Tour Display with the name of the user\'s current tour', () => {
    cy.get('.TourDisplay').find('.tour-name').should('contain', 'MVP Tour')
    cy.get('.TourDisplay').find('.tour-duration').should('be.visible')
    cy.get('.TourDisplay').find('.change-btn').should('be.visible')
  });

  it('should have an upcoming week display of events', () => {
    cy.get('.fc').find('.fc-toolbar-title').should('be.visible')
    cy.get('.fc').find('.fc-list-event-time').should('be.visible')
    cy.get('.fc').find('.fc-list-event-title').should('be.visible')
  });
});

