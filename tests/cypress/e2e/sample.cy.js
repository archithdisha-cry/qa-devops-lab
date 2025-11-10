describe('App homepage', () => {
  it('should load successfully', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Flexitive-style QA DevOps demo');
  });
});
