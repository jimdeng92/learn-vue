export default function lookup(dataObj, keyName) {
  let temp = dataObj

  if (keyName.indexOf('.') > -1) {
    const keys = keyName.split('.')

    for(let i = 0; i < keys.length; i++) {
      temp = temp[keys[i]]
    }

    return temp
  }

  return dataObj[keyName]
}
