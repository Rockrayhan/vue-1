<template>
    <div>
        <h1> I Eat {{ click }} Bananas <span> &#127820;</span> <br> </h1>
        <h1> {{ msg2 }} <span>&#128053;</span> </h1> <br>
        <button v-if="click !== 'Enough'" v-on:click="foodClick"> &#127820; </button>
        <h1> {{ foodName }} </h1> <br>
        <h1> {{ foodDetails }} </h1>
        <img src="https://www.w3schools.com/vue/img_quality.svg" width="50" alt="">

    </div>
</template>

<script>
    export default {
        data(){
            return{
                msg2: " Are you a MOnkey !?! ",
                click: 0
            }
        }, 
        props:[
            'foodName',
            'foodDetails'
        ],
        methods: {
            foodClick(){
                this.click++ ;
                if( this.click > 5 ){
                    this.click = "Enough" 
                }
            }
        }
    }
</script>

<style>
span{
    font-size: 80px;
}
button{
    padding: 10px;
    font-size: 20px;
}
</style>