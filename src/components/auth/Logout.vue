<template>
    <div>You are logged out</div>
</template>
<script>
export default {
  created(){
      this.$store.dispatch('LOGOUT')
      // eslint-disable-next-line no-unused-vars
      .then(response =>{
          this.$router.push({name: 'home'})
      })
  }
}
</script>