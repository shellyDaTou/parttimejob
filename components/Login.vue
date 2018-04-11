<template>
  <div>
    <mt-header title="固定在顶部"></mt-header>
    <br/>
    <mt-button type="default" @click.native="showToast">default</mt-button>
    <mt-button type="primary" @click.native="showToast2">primary</mt-button>
    <mt-button type="danger" @click.native="showToast">danger</mt-button>
    <br/>
    <mt-button size="small">small</mt-button>
    <mt-button size="normal">normal</mt-button>
    <br/>
    <mt-button size="large">large</mt-button>
    <br/>
    <mt-field placeholder="请输入用户名"></mt-field>
    <mt-field placeholder="请输入密码" type="password"></mt-field>

    <mt-button type="primary" @click.native="toMainPage">登录</mt-button>
    <router-link to='/main'>登录</router-link>
    
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';

  export default {
    data() {
      return {
        name: "Login"
      }
    },
    computed: {},
    methods: {
      showToast() {
        Toast('提示信息');
      },
      showToast2() {
        Toast({
          message: '提示',
          position: 'bottom',
          duration: 5000
        });
      },
      toMainPage() {
        this.$router.push({path: "/main"})
      }
    },
    components: {}
  }
</script>

<style scoped>

</style>
