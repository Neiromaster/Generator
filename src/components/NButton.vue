<template>
  <button class="btn btn-primary col-xs-12"
          :name="name"
          :type="type">{{ text }}</button>
</template>

<script>
  const TYPES = ['button', 'submit', 'reset'];

  export default {
    name: 'n-button',
    props: {
      name: String,
      text: String,
      type: {
        type: String,
        default: 'button',
        validator: type => TYPES.indexOf(type) >= 0,
      },
    },
  };
</script>

<style scoped>

</style>
