(function(){

  angular
  .module("module")
  .config(function($routeProvider) {
    $routeProvider
    .when("/submit", {
      template: `<oxford-component></oxford-component>`,
      controller: "OxfordController"
    })
  });
})();
