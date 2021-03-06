(function(){
  function OxfordService($http) {
    var displayWords;
    return {
      getWords: getWords,
      setWords: setWords,
      makeRequest: makeRequest
    };

    function makeRequest(word) {
      return $http({
        method: "GET",
        url: "/tests/" + word
      }).then(function(response){
        oxfordData = response.data.body.results["0"].lexicalEntries["0"].entries["0"].senses["0"].definitions["0"];
        return oxfordData;
      })
    }

    function setWords(newInfo) {
      displayWords = newInfo;
    }

    function getWords() {
      return displayWords;
    }
  }

  angular
  .module("module")
  .factory("OxfordService", OxfordService);
})();
