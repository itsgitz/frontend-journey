import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    return { count, increment };
  },
  template: `<div><h1>Count is: {{ count }}</h1><button @click="increment">Add</button></div>`,
};
