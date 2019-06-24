import VueRouter from 'vue-router';

import list from './main/list.vue';
import account from './main/Account.vue';
    import login from './subcom/login.vue';
    import reg from './subcom/register.vue';

const router = new VueRouter({
    routes: [
        {path: '/account', component: account,children: [
            {path: 'login', component: login},
            {path: 'reg', component: reg}
        ] },
        {path: '/list', component: list}
    ]
});

export default router;