/* import Vue from 'vue'; */
import Vue from '../node_modules/vue/dist/vue.js';
/* import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'; */
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
import { Button } from 'mint-ui';

Vue.use(VueRouter);
Vue.component(Button.name, Button);
/* Vue.use(MintUI); */

import router from './router.js';

import app from './App.vue';


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})