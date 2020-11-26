describe("Form test", () => {
    it("Can fill the form", () => {
      cy.visit("/");
      cy.get("form");
  
      cy.get('input[name="name"]')
        .type("Tapas")
        .should("have.value", "Tapas");
  
      cy.get('input[name="email"]')
        .type("abcd@1234.com")
        .should("have.value", "abcd@1234.com");
  
      cy.get("textarea")
        .type("Mind you if I ask some silly question?")
        .should("have.value", "Mind you if I ask some silly question?");
  
      cy.server();
      cy.route({
        url: "/users/**",
        method: "POST",
        response: { status: "Form saved!", code: 201 }
      });
  
      cy.get("form").submit();
  
      cy.contains("Form saved!");
    });
  });