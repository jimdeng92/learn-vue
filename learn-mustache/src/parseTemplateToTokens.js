import Scanner from './Scanner'
import nestTokens from './nestTokens'

export default (templateStr) => {

  const scanner = new Scanner(templateStr)

  const tokens = []

  while(!scanner.eos()) { // 不是最后的字符
    var words = scanner.scanUtil('{{') // 返回 {{ 前的字符
    if (words !== '') {
      // isInJJH = 


      tokens.push(['text', words])
    }
    scanner.scan('{{') // 跳过 {{

    words = scanner.scanUtil('}}')
    if (words !== '') {
      if (words.charAt(0) === '#') {
        tokens.push(['#', words.substring(1)])
      } else if (words.charAt(0) === '/') {
        tokens.push(['/', words.substring(1)])
      } else {
        tokens.push(['name', words])
      }
    }
    scanner.scan('}}')
  }

  return nestTokens(tokens)
}
