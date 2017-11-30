(function(){
var oxfordComponent = {
  controller: "OxfordController",
  template: `
  <input ng-model="$ctrl.word" placeholder="Search here">
  <button ng-click="$ctrl.oxfordInformation($ctrl.word)">Submit</button>
  <p> {{$ctrl.wordList}}
  `

};
angular
.module("module")
.component("oxfordComponent", oxfordComponent);
})();
