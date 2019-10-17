<template>
    <div>
        <Navbar>

        </Navbar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import StartComp from '../components/StartComp.vue';
import Navbar from '../components/Navbar.vue';
export default Vue.extend({
  name: 'home',
  components: {
      Navbar: Navbar,
      Startcomp: StartComp,
  },
});
</script>

<style lang="scss">
    b-navbar-brand{
        alignment: center;
    }
    .b-button {
        position: absolute;
        top: 50%;
        alignment: center;
    }
</style>


