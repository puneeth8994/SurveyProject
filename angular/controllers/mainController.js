//Main controller that displays all surveys
myApp.controller('mainController', ['$http','survey',function($http,survey) {
    //Creating context
    var main = this;
    this.baseUrl = 'http://poll.theguywithideas.com/api/surveys';

//Array of surveys declared    
    this.surveys = [];
//Function to load all surveys
    this.loadALlSurveys = function() {
//Calling service function to load all surveys
        survey.getAllSurveys()
        .then(function successCallback(response) {

            console.log(response);
            main.surveys = response.data.data;
            console.log(main.surveys);

        }, function errorCallback(response) {

            alert("some error occurred. Check the console.");
            console.log(response);

        });


    }


    this.loadALlSurveys();


}]);