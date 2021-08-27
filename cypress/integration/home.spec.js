describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    expect(true).to.equal(true);
  });
});