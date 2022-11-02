<template>
  <div class="hello">
    <h1>{{ product.name }}</h1>
  </div>
</template>

<script>
import { getProducts } from '../api/api'

export default {
  name: 'HelloWorld',
  data(){
    return {
      product: {}
    }
  },
  props: {
    msg: String,
  },
  created() {
    this.getProductList();
  },
  methods: {
    getProductList(){
      getProducts().then(res=>{
        this.product = res.data.data[0] || {}
        console.log('this.productList',this.product)
      })
    }
  },
};
</script>
