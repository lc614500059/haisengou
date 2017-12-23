<template>
  <div><h3>新闻列表---{{ id }}</h3></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created(){
    console.log(this)
  },
  props:["id"]
};
</script>

<style lang="scss" scoped>

</style>