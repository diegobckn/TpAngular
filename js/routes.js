recetasListApp.config(function ($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise("/");

 $stateProvider

   .state('listarRecetas', {
     url: "/",
     templateUrl: "partials/principal.html",
     controller: "ListarRecetasController as recetasCtrl"
   })

   .state('verReceta', {
     url: "/receta/:id",
     templateUrl: "partials/ver_receta.html",
      controller: "VerRecetaController as verCtrl"
   })


   .state('copiarReceta', {
     url: "/copiar-receta/:id",
     templateUrl: "partials/copiar_receta.html",
      controller: "CopiarRecetaController as copiarCtrl"
   })

});