import React from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18next';
import { Provider } from 'react-redux'
import { store } from './Redux/ReduxStore';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
         
            <Suspense fallback={(<div className="Loading">loading...</div>)}>
                <Provider store = {store}>
                    <App /> 
                </Provider>
            </Suspense>
         
 , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
