describe("GitHub test", () => {
    it("Get a GitHub user details", () => {
      cy.visit("/");
      cy.get('button').should('be.disabled');
      cy.get("form");
  
      cy.get('input[name="uname"]')
        .type("atapas")
        .should("have.value", "atapas");

      cy.get('input[name="uname"]').should('have.value', 'atapas').then(($button) => {
          // $button is yielded
          console.log('do something');
      })
  
      cy.get('button').should('be.enabled');

      // cy.server();
      cy.intercept({
        url: "/github/**",
        method: "GET",
        response: { name: "Tapas Adhikary" }
      });
  
      cy.get("form").submit();

      cy.on('uncaught:exception', (err, runnable) => {
        
        return false
      })
  
      cy.contains("Tapas Adhikary");
    });
  });