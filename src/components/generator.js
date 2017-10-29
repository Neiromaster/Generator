import NText from './NText';
import NCheckbox from './NCheckbox';
import NLink from './NLink';
import NButton from './NButton';

export default {
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
  components: {
    NText,
    NPassword: NText,
    NCheckbox,
    NLink,
    NButton,
  },
  render(h) {
    const vm = this;
    const mainGroups = this.groups.map((group) => {
      const fieldSet = group.fields.map((f) => {
        if (f.type === 'field') {
          const props = vm.fields.find(field => field.id === f.code);
          return h(`n-${props.type}`, { props });
        }
        return h('div', '');
      });
      return h('div', {
        class: [`col-md-${vm.divider(vm.groups.length)}`],
      }, fieldSet);
    });
    return h('div', { class: ['row'] }, mainGroups);
  },
};
