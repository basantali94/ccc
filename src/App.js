import './App.css';
import'./styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Copmponents/Home/Home';
import Navs from './Copmponents/Nav/Navs';
import { Fragment } from 'react';
function App() {
  return (
    <div className="App">
      <Fragment>
        <Navs/>
         <Home/>

      </Fragment>
      </div>
  );
}

export default App;
