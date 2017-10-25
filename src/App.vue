<template>
  <div id="app">
    <div class="container panel panel-default">
      <form action="#" role="form">
        <button class="btn btn-primary col-xs-12">Вход</button>
      </form>
      <p>{{ erdqwr }}</p>
    </div>
  </div>
</template>

<script>
  import NCheckbox from './components/NCheckbox';

  export default {
    name: 'app',
    components: {
      NCheckbox,
    },
    data() {
      return {
        erdqwr: true,
      };
    },

    watch: {
      erdqwr(newVal) {
        console.log(newVal);
      },
    },
  };
</script>

<style>
</style>
