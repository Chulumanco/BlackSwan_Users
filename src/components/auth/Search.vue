<template>
    <input type="text" placeholder="Search...."
    v-model.trim="input"
    v-on:input="search()"
    ref="input"
    @blur="closeSearchBar()">

</template>
<script>
export default {
    name:'search',
    data: ()=>({
        input:''
    }),
    methods:{
        search(){
            //Search through list
            console.log(this.input)
        },
        closeSearchBar(){
            this.$store.commit("SET_DISPLAY_SEARCH_LIST",false)
        }
    }
}
</script>