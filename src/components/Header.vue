<template>
    <div >
        <ul class="header"> 
        
            <li><router-link to="/home"> Home </router-link></li>
            <li><router-link to="/about"> About </router-link></li>
            <li><router-link to="/contact"> Contact </router-link></li>
            
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
    gap: 30px;
    background-color: lightcyan;
    color: coral;
    padding: 5px;
}
.header li {
    list-style: none;
    font-weight: 900;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
}
.header li:hover{
    background-color: lightcoral;
    color: white;
    
}
</style>