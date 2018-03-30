# AsheUI
Material design ui for vue2

[中文](https://github.com/hjdtl/AsheUI/blob/master/README.cn.md)


## Download
Install the component in the root directory of the project:

```npm
npm install ashe-ui -s
```

## Use (example)
1. Import AsheUI at the entry of the project:

```javascript
import AsheUI from 'ashe-ui'
Vue.use(AsheUI,Vue)
```

2. Instantiation in the template of the Vue component:

```html 
<d-news :newsObj=news />
```

3. d-news props data explain

The component receives the data through the 'newsObj':
```javascript
data() {
  return {
    news: {
          type: 5,
          imgList: ["https://p3.pstatp.com/list/6ec60003439bd0e04b45", "https://p3.pstatp.com/list/6ec60003439bd0e04b45", "https://p3.pstatp.com/list/6ec60003439bd0e04b45"],
          title:'This is title',
          time: 'This is date',
          author: 'author or other content'
      },
    }
}
```

## Webpack
```bash
webpack
```

## Other

Component list

* news
* slideDown
* loading

[View on github](https://github.com/hjdtl/AsheUI)