(function(){
  var historyComponent = {
    controller: "OxfordController",
    template: `
    <input ng-model="$ctrl.word" placeholder="Search here">
    <button ng-click="$ctrl.oxfordInformation($ctrl.word)">Submit</button>
    <p ng-repeat="definitions in $ctrl.wordList track by $index">{{definitions}}</p>
    <h1>{{$ctrl.wordList}}</h1>
    `
  };
  angular
  .module("module")
  .component("historyComponent", historyComponent);
})();
