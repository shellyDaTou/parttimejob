<template>
  <div>
    <mt-header title="固定在顶部"></mt-header>
    <br/>
    <mt-button type="primary" @click.native="toLoginPage">退出</mt-button>
    <router-link to='/'>退出</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "Login"
      }
    },
    computed: {},
    methods: {
      toLoginPage() {
        this.$router.push({path: "/"})
      }
    },
    components: {}
  }
</script>

<style scoped>

</style>
