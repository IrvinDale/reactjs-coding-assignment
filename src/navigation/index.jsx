import React from "react";

import { BrowserRouter } from "react-router-dom";
  
import Routes from "./Routes";

export default function Providers() {
    return(
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
}