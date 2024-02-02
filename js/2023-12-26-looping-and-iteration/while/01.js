let i = 10;

while (i > 0) {
  console.log(i);
  i--;
}

//isPalindrome  - with while loop

function isPalindrome(word) {
  const cleanedWord = word.replace(/[^a-zA-Z]/g, "").toLocaleLowerCase("tr");
  let i = 0;
  while (i < cleanedWord.length / 2) {
    if (cleanedWord[i] === cleanedWord[cleanedWord.length - 1]) {
      return true;
    }
    i++;
    return false;
  }
}





