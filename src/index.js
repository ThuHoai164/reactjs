import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import MyComponent from './view/example/MyComponent';
import reportWebVitals from './reportWebVitals';
import Menu from './web/menu';
// import Countries from './web/Countries';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyComponent />
  
    {/* <Menu/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
