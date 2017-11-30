(function(){
  function OxfordController(OxfordService) {
    var vm = this;
    vm.oxfordText={};
    vm.wordList = [];
    vm.oxfordInformation = function(info) {
      vm.oxfordText = info;
      // vm.oxfordText = vm.oxfordText.split(", ");
      OxfordService.makeRequest(vm.oxfordText).then(function(response) {
        vm.wordList = response;

      });
    };
  }
  angular
  .module("module")
  .controller("OxfordController", OxfordController);
})();
