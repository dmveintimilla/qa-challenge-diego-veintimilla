describe('API Test - Signup and Login', () => {
  const newUser = {
    username: 'newuser_diegoveintimilla',
    password: 'password123'
  };

  const existingUser = {
    username: 'newuser',
    password: 'password123'
  };


  const incorrectUser = {
    username: 'wronguser',
    password: 'wrongpassword'
  };

  it('Create a new user', () => {
    cy.request('POST', 'http://api.demoblaze.com/signup', newUser)
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Response body:', response.body);
      });
  });

  it('Attempt to create an existing user', () => {
    cy.request({
      method: 'POST',
      url: 'http://api.demoblaze.com/signup',
      body: existingUser,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log('Response body:', response.body);
    });
  });

  it('Login with correct username and password', () => {
    cy.request('POST', 'http://api.demoblaze.com/login', newUser)
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Response body:', response.body);
      });
  });

  it('Login with incorrect username and password', () => {
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
