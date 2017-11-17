// Añadiendo para directiva IF
const app = new Vue({
    el:'#app', // id del div donde queremos que funcione VUE
    data: {    // OBJETO.DATA importante, aquí van las variables
        show: true, // recordar JS true y false siempre minuscula
        message: "Hola Alea!!",
        image: "./img/estimar.jpg",
    },
    methods:{
        cucuTras: function(){
            /*
            if (this.show) {
                this.show = false   
            }else{
                this.show = true
            }            
            */
            this.show = !this.show  // refactor de lo de arriba
        }
    }

});