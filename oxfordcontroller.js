(function(){
  function OxfordController(OxfordService) {
    var vm = this;
    vm.oxfordText={};
    vm.oxfordInformation = function() {
      OxfordService.makeRequest().then(function(info) {
        vm.oxfordText = info;
      });
    };
  }


  angular
  .module("module")
  .controller("OxfordController", OxfordController);
})();
