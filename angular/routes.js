//var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'allSurveys'
        })

        .when('/create',{
            // location of the template
            templateUrl     : 'views/create-view.html',
            // Which controller it should use 
            controller      : 'createController',
            // what is the alias of that controller.
            controllerAs    : 'createSurveys'
        })

        .when('/:surveyId',{
            // location of the template
            templateUrl     : 'views/single-view.html',
            // Which controller it should use 
            controller      : 'singleViewController',
            // what is the alias of that controller.
            controllerAs    : 'singleSurvey'
        })
        
         .when('/admin/:surveyId',{
            // location of the template
            templateUrl     : 'views/admin-view.html',
            // Which controller it should use 
            controller      : 'singleViewController',
            // what is the alias of that controller.
            controllerAs    : 'singleSurvey'
        })



        .when('/:surveyId/edit',{
            // location of the template
            templateUrl     : 'views/edit-view.html',
            // Which controller it should use 
            controller      : 'editSurveyController',
            // what is the alias of that controller.
            controllerAs    : 'editSurveys'
        })

        .when('/:surveyId/question/create',{
            // location of the template
            templateUrl     : 'views/createquestion-view.html',
            // Which controller it should use 
            controller      : 'createQuestionController',
            // what is the alias of that controller.
            controllerAs    : 'createQuestion'
        })

        .when('/questions/:questionId/options/create',{
            // location of the template
            templateUrl     : 'views/createoptions-view.html',
            // Which controller it should use 
            controller      : 'createOptionController',
            // what is the alias of that controller.
            controllerAs    : 'createOption'
        })

        .when('/questions/:questionId/edit',{
            // location of the template
            templateUrl     : 'views/editQuestions-view.html',
            // Which controller it should use 
            controller      : 'editQuestionController',
            // what is the alias of that controller.
            controllerAs    : 'editQuestion'
        })

        .when('/:surveyId/questions/all',{
            // location of the template
            templateUrl     : 'views/viewQuestions-view.html',
            // Which controller it should use 
            controller      : 'viewQuestionController',
            // what is the alias of that controller.
            controllerAs    : 'viewQuestions'
        })

       
        
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1 style="padding-top:4%">404 page not found</h1>'
            }
        );
}]);