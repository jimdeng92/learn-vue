export default (tokens) => {
  const nestedTokens = [] // 结果数组

  const sections = [] // 栈结构
  let controller = nestedTokens // 控制器，初始值为结果数组

  for(let i = 0; i < tokens.length; i++) {
    const token = tokens[i]

    switch(token[0]) {
      case '#':
        sections.push(token) // 入栈
        controller.push(token) // 
        controller = token[2] = [] // 改变控制器位置
        break;
      case '/':
        sections.pop() // 出栈
        controller = sections.length ? sections[sections.length - 1][2] : nestedTokens // 改变控制器位置
        break;
      default:
        controller.push(token) // 推入控制器
    }
  }


  return nestedTokens
}
