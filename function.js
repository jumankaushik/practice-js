let countries = ["chine", "india", "USA"]
let furits = ["apple", "mango"]

function genSentence (desc, arr){
   let baseString = `The ${arr.length} ${desc} are `
   const lastIndex = arr.length - 1
   for (let i = 0; i < arr.length; i++) {
       if (i === lastIndex) {
           baseString += arr[i]
       } else {
           baseString += arr[i] + ", "
       }
   }
   return baseString
}

const sen = genSentence("best fruits", furits)
console.log(sen)