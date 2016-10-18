//This controller edits survey title, subtitle and instructions
myApp.controller('editSurveyController',['$http','$routeParams','survey',function($http,$routeParams,survey) {

  //create a context
  var main = this;
  this.baseUrl = 'http://poll.theguywithideas.com/api/surveys';

  this.surveyId = $routeParams.surveyId
  
  //this.surveyId=survey.surveyId;
  console.log(this.surveyId);

//Function to get details of the current survey
  this.getCurrentSurvey = function(){

      survey.getSingleSurvey(main.surveyId)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          main.survey = response.data.data;
          console.log(main.survey);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });

  }

//Function to edit the current survey
  this.editCurrentSurvey = function(){

      var myData = {

          surveyTitle: main.survey.surveyTitle,
          surveySubtitle: main.survey.surveySubtitle,
          instructions: main.survey.instructions
      }

      console.log(myData);
   
      survey.editSingleSurvey(main.surveyId,myData)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          alert("survey edited successfully");
          console.log(response.data);
          
         window.location = '#/'
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
   


}]); // end controller