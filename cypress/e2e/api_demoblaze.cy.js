describe('API - Signup and Login', () => {
  const newUser = {
    username: 'newuser_diegoveintimilla',
    password: 'password123'
  };

  const incorrectUser = {
    username: 'wronguser',
    password: 'wrongpassword'
  };

  it('Crear nuevo usuario', () => {
    cy.request('POST', 'http://api.demoblaze.com/signup', newUser)
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Response body:', response.body);
      });
  });

  it('Intentar crear un usuario existente', () => {
    cy.request({
      method: 'POST',
      url: 'http://api.demoblaze.com/signup',
      body: newUser,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log('Response body:', response.body);
    });
  });

  it('Login con credenciales correctas', () => {
    cy.request('POST', 'http://api.demoblaze.com/login', newUser)
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Response body:', response.body);
      });
  });

  it('Login con credenciales incorrectas', () => {
    cy.request({
      method: 'POST',
      url: 'http://api.demoblaze.com/login',
      body: incorrectUser,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log('Response body:', response.body);
    });
  });
});
