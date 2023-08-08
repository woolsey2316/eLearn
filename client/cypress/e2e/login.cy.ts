describe("user logs in", () => {
  before(() => {
    cy.tests_cleanup();
    cy.task("createUser");
  });
  // signs in to access protected homepage, then signs out to see login page
  it("logged in user can see the protected page", () => {
    cy.visit('http://localhost:3000/login');

    cy.get('[data-qa="email"]').type(Cypress.env("userEmail"));
    cy.get('[data-qa="password"]').type(Cypress.env("userPassword"));
    cy.get('[data-qa="login-button"]').click();
    cy.get('[data-qa="protected-page"]').should("be.visible");

    cy.get('[data-qa="user-profile"]').click();
    cy.get('[data-qa="log-out-btn"]').click();
    cy.get('[data-qa="sign-out-btn"]').should("be.visible");
    cy.get('[data-qa="sign-out-btn"]').click();

    cy.get('[data-qa="not-logged"]').should("be.visible");
  });
});