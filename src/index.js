import news from './news.vue';
import slideDown from './slidedown.vue'

const components = {
    news,
    slideDown
};

const install = function (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.component(components[key].name, components[key])
    })
};

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

export {install};

export default {install};