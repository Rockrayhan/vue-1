<template>
    <div>
        <h3> Will Show Some Tabs Here </h3>

        <button @click="myComponent = 'birds-compo' "> Compo 1 </button>
        <button @click="myComponent = 'flowers-compo' "> Compo 2 </button>
    </div>


    <div>
        <component :is="myComponent"></component>

    </div>
</template>




<script>
export default {
    data(){
        return{
            myComponent: ''
        }
    }
}
</script>

<style>

</style>