<template>
  <div class="user">
    <h1>Hello,{{$route.params.userid}}</h1>
    <p>Great to see you again!</p>
  </div>
</template>

<script>
export default{
  name:'User',
  data(){
    return{
      name: 'chalie'
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
