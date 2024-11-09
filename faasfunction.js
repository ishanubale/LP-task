function lambda(input, callback) {
    // Set conversation data.
    let conversation = input.payload;
    // Some processing ...
    // Result can be either an object or array.
    // Hint: Make sure to only return each type once.
    let result = [
        {
            type: "systemMessage", // Returns a system message into the conversation.
            text: "Since we have not heard from you for some time, we will now transfer this chat to agent."
        },
        {
            type: "transfer", // Transfers the conversation.
            skillId: "5001020738", // Transfer to different skill.
            agentId: "4459016338" // Propose an agent.
        },
        {
            type: "closeConversation" // Closes the conversation.
        }
    ];
    callback(null, result);
}