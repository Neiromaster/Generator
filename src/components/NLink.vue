<template>
  <a class="col-xs-12"
     :href="href"
     :class="isButton ? 'btn' : 'link'"
     :role="isButton ? 'button' : 'link'"
  >
    {{ title }}
  </a>
</template>

<script>
  export default {
    name: 'n-link',
    props: {
      id: String,
      href: String,
      title: String,
    },
    computed: {
      isButton() {
        return this.id && this.id.substring(0, 3) === 'reg';
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap/variables";

  a.btn {
    font-weight: bold;
    &:hover {
      color: $link-color;
    }
  }

  a.link {
    text-align: right;
    text-decoration: underline;
  }
</style>
