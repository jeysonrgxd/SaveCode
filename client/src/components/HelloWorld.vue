<template>
  <h3 class="first_title">{{ msg }}</h3>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .first_title{
    color:#41B883
  }
  
</style>
