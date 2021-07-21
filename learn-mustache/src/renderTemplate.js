import lookup from './lookup'

export default function renderTemplate(tokens, data) {
  let resultStr = ''

  for(let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    if (token[0] === 'text') {
      resultStr += token[1]
    } else if (token[0] === 'name') {
      if (token[1] === '.') { // 处理 {{.}}
        resultStr += data
      } else {
        resultStr += lookup(data, token[1]) // 处理 {{a.b.c}}
      }
    } else if (token[0] === '#') {
      const arr = lookup(data, token[1]) // 内部数组
      for(let j = 0; j < arr.length; j++) {
        resultStr += renderTemplate(token[2], arr[j])
      }
    }
  }

  return resultStr
}
