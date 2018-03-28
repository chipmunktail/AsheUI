import news from './news.vue'

const components = {
    news
};

const install = function (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.component(components[key].name, components[key])
    })
};

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

export {install};

export default {install};