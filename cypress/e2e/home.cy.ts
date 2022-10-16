describe('Home', () => {
  it('can load home page', () => {
    cy.visit('/');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
