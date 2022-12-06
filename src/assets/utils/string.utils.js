const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const allSize = {
  0:0,1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7
}

const allEvent = {
  "Navidad": "NAVIDAD",
  "Verano": "VERANO",
  "Halloween": "HALLOWEEN",
  "Disfraz": "DISFRAZ"
}

export const generateRandomString = () => {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result
}

export const getAllSize = (sizes) => {
  const onlySizes = []
  const onlyEvent = []
  sizes.forEach((size) => {
    if (allSize[size.categoryName] !== undefined) {
      onlySizes.push(allSize[size.categoryName])
    }
    if (allEvent[size.categoryName] !== undefined) {
      onlyEvent.push(allEvent[size.categoryName])
    }
  })

  return ({ onlyEvent, onlySizes })
}



