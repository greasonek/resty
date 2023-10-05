import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import { useReducer } from 'react';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';


const initialStateValue = {
  data: {},
  requestParams: {},
};

function appReducer(appState, action) {
  switch (action.type) {
    case 'SET_REQUEST':
      return {
        ...appState, 
        requestParams: action.payload, 
        data: {}
      };
    case 'SET_DATA':
      return {
        ...appState,
        data: action.payload,
      };
  }
}

const History = () => {
  const [appState, dispatch] = useReducer(appReducer, initialStateValue);

  const callApi = async (requestParams) => {
    const action = {
      type: 'SET_REQUEST', 
      payload: requestParams
    }
    dispatch(action);
  };

  useEffect( () => {
    // //   // can do anything
      if(!appState.requestParams.url) return;
      if(appState.data && Object.keys(appState.data).length) return;
      console.log('made it!');
      (async () => {
        // const url = appState.requestParams.url;
        // const method = appState.requestParams.method;
        // console.log(url, method);
        // make the request to get back data
            const { data } = await axios.get(appState.requestParams.url);
            console.log(appState);
            // setAppState({...appState, data});
            dispatch({type: 'SET_DATA', payload: data });
          })();

          return () => {
            console.log('component unmounts');
          };
            // be careful that you don't create a circular dependency 
            // where the state of the thing you're watching changes everytime the function runs
          
        }, [appState]);

      

  // const handleNewApi = () => {
  //   const api = {
  //     url: chance.url(),
  //     method: 'get',
  //   };

  //   const action = {
  //     type: 'ADD_API',
  //     payload: data,
  //   };
  //   dispatch(action);
  // };
// }
// const App = () => {
//   const [appState, setAppState] = useState({
//         data: {},
//         requestParams: {},
//       });

      // const getData = async () => {
      //   const { data } = await axios.get(appState.requestParams.url);
      //   setAppState(data);
      // }
      // listen for the state (appState.requestParams) to change (URL and method (and body?))
      // when they change, make a http request 
      // update the data (appState.data) to the new values
      // use a useEffect to do this

      // useEffect is a hook - takes 2 arguments: callback function and dependency array
   
              // const action = {
                // type: DONE
                // payload: data
              //}
              //dispatch(action)
            // }
          // const request = {
          //   data: {
          //     count: 2,
          //     result: [
          //       { name: 'thing 1', url: 'http://thing.com/1'},
          //       { name: 'thing 2', url: 'http://thing/2'},
          //     ],
          //   },
          // };
          // ***SPREAD OPERATORS!
          // spread operator takes the object and spreads it apart
          // {data, requestParams}
          // saying {...appState, pizza: 'yum'} means: 
          // {data, requestParams, pizza: 'yum' }
          // setAppState({...appState, data: request.data});
     

return (
      <React.Fragment>
        <Header />
        <div>Request Method: {appState.requestParams.method}</div>
        <div>URL: {appState.requestParams.url}</div>
        {/* {appState.requestParams.body} &&
        <div>appState.requestParams.body</div> */}
        <Form handleApiCall={callApi} />
    {Object.keys(appState.data).length > 0 && <Results data={appState.data} />}        
        <Footer />
      </React.Fragment>
    );
};
export default App;

// class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     requestParams: {},
  //   };
  // }

  // callApi = (requestParams) => {
  //   // mock output
  //   const data = {
  //     count: 2,
  //     results: [
  //       {name: 'fake thing 1', url: 'http://fakethings.com/1'},
  //       {name: 'fake thing 2', url: 'http://fakethings.com/2'},
  //     ],
  //   };
  //   this.setState({data, requestParams});
  // }

  // render() {
  //   return (
  //     <React.Fragment>
  //       <Header />
  //       <div>Request Method: {this.state.requestParams.method}</div>
  //       <div>URL: {this.state.requestParams.url}</div>
  //       <Form handleApiCall={this.callApi} />
  //       <Results data={this.state.data} />
  //       <Footer />
  //     </React.Fragment>
  //   );
  // }
// }
// }

