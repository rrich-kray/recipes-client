 // Create a function that splits each search criteria at capital letters and capitalizes the first word.
export const splitAndCapitalize = (input: string) => {
  const newArr: string[] = []
  input.split(/(?=[A-Z])/).map((word: string, i: number) => {
    if (i === 0) {
      newArr.push(word[0].toUpperCase() + word.slice(1))
    } else {
      newArr.push(word)
    }
  })
  return newArr.join(' ')
}

// export const createUrl = (baseUrl: string, params: object[]) => {
//   baseUrl = `${baseUrl}?`
//   for (const parameter in params) {
//     if (params[parameter] !== '') {
//       Object.keys(params).indexOf(parameter) === 0
//       ? baseUrl = `${baseUrl}req=${parameter}=${params[parameter]}`
//       : baseUrl = `${baseUrl}&${parameter}=${params[parameter]}`
//     }
//   }
//   return baseUrl;
// }