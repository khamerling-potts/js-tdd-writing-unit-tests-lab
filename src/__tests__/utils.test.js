import { isPalindrome } from "../utils";

// Your tests here
describe("isPalindrome", () => {
  it("returns true if the given word is a palindrome", () => {
    const word = "racecar";
    const answer = isPalindrome(word);
    expect(answer).toBe(true);
  });
  it("should be case insensitive", () => {
    const word = "RaCecAr";
    const answer = isPalindrome(word);
    expect(answer).toBe(true);
  });
  it("should return false for an empty string", () => {
    const word = "";
    const answer = isPalindrome(word);
    expect(answer).toBe(false);
  });
  it("throws an error for non alpha numeric characters", () => {
    const word = "race%ca*r";
    expect(() => isPalindrome(word)).toThrow();
  });
  it("should throw an error for non strings", () => {
    const word = 23;
    expect(() => isPalindrome(word)).toThrow();
  });
});
