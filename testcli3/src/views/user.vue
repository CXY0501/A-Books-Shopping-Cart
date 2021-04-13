<template>
  <div class="user">
    <h1>Hello,{{$route.query.name}}</h1>
    <p>Great to see you again!</p>
  </div>
</template>

<script>
export default{
  name:'User',
  data(){
    return{
      name: 'Chalie'
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
