import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="the-breakroom.us.auth0.com"
    clientId="rem17SYeJHKdCZJI5AfGq15KPFQ7i8Je"
    redirectUri={window.location.origin} //URL link where user will be directed to. Dashboard gameroom.
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);