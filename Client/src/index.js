import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Auth0Provider } from "@auth0/auth0-react";
// import "./index.css";
ReactDOM.render(
<Auth0Provider 
    domain="dev-z0jypbsb24bjyt0u.us.auth0.com"
    clientId="bXaQgMR05PjGrK9PxhVD8ND0pOxl6n4R"
    authorizationParams={{
      redirect_uri: 'http://localhost:3001/book'
    }}
>
    <App />
</Auth0Provider>, document.getElementById("root"));
