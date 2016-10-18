myApp.controller('createOptionController', ['$http', '$routeParams', 'survey', function($http, $routeParams, survey) {

    //create a context
    var main = this;

    this.surveyId = $routeParams.surveyId;
    console.log(this.surveyId);

    this.questionId = $routeParams.questionId;
    console.log(this.questionId);

    this.baseUrl = 'http://poll.theguywithideas.com/api/surveys';

//Function to create options
    this.createOptions = function() {

//Data that is used to create options   
            var optionData = {
                optionText: main.optionText
            }

            console.log(optionData);
//Calling the survey service function to create options using questionID and Option Data as parameters
            survey.createAnOption(main.questionId, optionData)
                .then(function successCallback(response) {

                    alert("Option created successfully");
                    console.log(response);

                }, function errorCallback(response) {

                    alert("some error occurred. Check the console.");
                    console.log(response);
                });


        } // end createOptions function

    //Function to delete a question
    this.deleteSingleQuestion = function() {
      //Calling the service which uses questionId as parameter
        survey.deleteAQuestion(main.questionId)
        .then(function successCallback(response) {

            alert("Deleted successfully");
            window.location = '#/'
            console.log(response);


        }, function errorCallback(response) {
            alert("some error occured. Check the console");
            console.log(response);
        });
    }

//Function to delete all options in a particular question
    this.deleteOptions = function() {
//Calling the service function using questionID as parameter
        survey.deleteAllOptions(main.questionId)
        .then(function successCallback(response) {

            alert("Deleted successfully");
            window.location = '#/'
            console.log(response);


        }, function errorCallback(response) {
            alert("some error occured. Check the console");
            console.log(response);
        });
    }

}]); // end controller