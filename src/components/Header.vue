<template>
    <div >
        <ul class="header"> 
        <li> Home </li> 
        <li> About </li> 
        <li> Contanct </li> 
        
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.header{
    display: flex;
    justify-content: center;
    background-color: lightcyan;
    color: coral;
    padding: 5px;
}
.header li {
    list-style: none;
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 900;
    font-size: 20px;
}
</style>