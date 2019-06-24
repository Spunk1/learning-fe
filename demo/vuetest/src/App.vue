<template>
    <div>
        <h1>APP组件</h1>
        <router-link to="/account">account</router-link>
        <router-link to="/list">list</router-link>
        <mt-button type="danger" @click="show">danger</mt-button>
        <router-view></router-view>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';
    export default {
        data(){return{};},
        methods: {
            show(){
                Toast({
                    message: '操作成功',
                    position: 'top',
                    duration: 5000,
                    iconClass: 'glyphicon glyphicon-ok',
                    className: 'box'
                });
            },
        }
    }

</script>

<style lang="less">

</style>
