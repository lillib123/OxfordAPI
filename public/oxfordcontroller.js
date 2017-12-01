(function(){
  function OxfordController(OxfordService) {
    var vm = this;
    vm.oxfordText={};
    vm.wordList = [];

    vm.showNumber = function() {
      vm.value=true;
    }
    vm.oxfordInformation = function(info) {
      vm.word="";
      vm.oxfordText = info;
      vm.oxfordText = vm.oxfordText.split(", ");
      vm.oxfordText.forEach(function(item) {
        item = item.charAt(0).toUpperCase() + item.slice(1);
        //made this change after to capitalize first letter
        OxfordService.makeRequest(item).then(function(response) {
          vm.wordList.push(item +  ":\xa0\xa0"  + response);
        });
      });
    };
  }
  angular
  .module("module")
  .controller("OxfordController", OxfordController);
})();
