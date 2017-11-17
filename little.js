const app = new Vue({
    el:'#app', // id del div donde queremos que funcione VUE
    data: {
        message: "Hola Alea!!",
        imagen: "./img/estimar.jpg",
    }
});


console.log(app.imagen);
console.log(app.message);