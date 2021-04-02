import React from 'react';

import { Provider} from 'react-redux';
import Store from './store';
import Main from './components/Main';
import GlobalStyle from './styles/global';


function App() {
  return (
    <Provider store={Store} >  
        <GlobalStyle />
        <Main />
    </Provider>
  );
}

export default App;
