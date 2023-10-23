// Your code here
export function isPalindrome(word) {
  if (word === "") return false;

  if (!/^[A-Za-z]+$/.test(word) || typeof word !== "string") {
    throw new Error("invalid word");
  }

  const firstLetter = word[0];
  const lastLetter = word[word.length - 1];
  //base case
  if (word.length <= 2) {
    return firstLetter.toLowerCase() === lastLetter.toLowerCase();
  }

  //recursion
  if (firstLetter.toLowerCase() === lastLetter.toLowerCase()) {
    return isPalindrome(word.slice(1, -1));
  }
  return false;
}
