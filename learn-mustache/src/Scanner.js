export default class Scanner {
  constructor(templateStr) {
    this.templateStr = templateStr // 模板字符串
    this.pos = 0 // 扫描索引
    this.tail = templateStr // 尾部
  }

  // 走过指定内容，没有返回值
  // tag {string} 字符
  scan(tag) {
    if (!this.eos()) {
      this.pos += tag.length
      this.tail = this.templateStr.substring(this.pos)
    }
  }

  // 返回扫描过的字符串
  // stopTag {string} 结束标签
  scanUtil(stopTag) {
    const pos_backup = this.pos
    // 首个字符不是 {{ 就继续执行，直到最后一个字符
    while (this.tail.indexOf(stopTag) !== 0 && !this.eos()) {
      this.pos++
      this.tail = this.templateStr.substring(this.pos)
    }

    return this.templateStr.substring(pos_backup, this.pos)
  }

  // end of string
  eos() {
    return this.pos >= this.templateStr.length
  }
}
