describe('empty spec', () => {
  it('should render a link with the correct text', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('a', 'Find Books');
    /* using @testing-library/cypress */
    cy.findByText('Find Books').should('exist');
  });
});
