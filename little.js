// Añadiendo para directiva FOR
Vue.component('alea-members',{
    props:['name','superpower','image'], // los parametros del componente
    template:`
        <div>
            <h3>{{ name }}</h3>
            <img v-bind:src="image" :alt="name" /> 
            <p>{{ superpower }}</p>
        </div>
    ` 
    // image tiene que ir con v-bind porque es un atributo de un html, ESTÁ DENTRO
});

new Vue({
    el:'#app'
})