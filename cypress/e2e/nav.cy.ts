describe('Navigation', () => {
  describe('Desktop width', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });

    it('should navigate to the home page', () => {
      cy.url().should('include', '/');
      cy.get('h1').contains('Welcome');
    });

    it('should navigate to the browse page', () => {
      cy.get('a[href*="browse"]').click();
      cy.url().should('include', '/browse');
      cy.get('h1').contains('Browse');
    });

    it('should navigate to the search page', () => {
      cy.get('a[href*="search"]').click();
      cy.url().should('include', '/search');
      cy.get('h1').contains('Search');
    });

    it('should navigate to the ask page', () => {
      cy.get('a[href*="ask"]').click();
      cy.url().should('include', '/ask');
      cy.get('h1').contains('Ask');
    });

    it('should navigate to the profile page', () => {
      cy.get('[data-test="user-menu"]').click();
      cy.get('a[href*="profile"]').click();

      cy.url().should('include', '/profile');
      cy.get('h1').contains('Profile');
    });

    it('should navigate to the Sign out page', () => {
      cy.get('[data-test="user-menu"]').click();
      cy.get('a[href*="sign-out"]').click();

      cy.url().should('include', '/sign-out');
      cy.get('h1').contains('Sign out');
    });
  });

  describe('Mobile width', () => {
    beforeEach(() => {
      cy.viewport(320, 568);
      cy.visit('http://localhost:3000/');
      cy.get('[data-test="menu"]').click();
    });

    it('should navigate to the home page', () => {
      cy.url().should('include', '/');
      cy.get('h1').contains('Welcome');
    });

    it('should navigate to the browse page', () => {
      cy.get('[data-test="mobile-nav"] > a[href*="browse"]').click();
      cy.url().should('include', '/browse');
      cy.get('h1').contains('Browse');
    });

    it('should navigate to the search page', () => {
      cy.get('[data-test="mobile-nav"] > a[href*="search"]').click();
      cy.url().should('include', '/search');
      cy.get('h1').contains('Search');
    });

    it('should navigate to the ask page', () => {
      cy.get('[data-test="mobile-nav"] > a[href*="ask"]').click();
      cy.url().should('include', '/ask');
      cy.get('h1').contains('Ask');
    });

    it('should navigate to the profile page', () => {
      cy.get('a[href*="profile"]').click();
      cy.url().should('include', '/profile');
      cy.get('h1').contains('Profile');
    });

    it('should navigate to the Sign out page', () => {
      cy.get('a[href*="sign-out"]').click();
      cy.url().should('include', '/sign-out');
      cy.get('h1').contains('Sign out');
    });
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
