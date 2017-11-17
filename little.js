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
    el:'#app',
    data:{
         members:[
             {name:'Montse',superpower:'Super System Administrator',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Binary_Code.jpg/800px-Binary_Code.jpg'},
             {name:'APA',superpower:'Super trustworthy ',image:'https://ae01.alicdn.com/kf/HTB1VHr9OFXXXXcXapXXq6xXFXXXJ/2017-nueva-laptop-sticker-vinyl-decal-bob-esponja-pokonyan-parcial-de-la-piel-para-macbook-air.jpg'},
             {name:'Raul',superpower:'Super Quick starter',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Binary_Code.jpg/800px-Binary_Code.jpg'}
         ]
    }
})