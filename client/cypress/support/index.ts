export {}

declare global {
  namespace Cypress {
    interface Chainable {
      tests_cleanup: () => void;
      simulate_login: (email: string, password: string) => void;
    }
  }
}