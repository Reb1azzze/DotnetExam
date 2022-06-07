import * as React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './custom.css'
import CreditForm from "./components/CreditForm";
import './index.css'

export function App() {
    return (
        <BrowserRouter>
            <Route path='*' component={CreditForm}/>
        </BrowserRouter>
    )
}