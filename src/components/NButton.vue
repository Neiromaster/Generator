<template>
  <button class="btn btn-primary col-xs-12"
          :name="id"
          :type="action">{{ title }}</button>
</template>

<script>
  const TYPES = ['button', 'submit', 'reset'];

  export default {
    name: 'n-button',
    props: {
      id: String,
      title: String,
      action: {
        type: String,
        default: 'button',
        validator: type => TYPES.indexOf(type) >= 0,
      },
    },
  };
</script>

<style scoped>

</style>
