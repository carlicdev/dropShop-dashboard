import React from 'react';
import { Layout} from 'antd';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main'
const App = () => {;

  return (
    <div className="App">
     <Layout style={{ minHeight: '100vh'}}>
        <Sidebar />
        <Main />
     </Layout>
    </div>
  );
}

export default App;
