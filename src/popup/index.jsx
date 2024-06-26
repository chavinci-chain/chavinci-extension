import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css'
import App from "./App";

function init() {
    const appContainer = document.createElement('div')
    appContainer.id = 'root';
    document.body.appendChild(appContainer)
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = createRoot(appContainer)
    root.render(
       <App/>
    );
}

init();