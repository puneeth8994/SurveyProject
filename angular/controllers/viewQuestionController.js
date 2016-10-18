//Controller to View and answer questions
myApp.controller('viewQuestionController',['$http','$routeParams','$scope','survey',function($http,$routeParams,$scope,survey){
//Creating context
var main = this;
    this.questions = [];
    this.surveyId = $routeParams.surveyId

    console.log(this.surveyId);

    this.baseUrl = 'http://poll.theguywithideas.com/api/surveys';

//Function to load all questions
    this.loadALlQuestions = function() {
//Calling Service using  surveyId as parameter
        survey.getQuestions(main.surveyId)
        .then(function successCallback(response) {
            
            console.log(response);
            main.questions = response.data.data;
            console.log(main.questions);
            
            this.$index=0
            this.count=0;
            $scope.currentQuestion = main.questions[$index].questionText;
            console.log($scope.currentQuestion);
            
            
            this.currentQuestionId = main.questions[$index].questionId;
            console.log(this.currentQuestionId);
             

        }, function errorCallback(response) {

            alert("some error occurred. Check the console.");
            console.log(response);

        });         
    
    }

    this.loadALlQuestions();  

//Function to create an answer to the question     
    this.createAnswer = function() {
            
            var answerData = {
                selectedOptionNumber : main.selectedOptionNumber 
            }
            
            this.questionId=main.questions[$index].questionId
            console.log(this.questionId);
            console.log(answerData);
            console.log(main.questions.length);

            var apple = "<h1 style='padding-top:4%;'>Thankyou</h1>"
            
            if(main.questions.length <= ($index+1))
            {
                $('.container').html(apple);
            }
              
            survey.createAnAnswer(this.questionId,answerData)
            .then(function successCallback(response) {

                alert("Answer created successfully");
                console.log(response);
                  $index++;
            }, function errorCallback(response) {

                alert("some error occurred. Check the console.");
                console.log(response);
            });

           
        } //End answer creation

}]);