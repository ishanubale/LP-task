function __initConversation() { 
    var success = botContext.isContextApiEnabled();
    botContext.printDebugMessage("Context API status: " + success);
    var registration = botContext.registerContextNamespace("Conversation_Context_Data", 10800);
      botContext.printDebugMessage("Register context response ==>  " + registration);
    }
    function UpdateDataInNameSpace(firstName, lastName, email, summary)
    {
    try{
     
     var storeFirstName = botContext.setGlobalContextData("Conversation_Context_Data", "First_Name", firstName);
     var storeLastName = botContext.setGlobalContextData("Conversation_Context_Data", "Last_Name", lastName);
     var storeEmail = botContext.setGlobalContextData("Conversation_Context_Data", "Email", email);
     var storeSummary = botContext.setGlobalContextData("Conversation_Context_Data", "Summary", summary);
    
      if (storeFirstName && storeLastName && storeEmail && storeSummary)
      {
       botContext.printDebugMessage("Insertion Success for name, email and summary");
      }  
      else
      {
         botContext.printDebugMessage("Insertion Failed" + firstName, lastName, email, summary);
      }
    }
    catch(err){
      botContext.printDebugMessage("Insertion Failed due to : " + err);
    }
    }