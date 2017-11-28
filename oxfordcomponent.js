(function(){
var oxfordComponent = {
  controller: "OxfordController",
  template: `
  <input placeholder="Search here">
  <button ng-click="$ctrl.oxfordInformation($ctrl.app_id, $ctrl.app_key)">Submit</button>
  <h1>{{$ctrl.oxfordText}}</h1>`
};
angular
.module("module")
.component("oxfordComponent", oxfordComponent);
})();
