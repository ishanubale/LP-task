var engagementId = botContext.getLPEngagementAttribute('engagementId'); 
var jwt;
try{
  jwt = botContext.getBotVariable('bearerToken');
}
catch(err){
}
botContext.printDebugMessage("EngagementId  " + engagementId + jwt);

if(engagementId == 5174201838 || jwt){ 
botContext.setTriggerNextMessage('multiple_choice_question_36');
}
else{
 botContext.setTriggerNextMessage('multiple_choice_question_8');
}
