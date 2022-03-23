

import React from 'react';
import type {Node} from 'react';


import Navigation from './app/navigation';
import {Provider} from 'react-redux';
import { Store } from './redux/store';


const App: () => Node = () => {



  return (
    <Provider store={Store}>
        <Navigation/>
    
      
    </Provider>
  );
};




export default App;
