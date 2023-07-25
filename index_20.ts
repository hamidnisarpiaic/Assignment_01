let arr: string[] = ["Urdu", "English", "Punjabi", "Pashto", "Kashmiri"];
let languages: string = "";

for (let i = 0; i < arr.length; i++) {
  if (i === 0) {
    languages += arr[i];
  } else if (i === arr.length - 1) {
    languages += ` & ${arr[i]}`;
  } else {
    languages += `, ${arr[i]}`;
  }
}

console.log(`I know ${languages} very well.`);