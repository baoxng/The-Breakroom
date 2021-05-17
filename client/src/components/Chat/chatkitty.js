import ChatKitty from 'chatkitty';
import React from "react";

//starting user session

const result = await kitty.startSession({
    username: username,
    authParams: { // parameters to pass to authentication chat function
      password: password, 
    },
});
  
if (result.succeeded) {
    const session = result.session; // Handle session
}
  
if (result.failed) {
    const error = result.error; // Handle error
}

//Getting current user session
const currentUser = await kitty.getCurrentUser();

const user = currentUser.user; // Handle user

//Join one public channel
const result = await kitty.createChannel({
    type: "PUBLIC",
    name: channelName,
  });
  
  if (result.succeeded) {
    const channel = result.channel; // Handle channel
  }
  
  if (result.failed) {
    const error = result.error; // Handle error
  }

//Star chat session
const result = kitty.startChatSession({
    channel: channel,
    onReceivedMessage: (message) => {},
  });

if (result.succeeded) {
const session = result.session; // Handle session
}

if (result.failed) {
const error = result.error; // Handle error
}

//Sending messages
const result = await kitty.sendMessage({
    channel: channel,
    body: messageText,
  });
  
  if (result.succeeded) {
    const message = result.message; // Handle message
  }
  
  if (result.failed) {
    const error = result.error; // Handle error
  }

// Receive message
kitty.startChatSession({
    channel: channel,
    onReceivedMessage: (message) => {
     // Handle recevied message
    },
   });

//Getting message
const result = await kitty.getMessages({
    channel: channel,
  });
  
  if (result.succeeded) {
    const messages = result.paginator.items; // Handle messages
  }
  
  if (result.failed) {
    const error = result.error; // Handle error
  }
   


//end user session
kitty.endSession();

//end chat session
ChatKitty.endChatSession(session);

export const kitty = ChatKitty.getInstance(CHATKITTY_API_KEY);