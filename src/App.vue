<template>
  <div id="app" class="bg">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
      name: 'app',
    });
</script>

<style lang="scss">

  @import '/../node_modules/bootstrap/scss/bootstrap';
  @import '/../node_modules/bootstrap-vue/src/index.scss';

  body, html {
      min-height: 100%;
  }
  .bg {
      background-image: radial-gradient(green, black);
      background-size: 100% auto;
      background-repeat: no-repeat;
      height: 100vh;
  }

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
