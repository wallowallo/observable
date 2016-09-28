describe("observable", function() {
  let observable = require("../observable.js");
  it("returns a function", function() {
    expect(typeof observable).toBe("function");
  });
})
