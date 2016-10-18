//Controller to edit the question
myApp.controller('editQuestionController',['$http','$routeParams','survey',function($http,$routeParams,survey){

//Creating context
 var main = this;
  this.baseUrl = 'http://poll.theguywithideas.com/api/surveys';

  this.questionId = $routeParams.questionId
  
  //this.surveyId=survey.surveyId;
  console.log(this.questionId);

 //Function to get all questions
   this.getCurrentQuestions = function() {

        $http({
            method: 'GET',
            url: main.baseUrl + '/' + main.surveyId + "/questions/all" 
        }).then(function successCallback(response) {

            console.log(response);
            main.questions = response.data.data;
            console.log(main.questions);

            this.question1 = main.questions[0].questionText;
            console.log(this.question1);

        }, function errorCallback(response) {

            alert("some error occurred. Check the console.");
            console.log(response);

        });


    }

//Function to edit Current Question
  this.editCurrentQuestion = function(){

//Data used to edit the question
      var myData = {
          questionText: main.questions.questionText
      }
      console.log(myData);

//Calling service function to edit the question   
      survey.editSingleQuestion(main.questionId,myData)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          alert("Question edited successfully");
          console.log(response.data);
          
         window.location = '#/'
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });

  }// end edit current Question

}]);