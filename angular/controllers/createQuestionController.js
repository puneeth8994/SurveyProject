//Controller to create Questions
myApp.controller('createQuestionController', ['$http','$routeParams','survey',function($http,$routeParams,survey) {

    //create a context
    var main = this;
     
    this.surveyId=$routeParams.surveyId;
    console.log(this.surveyId);

    this.baseUrl = 'http://poll.theguywithideas.com/api/surveys';

//Function to create a Single Question
    this.createSingleQuestion = function() {
//Data required to create Question
            var questionData = {
                questionText: main.questionText
            }

            console.log(questionData);
//Calling service function to create a question using surveyId and question Data as parameter
           survey.createAQuestion(main.surveyId,questionData)
           .then(function successCallback(response) {

                alert("question created successfully");
                //window.location = '#/'
                console.log(response);

            }, function errorCallback(response) {

                alert("some error occurred. Check the console.");
                console.log(response);
            });


        } // end question creation

}]); // end controller