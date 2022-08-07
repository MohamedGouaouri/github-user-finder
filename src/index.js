import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import {GithubGraphQlProvider} from "./services/graphql/provider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GithubGraphQlProvider>
        <App />
    </GithubGraphQlProvider>
);


