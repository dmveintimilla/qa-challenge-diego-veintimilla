describe('API Test - Signup', () => {
    const newUser = {
      username: 'newuser',
      password: 'password123'
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
        body: newUser,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200); 
        cy.log('Response body:', response.body);
      });
    });
  });
  