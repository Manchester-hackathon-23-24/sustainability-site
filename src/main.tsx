import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={new QueryClient()}>
                {/* <Auth0Provider
                domain="dev-wdae0qex707tju8c.us.auth0.com"
                clientId="pwwfmOSZGHNim15RjZtoagvtW99KmyaO"
                authorizationParams={{
                    redirect_uri: window.location.origin,
                    prompt: "login",
                    scope: 
                }}
            > */}
                <App />
            </QueryClientProvider>  
            {/* </Auth0Provider> */}
        </BrowserRouter>
    </React.StrictMode>
);
