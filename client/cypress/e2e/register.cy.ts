describe('template spec', () => {
  beforeEach(() => {
    cy.tests_cleanup();
    cy.visit('http://localhost:3000/signup');
  });
  it('valid form submission ', () => {
    // type all valid values in a form
    cy.get('[data-cy="name"]')
      .type('fake person')
      .should('have.value', 'fake person');
    cy.get('[data-cy="address"]')
      .type('fake address')
      .should('have.value', 'fake address');
    cy.get('[data-cy="email"]')
      .type('fakeEmail@gmail.com')
      .should('have.value', 'fakeEmail@gmail.com');
    cy.get('[data-cy="gender"]')
      .type('male')
      .should('have.value', 'male');
    cy.get('[data-cy="area"]')
      .type('NSW')
      .should('have.value', 'NSW');
    cy.get('[data-cy="state"]')
      .type('fake state')
      .should('have.value', 'fake state');
    cy.get('[data-cy="className"]')
      .type('fake class')
      .should('have.value', 'fake class');
    cy.get('[data-cy="mobile"]')
      .type('123456789')
      .should('have.value', '123456789');
    cy.get('[data-cy="pincode"]')
      .type('123456')
      .should('have.value', '123456');
    cy.get('[data-cy="school"]')
      .type('Nowra Anglican')
      .should('have.value', 'Nowra Anglican');
    cy.get('[data-cy="password"]')
      .type('123456')
      .should('have.value', '123456');
    cy.get('[data-cy="password2"]')
      .type('123456')
      .should('have.value', '123456');

    // Locate and submit the form
    cy.get('[data-cy="submit"]')
      .click()

    // successful register alert appears
    cy.get('[data-cy="alert"]')
      .contains("Succesfully registered")

    // Verify the app remained on signup
    cy.location('pathname').should('eq', '/login');

  });
})