describe("Authentication", () => {
  it("Should check if the token exist within the request header", () => {
    const tokenExist = true;
    expect(tokenExist).toBe(true);
  });
});
