// Añadiendo para directiva FOR
const app = new Vue({
    el:'#app', // id del div donde queremos que funcione VUE
    data: {
        members: ["Raul","Montse","Alejandro","Unicornio"],
        membersObject:[{name:"Raul"},
                        {name: "Montse"},
                        {name: "Alejandro"},
                        {name: "Unicornio"}
                       ],    
        show: true, 
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
            alert('ME HAN LLAMADO')
        }
    }

});