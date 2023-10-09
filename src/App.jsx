import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const initialStateValue = {
  data: {},
  requestParams: {},
  loading: false,
  history: []
};

function appReducer(appState, action) {
  switch (action.type) {
    case 'SET_REQUEST':
      return {
        ...appState, 
        requestParams: action.payload, 
        data: {},
        loading: true,
      };
    case 'SET_DATA':
      return {
        ...appState,
        // data: action.payload,
        loading: false,
        data: action.data,
        history: [
          ...appState.history, { 
            requestParams: appState.requestParams,
            data: action.payload,
          }]
      };
    case 'HISTORY_DATA':
      return {
        ...appState,
        loading: 'history',
        data: action.data,
        requestParams: action.requestParams,
      };
    default:
        return appState;
  }
}

const History = () => {
  const [appState, dispatch] = useReducer(appReducer, initialStateValue);

  const callApi = async (requestParams) => {
    const action = {
      type: 'SET_REQUEST', 
      payload: requestParams,
    };
    dispatch(action);
  };

  const historyData = (req) => {
    const action = {
      type: 'SET_DATA',
      payload: req,
    };
    dispatch(action)
  };

  useEffect(() => {
    if(appState.laoding === true && appState.requestParams.method && appState.requestParams.url) {
      // if(!appState.requestParams.url) return;
      // if(appState.data && Object.keys(appState.data).length) {
      (async () => {
      const res = await axios.get({
        method: appState.requestParams.method,
        url: appState.requestParams.url,
      });
      const historyObj = {res};
      const action = {
        type: 'SET_DATA', 
        payload: res.data,
        history: historyObj
      };
      dispatch(action);
    })();
    return() => {
      console.log('component unmounts');
    } 
    }
   }, [appState] );
  
  // }, [appState.requestParams]);
    
        //   return () => {
        //     console.log('component unmounts');
        //   };
          
        // }, [appState]);

        return (
              <React.Fragment>
                <Header />
                <div>Request Method: {appState.requestParams.method}</div>
                <div>URL: {appState.requestParams.url}</div>
                {/* {appState.requestParams.body} &&
                <div>appState.requestParams.body</div> */}
                <Form handleApiCall={callApi} />
            {/* {Object.keys(appState.data).length > 0 && <Results data={appState.data} />}         */}
                <main>
                  <History history={appState.history} historyData={historyData} />
                  <Results loading={appState.loading} data={appState.data} />
                </main>
                <Footer />
              </React.Fragment>
            );
        }

        export default History;
      

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

