(function(){

  angular
  .module("module")
  .config(function($routeProvider) {
    $routeProvider
      .when("/submit", {
        template: `<oxford-component></oxford-component>`,
        controller: "OxfordController"
      })
      .when("/history", {
        template: `<history-component></history-component>`,
        controller: "HistoryController"
      });
  });


})();
