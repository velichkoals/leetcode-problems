// function restoreString(s: string, indices: number[]): string {
// let finalWord = '';

// indices.map((elemIndex) => {
// 	finalWord += s[elemIndex];
// })

// return finalWord;
// };
function restoreString(s: string, indices: number[]): string {
  let shuffledS: string[] = [];
  for (let i = 0; i < indices.length; i++) {
      const moveToIndex = indices[i];
      shuffledS[moveToIndex] = s[i];
  }
   return shuffledS.join("");
};