<template>
  <div class="form-group col-xs-12">
    <label
      v-if="title"
      :for="id"
      class="control-label"
    >{{ title }}</label>
    <input
      :id="id"
      :type="localType"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      class="form-control"
    >
  </div>
</template>

<script>
  const TYPES = ['text', 'email', 'password'];

  export default {
    name: 'n-text',
    props: {
      id: {
        type: String,
      },
      type: {
        type: String,
        default: 'text',
        validator: type => TYPES.indexOf(type) >= 0,
      },
      title: {
        type: String,
        default: null,
      },
      value: {
        type: String,
        default: null,
      },
      placeholder: {
        type: String,
        default: null,
      },
    },
    data() {
      return {
        name: this.id,
      };
    },
    computed: {
      localType() {
        return TYPES.indexOf(this.type) >= 0 ? this.type : 'text';
      },
    },
  };
</script>

<style scoped>

</style>
