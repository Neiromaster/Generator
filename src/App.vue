<template>
  <div id="app">
    <div class="container panel panel-default">
      <form action="" role="form">
        <n-generator :groups="fieldsGroups" :fields="fields"></n-generator>
      </form>
    </div>
  </div>
</template>

<script>
  import NGenerator from './components/generator';

  export default {
    name: 'app',
    components: {
      NGenerator,
    },
    data() {
      return {
        fieldsGroups: [],
        fields: [],
      };
    },
    methods: {
      fetchData() {
        return fetch('/static/json/testdata.json')
          .then(value => value.json());
      },
      initData({ fieldsGroups, fields }) {
        this.fieldsGroups = fieldsGroups;
        this.fields = fields;
      },
    },
    mounted() {
      this.fetchData()
        .then(this.initData);
    },
  };
</script>

<style>
</style>
