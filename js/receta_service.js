recetasListApp.service("RecetasService", function () {

 this.recetasIds = 1;
 this.recetas = [];

 this.crearListaRecetas = function () {
   var recetas=[
   {"nombre":"Bife con Pure","id":1,"calorias":3000,"temporada":"Todo el año","dificultad":"Facil",
   "ingredientes":[{"nombre":"Bife","cantidad":"500"},{"nombre":"Pure de Papas","cantidad":"A gusto"}],
   "condimentos":[{"nombre":"Sal"},{"nombre":"Pimienta"},{"nombre":"Nuez moscada"}],
   "condicionesPermitidas":[{"nombre":"Hipertenso"},{"nombre":"Vegano"},{"nombre":"Celiaco"}],
   "pasos":[{"paso":"paso1"},{"paso":"paso2"},{"paso":"paso3"},{"paso":"paso4"}]
 },
   {"nombre":"Dulce de leche","id":2,"calorias":5000,"temporada":"Invierno","dificultad":"Facil",
   "ingredientes":[{"nombre":"Leche","cantidad":"1000"},{"nombre":"Azucar","cantidad":"700"}],
   "condimentos":[],
   "condicionesPermitidas":[{"nombre":"Hipertenso"},{"nombre":"Vegano"},{"nombre":"Celiaco"}],
   "pasos":[{"paso":"paso1"},{"paso":"paso2"},{"paso":"paso3"},{"paso":"paso4"}]
 },
   {"nombre":"Flan","id":3,"calorias":2000,"temporada":"Primavera","dificultad":"Facil",
   "ingredientes":[{"nombre":"Huevos","cantidad":"5"},{"nombre":"Leche","cantidad":"750"},{"nombre":"Azucar"}],
   "condimentos":[{"nombre":"Dulce de leche"},{"nombre":"Crema Batida"}],
   "condicionesPermitidas":[{"nombre":"Hipertenso"},{"nombre":"Vegano"},{"nombre":"Celiaco"}],
   "pasos":[{"paso":"paso1"},{"paso":"paso2"},{"paso":"paso3"},{"paso":"paso4"}]
 },
   {"nombre":"Milanesas","id":4,"calorias":5400,"temporada":"Verano","dificultad":"Facil",
   "ingredientes":[{"nombre":"Carne de Milanesas"},{"nombre":"Pan rallado"},{"nombre":"Aceite"}],
   "condimentos":[{"nombre":"Limon"},{"nombre":"Sal"}],
   "condicionesPermitidas":[{"nombre":"Vegano"},{"nombre":"Celiaco"}],
   "pasos":[{"paso":"paso1"},{"paso":"paso2"},{"paso":"paso3"},{"paso":"paso4"}]
 }
   ];
   return recetas;
 };

 this.getRecetas = function () {
    if(this.recetas.length<1){
        this.recetas = this.crearListaRecetas();
    }
    return this.recetas;
 };

 this.getRecetaById = function (id) {
   return _.find(this.recetas, function (receta) {
     return receta.id == id;
   })
 };

this.agregarReceta = function (receta) {
   this.recetas.push(receta);
 };

 this.nuevaId = function() {
  this.recetasIds = this.recetas.length+1;
   return this.recetasIds;
 };


 this.copiarReceta = function (original,nuevoNombre) {
     var copia = new Receta;
     
     for(var property in original) {
      if (!property.startsWith('$$'))
        copia[property] = original[property]
     } 

     this.nuevaId();
     copia.id = this.recetasIds;
     copia.nombre = nuevoNombre;
     this.agregarReceta(copia);
 };

});
