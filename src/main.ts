import { createApp } from 'vue';

// import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Layout from './layout/layout.vue';
import router from './common/routes';
import store from './modals/store';
import App from './App.vue';
import panel from './define_directive/panel'





const app = createApp(Layout);
// app.config.productionTip = false;
// app.use(Antd);
app.use(router);
app.use(store);
// 自定义事件
app.directive('panel',panel)
app.mount('#app')


