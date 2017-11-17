<template>
    <div>
        <h3>{{ name }}</h3>
        <img v-bind:src="image" :alt="name" /> 
        <p>{{ superpower }}</p>
    </div>
</template>


<script>
// import otroComponente from './otroComponente'
export default {
    name:'alea-members', // name of the tag
    // components: { otroComponente}
    props: {
        name: String,
        superpower: String,
        image: String
    }   
}
</script>


<style scoped>
    img {
        width:100;
    }

</style>
