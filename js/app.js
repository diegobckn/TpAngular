'use strict';

/* Controllers */
var recetasListApp = angular.module('recetasListApp', []);
var recetasListApp = angular.module('recetasListApp', ['ui.router']);
  


recetasListApp.controller('ListarRecetasController', function (RecetasService) {


 RecetasService.getRecetas();
 this.recetas = RecetasService.recetas;

/*
 this.agregarTarea = function () {
   var tarea = RecetasService.crearTarea(this.descripcionTarea);
   RecetasService.agregarTarea(tarea);
   this.descripcionTarea = '';
 };
*/

});



recetasListApp.controller('VerRecetaController', function ($stateParams, $state, RecetasService) {

RecetasService.getRecetas();
this.receta = RecetasService.getRecetaById($stateParams.id);

 if (!this.receta) {
   $state.go("listarRecetas");
   return;
 }


 this.aceptar = function () {
   $state.go("listarRecetas");
 };

});

