<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    getProducts() {
      return Promise.resolve([{ name: '111' }]);
    },
  },
};
</script>
