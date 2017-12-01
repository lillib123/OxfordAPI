(function(){
  var oxfordComponent = {
    controller: "OxfordController",
    template: `
    <form>
    <h3>Search the Dictionary</h3>
    <input ng-model="$ctrl.word" placeholder="Search here">
    <button ng-click="$ctrl.oxfordInformation($ctrl.word); $ctrl.showNumber();">Submit</button>
    <h6 ng-show="$ctrl.value">{{$ctrl.wordList.length}} word(s) successfully searched so far!</h6>
    <p ng-repeat="definitions in $ctrl.wordList track by $index">{{definitions}}</p>
    </form>
    `
  };
  angular
  .module("module")
  .component("oxfordComponent", oxfordComponent);
})();
