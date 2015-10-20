recetasListApp.service("RecetasService", function () {

 this.recetasIds = 1;
 this.recetas = [];

 this.crearListaRecetas = function () {
   var recetas=[
   {"nombre":"Bife con Pure","id":1,"calorias":3000,"temporada":"Todo el año","dificultad":"Facil",
   "ingredientes":[{"nombre":"Bife","cantidad":"500"},{"nombre":"Pure de Papas","cantidad":"A gusto"}],
   "condimentos":[{"nombre":"Sal",},{"nombre":"Manteca",}]
 },
   {"nombre":"Dulce de leche","id":2,"calorias":5000,"temporada":"Invierno","dificultad":"Facil",
   "ingredientes":[{"nombre":"Leche","cantidad":"1000"},{"nombre":"Azucar","cantidad":"700"}],
   "condimentos":[]
 },
   {"nombre":"Flan","id":3,"calorias":2000,"temporada":"Primavera","dificultad":"Facil",
   "ingredientes":[{"nombre":"Huevos","cantidad":"5"},{"nombre":"Leche","cantidad":"750"},{"nombre":"Azucar","cantidad":"10 cucharadas"}],
   "condimentos":[{"nombre":"Dulce de leche"},{"nombre":"Crema Batida"}]
 },
   {"nombre":"Milanesas","id":4,"calorias":5400,"temporada":"Verano","dificultad":"Facil",
   "ingredientes":[{"nombre":"Carne de Milanesas","cantidad":"1000"},{"nombre":"Pan rallado","cantidad":"300"},{"nombre":"Aceite","cantidad":"100"}],
   "condimentos":[{"nombre":"Limon"},{"nombre":"Sal"}]
 }
   ];
   return recetas;
 };

 this.getRecetas = function () {
    if(this.recetas.length<1){
        this.recetas = this.crearListaRecetas();
    }

 };

 this.getRecetaById = function (id) {
   return _.find(this.recetas, function (receta) {
     return receta.id == id;
   })
 };

});
