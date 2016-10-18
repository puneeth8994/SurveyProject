//This is the controller that creates the surveys
myApp.controller('createController', ['$http', 'survey', function($http, survey) {

    //create a context
    var main = this;

    //function to create the survey
    this.createSurvey = function() {
            //define the data that creates the survey
            var myData = {

                surveyTitle: main.surveyTitle,
                surveySubtitle: main.surveySubtitle,
                instructions: main.instructions

            }

            console.log(myData);

            survey.createASurvey(myData)   //Calling the service function to create the survey
            .then(function successCallback(response) {     //Response when the survey is created

                    alert("Survey created successfully");
                    window.location = '#/'
                    console.log(response);


                }, function errorCallback(response) {      //Response when an error occurs

                    alert("some error occurred. Check the console.");
                    console.log(response);
                });


        } // end survey creation



}]); // end controller