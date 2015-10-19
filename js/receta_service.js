recetasListApp.service("RecetasService", function () {

 this.recetasIds = 1;
 this.recetas = [];

 this.crearListaRecetas = function () {
   var recetas=[
   {"nombre":"Bife con Pure","id":1,"calorias":3000,"temporada":"Todo el año"},
   {"nombre":"Dulce de leche","id":2,"calorias":5000,"temporada":"Invierno"},
   {"nombre":"Flan","id":3,"calorias":2000,"temporada":"Primavera"},
   {"nombre":"Milanesas","id":4,"calorias":5400,"temporada":"Verano"},
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
