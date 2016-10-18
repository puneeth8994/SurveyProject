myApp.factory('survey',function($http){

var surveyAPIS  =  {};
var baseUrl = 'http://poll.theguywithideas.com/api/surveys';

surveyAPIS.getAllSurveys=function(){
	console.log("success!")
	return $http.get(baseUrl);
}

surveyAPIS.createASurvey=function(surveyData){
	console.log("success2!")
	return $http.post(baseUrl+'/create',surveyData);
}

surveyAPIS.getSingleSurvey=function(surveyId){
	console.log("success3!")
	return $http.get(baseUrl+'/'+surveyId);
}

surveyAPIS.editSingleSurvey=function(surveyId,surveyData){
	console.log("success4!")
	return $http.put(baseUrl+'/'+surveyId+'/edit',surveyData);
}

surveyAPIS.createAQuestion=function(surveyId,questionData){
	console.log("success5!")
	return $http.post(baseUrl+'/'+surveyId+'/question/create',questionData);
}

surveyAPIS.getQuestions=function(surveyId){
	console.log("success6!")
	return $http.get(baseUrl+'/'+surveyId+'/questions/all');
}

surveyAPIS.editSingleQuestion=function(questionId,questionText){
	console.log("success4!")
	return $http.put(baseUrl+'/questions/'+questionId+'/edit',questionText);
}

surveyAPIS.createAnOption=function(questionId,optionText){
	console.log("success5!")
	return $http.post(baseUrl+'/questions/'+questionId+'/options/create',optionText);
}

surveyAPIS.deleteASurvey=function(surveyId){
	console.log("success5!")
	return $http.post(baseUrl+'/'+surveyId+'/delete');
}

surveyAPIS.createAnAnswer=function(questionId,optionNum){
	console.log("success5!")
	return $http.post(baseUrl+'/questions/'+questionId+'/answer/create',optionNum);
}

surveyAPIS.deleteAQuestion=function(questionId){
	console.log("successful deletion");
	return $http.post(baseUrl+'/questions/' + questionId + '/delete');
}

surveyAPIS.deleteAllOptions=function(questionId){
	console.log("successful deletion of Options");
	return $http.post(baseUrl+ '/questions/' + questionId + '/options/delete');
}

return surveyAPIS;
});