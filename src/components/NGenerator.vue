<template>
  <div class="row">
    <div v-for="(column, i) in groups" :key="i" :class="`col-md-${divider(groups.length)}`">
      <div v-for="(field, j) in column.fields" :key="j"
      >{{ field.type }}
      </div>
      <div v-else
           v-for="elem in field.fields"
           :class="`col-md-${divider(field.fields.length)}`">
        <component v-for="field in column"
                   v-if="field.type === 'field'"
                   :is="field.code"></component>
      </div>
    </div>
  </div>
</template>

<script>
  import NText from './NText';

  export default {
    name: 'n-generator',
    components: {
      NText,
    },
    props: {
      groups: {
        type: Array,
        default: [],
      },
      fields: {
        type: Array,
        default: [],
      },
    },
    methods: {
      divider(value) {
        return 12 / value;
      },
    },
    render(h) {
      return h('h1', '123456');
    },
  };
</script>

<style scoped>

</style>
