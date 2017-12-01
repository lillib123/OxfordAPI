(function(){
  function OxfordController(OxfordService) {
    var vm = this;
    vm.oxfordText={};
    vm.wordList = [];

    vm.showNumber = function() {
      vm.value=true;
    }
    vm.oxfordInformation = function(info) {
      vm.oxfordText = info;
      vm.oxfordText = vm.oxfordText.split(", ");
      vm.oxfordText.forEach(function(item) {
        OxfordService.makeRequest(item).then(function(response) {
          vm.wordList.push("\"" + item +  ":\"\xa0\xa0"  + response);
        });
      });
    };
  }
  angular
  .module("module")
  .controller("OxfordController", OxfordController);
})();
