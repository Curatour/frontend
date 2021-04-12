context('Home', () => {
  beforeEach(() => {
    cy.visit('https://localhost:3000/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('should exist', () => {
    cy.get('div')
  })
})