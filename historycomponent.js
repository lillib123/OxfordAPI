(function(){
var historyComponent = {
  controller: "HistoryController",
  template: `<h1>this is working</h1> `
};
angular
.module("module")
.component("historyComponent", historyComponent);
})();
