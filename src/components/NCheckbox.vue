<template>

  <div class="checkbox">
    <input ref="input" class="checkbox"
           type="checkbox"
           :id="id"
           autocomplete="off"
           :checked="active"
           :name="name"
    />
    <label :for="id" @click.prevent="toggle">{{ title }}</label>
  </div>
</template>

<script>
  export default {
    name: 'n-checkbox',
    model: {
      prop: 'checked',
      event: 'change',
    },
    props: {
      id: String,
      checked: null,
      value: null,
      title: '',
    },
    data() {
      return {
        name: this.id,
      };
    },
    computed: {
      active() {
        debugger;
        return this.checked === this.value;
      },
    },
    methods: {
      focus() {
        this.$refs.input.focus();
      },
      toggle() {
        this.focus();
        debugger;
        if (this.active) {
          this.$emit('change', false);
        } else {
          this.$emit('change', this.value);
        }
      },
    },
  };
</script>

<style scoped>
  .checkbox input[type="checkbox"] {
    opacity: 0;
  }

  .checkbox label {
    position: relative;
    display: inline-block;

    /*16px width of fake checkbox + 6px distance between fake checkbox and text*/
    padding-left: 27px;
  }

  .checkbox label::before,
  .checkbox label::after {
    position: absolute;
    content: "";

    /*Needed for the line-height to take effect*/
    display: inline-block;
  }

  /*Outer box of the fake checkbox*/
  .checkbox label::before {
    height: 21px;
    width: 21px;

    border: 1px solid #DBDBDB;
    left: 0;
    border-radius: 3px;
    /*(24px line-height - 16px height of fake checkbox) / 2 - 1px for the border
     *to vertically center it.
     */
    top: 0;
  }

  /*Checkmark of the fake checkbox*/
  .checkbox label::after {
    height: 5px;
    width: 9px;
    border-left: 2px solid #7ACF1A;
    border-bottom: 2px solid #7ACF1A;

    transform: rotate(-45deg);

    left: 6px;
    top: 7px;
  }

  /*Hide the checkmark by default*/
  .checkbox input[type="checkbox"] + label::after {
    content: none;
  }

  /*Unhide on the checked state*/
  .checkbox input[type="checkbox"]:checked + label::after {
    content: "";
  }

  /*Adding focus styles on the outer-box of the fake checkbox*/
  .checkbox input[type="checkbox"]:focus + label::before {
    outline: rgb(59, 153, 252) auto 5px;
  }

</style>
