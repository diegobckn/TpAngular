'use strict';

/* Controllers */
var recetasListApp = angular.module('recetasListApp', ['ui.router']);
  


recetasListApp.controller('ListarRecetasController', function (RecetasService) {


 this.recetas = RecetasService.getRecetas();

/*
 this.agregarTarea = function () {
   var tarea = RecetasService.crearTarea(this.descripcionTarea);
   RecetasService.agregarTarea(tarea);
   this.descripcionTarea = '';
 };
*/

});



recetasListApp.controller('VerRecetaController', function ($stateParams, $state, RecetasService) {

this.receta = RecetasService.getRecetaById($stateParams.id);

 if (!this.receta) {
   $state.go("listarRecetas");
   return;
 }

});


recetasListApp.controller('CopiarRecetaController', function ($stateParams, $state, RecetasService) {

this.receta = RecetasService.getRecetaById($stateParams.id);
this.nuevoNombre = "Copia de " + this.receta.nombre;
 if (!this.receta) {
   $state.go("listarRecetas");
   return;
 }


 this.aceptar = function () {
    RecetasService.copiarReceta(this.receta,this.nuevoNombre);
   $state.go("listarRecetas");
 };

});

