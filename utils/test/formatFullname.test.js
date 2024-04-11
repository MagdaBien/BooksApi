const formatFullName = require("../formatFullName.js");
const expect = require("chai").expect;
describe("FormatFullName", () => {
  it("should return an error if nothing is provided", () => {
    expect(formatFullName()).to.equal("Error");
    expect(formatFullName("")).to.equal("Error");
  });
  it("should return an error if something other than string is provided", () => {
    expect(formatFullName(123)).to.equal("Error");
    expect(formatFullName(true)).to.equal("Error");
    expect(formatFullName(undefined)).to.equal("Error");
    expect(formatFullName([])).to.equal("Error");
  });
  it("should return an error if the format is different than <firstname> <lastname> or only the first name or only the surname was given", () => {
    expect(formatFullName("Ana Black Kowalska")).to.equal("Error");
    expect(formatFullName("Kowalska")).to.equal("Error");
  });
  it("should return firstname and lastname with first letter uppercase only", () => {
    expect(formatFullName("AnA BlAcK")).to.equal("Ana Black");
    expect(formatFullName("ANA BLACK")).to.equal("Ana Black");
    expect(formatFullName("ana black")).to.equal("Ana Black");
  });
});
