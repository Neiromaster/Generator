<template>
  <div class="form-group">
    <label
      v-if="title"
      :for="id"
      class="control-label"
    >{{ title }}</label>
    <input
      :type="localType"
      :id="id"
      :placeholder="placeholder"
      :value="localValue"
      :name="name"
      @input="onInput($event.target.value)"
      @change="onChange()"
      class="form-control"
    >
  </div>
</template>

<script>
  const TYPES = ['text', 'email', 'password'];

  export default {
    name: 'n-text',
    data() {
      return {
        localValue: this.value,
        name: this.id,
      };
    },
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
        default: null,
      },
      placeholder: {
        type: String,
        default: null,
      },
    },
    computed: {
      localType() {
        return TYPES.indexOf(this.type) >= 0 ? this.type : 'text';
      },
    },
    watch: {
      value(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.localValue = newVal;
        }
      },
      localValue(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.$emit('input', newVal);
        }
      },
    },
    methods: {
      onInput(value) {
        this.localValue = value;
      },
      onChange() {
        this.$emit('change', this.localValue);
      },
    },
  };
</script>

<style scoped>

</style>
