(function(){
 function OxfordService($http) {
 var oxfordInfo;
  return {
    getWords: getWords,
    setWords: setWords,
    makeRequest: makeRequest
  };

  function makeRequest(app_id, app_key) {
  return  $http({
      method: "GET",
      url: "https://od-api.oxforddictionaries.com/api/v1",
      params: {
        app_id: "50958562",
        app_key: "b162dc254f30f0d06bbd5232844305da"
      }
    }).then(function(response){
      oxfordData = response.data;
      console.log(oxfordData);
      return oxfordData;
    })
  }

  function setWords(newInfo) {
    oxfordInfo = newInfo;
  }

  function getWords() {
    return oxfordInfo;
  }
}

  angular
    .module("module")
    .factory("OxfordService", OxfordService);
})();
