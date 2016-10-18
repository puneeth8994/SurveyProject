//This is a single-view-controller
myApp.controller('singleViewController',['$http','$routeParams','survey',function($http,$routeParams,survey) {

  //create a context
  var main = this;

  this.title = '';
  this.subTitle = '';
 
  this.surveyId = $routeParams.surveyId
  console.log(this.surveyId)

  this.baseUrl = 'http://poll.theguywithideas.com/api/surveys';

  //Function to load a single survey
  this.loadSingeSurvey = function(){
   //Function to get a single survey
      survey.getSingleSurvey(main.surveyId)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          main.survey = response.data.data;
          console.log(main.survey);

          main.title = main.survey.surveyTitle;
          main.subTitle = main.survey.surveySubtitle;
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load single survey

  
 this.loadSingeSurvey();

//Function to delete a single survey
 this.deleteSingleSurvey= function(){
//Calling service to Delete survey using surveyId as parameter
     survey.deleteASurvey(main.surveyId)
     .then(function successCallback(response){
         alert("Deleted successfully");
         console.log(response);

       }, function errorCallback(response){
        alert("some error occured. Check the console");
          console.log(response);
      });


 }



}]); // end controller