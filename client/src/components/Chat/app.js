// import React, { useEffect } from "react";
// import { useAuth0 } from "./auth0";
// import ChatView from "./Chat/chat.js";

// function ChatApp() {
//   useEffect(() => {}, []);

//   const { loading, user, loginWithRedirect } = useAuth0();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="App">
//       {!user && loginWithRedirect({})}

//       {user && <ChatView />}
//     </div>
//   );
// }

// export default ChatApp;