const kitty = ChatKitty.getInstance(CHATKITTY_API_KEY);

useEffect(() => {
  // start real-time chat session
  let result = kitty.startChatSession({
    channel: channel,
    onReceivedMessage: (message) => {
      showMessage(message); // update your UI as new chat events occur
    },
  });

  return result.session.end;
}, []);