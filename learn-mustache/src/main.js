import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate'

window.templateEngine = {
  render(templateStr, data) {

    const tokens = parseTemplateToTokens(templateStr)

    const resultStr = renderTemplate(tokens, data)
    
    return resultStr
  }
}
