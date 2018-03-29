# AsheUI
material design ui for vue2

使用说明
## 下载
在项目的根目录下安装改组件：

```npm
npm install ashe-ui -s
```

## 使用(示例)
1. 在项目入口的引入该框架：

```javascript
import AsheUI from 'ashe-ui'
Vue.use(AsheUI,Vue)
```

2. 在Vue组件的template中实例化：

```html 
<d-news :newsObj=news />
```

3. d-news props数据说明

在实例的组件通过newsObj接收数据，数据类型要求：
```javascript
data() {
  return {
    news: {
          type: 5,
          imgList: ["https://p3.pstatp.com/list/6ec60003439bd0e04b45", "https://p3.pstatp.com/list/6ec60003439bd0e04b45", "https://p3.pstatp.com/list/6ec60003439bd0e04b45"],
          title:'这是你的标题部分',
          time: '这里显示时间',
          author: '作者姓名等其他内容'
      },
    }
}
```

## 打包
```bash
webpack
```

数据格式和属性：

- type: Number 面板类型，1.左图片，右标题 2.左标题，右图片 3.无图片 4.上标题，下图片列表 5.上标题，下大图
- imgList: Array 图片列表
- title: String 文章标题
- time: String 文章时间
- author: String 作者等其他信息

## 其他

组件清单

* news
* slideDown
* loading


该组件还在更新中，欢迎issues。

2018年3月28日
