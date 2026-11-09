describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays hero heading after typing effect', () => {
    cy.contains('Yash Chavda').should('be.visible');
  });

  it('navigates to Skills section via navbar', () => {
    cy.contains('button', 'Projects').click();
    cy.contains('h2', 'Skills & Projects').should('be.visible');
  });

  it('email link has mailto href', () => {
    cy.contains('a', 'Email Me').should('have.attr', 'href').and('match', /^mailto:/);
  });
});
