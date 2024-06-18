describe('Flujo de compra en demoblaze', () => {
  it('Debería agregar dos productos al carrito y completar la compra', () => {
    cy.visit('https://www.demoblaze.com/');

    
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });

    cy.go('back');
    cy.go('back');

    cy.contains('Nokia lumia 1520').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
    cy.go('back');

    cy.get('#cartur').click();

    cy.contains('Place Order').click();
    cy.get('#name').type('Juan Perez');
    cy.get('#country').type('Ecuador');
    cy.get('#city').type('Quito');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('12');
    cy.get('#year').type('2025');
    cy.contains('Purchase').click();

    cy.get('.sweet-alert').should('be.visible');
    cy.get('.confirm').click();
  });
});
