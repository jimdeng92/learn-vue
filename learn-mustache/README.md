# Mustache-mini

### Mustache 的简化版

**它的核心原理是将模板字符串转化为 tokens（parseTemplateToTokens 方法），再将 tokens 和数据结合生成最终的 DOM 字符串（renderTemplate 方法）**。

主要步骤：

- 通过 Scanner 类将模板字符串转成最简单的二维数组；
- 通过 nestTokens 将模板字符串中的遍历模板利用“栈”思想生成更多维的数组，使 tokens 与模板字符串匹配层级关系；
- 通过 renderTemplate 将 tokens 递归处理拼接成 DOM 字符串（包括处理特殊的 `{{.}}` 和 `{{a.b.c}}`）。


*注意：这个版本不处理带布尔值的判断逻辑。*



