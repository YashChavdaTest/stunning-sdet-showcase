describe('Five-chapter portfolio', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows exactly five chapters in the intended order', () => {
    cy.get('main > section[data-chapter]').should('have.length', 5)
      .then(($chapters) => {
        expect([...$chapters].map((chapter) => chapter.id)).to.deep.equal([
          'intro', 'experience', 'expertise', 'projects', 'connect'
        ]);
      });
    cy.get('#intro h1').should('contain.text', "I'm Yash.");
    cy.get('#experience h2').should('contain.text', "worked on");
    cy.get('#expertise h2').should('contain.text', 'value to a team');
    cy.get('#projects h2').should('contain.text', 'build');
    cy.get('#connect footer').should('contain.text', 'Yash Chavda');
  });

  it('navigates between chapters from desktop navigation', () => {
    cy.viewport(1440, 900);
    cy.get('.main-nav a[href="#experience"]').click();
    cy.location('hash').should('eq', '#experience');
    cy.get('#experience').should('be.visible');
    cy.get('.main-nav a[href="#projects"]').click();
    cy.location('hash').should('eq', '#projects');
  });

  it('makes all five chapters accessible from the mobile menu', () => {
    cy.viewport(390, 844);
    cy.get('button[aria-label="Open navigation"]').click();
    cy.get('.main-nav').should('have.class', 'is-open');
    cy.get('.main-nav a[href="#projects"]').click();
    cy.location('hash').should('eq', '#projects');
    cy.get('.main-nav').should('not.have.class', 'is-open');
    cy.get('#projects .project-card').should('have.length', 3);
  });

  it('keeps the footer inside the final chapter', () => {
    cy.get('#connect .site-footer').should('exist');
    cy.get('.site-footer a[href="#intro"]').should('exist');
  });
});
