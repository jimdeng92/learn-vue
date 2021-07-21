import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

// patch 函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule])

// 创建虚拟节点
// h 函数可以嵌套
const vNode = h(
  'a', 
  {
    props: {
      href: 'http://atguigu.com',
      target: '_blank'
    }
  }, 
  [
    h('span', {}, '尚硅谷')
  ]
)

// 挂载
const container = document.getElementById('container')
patch(container, vNode)
