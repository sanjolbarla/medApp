import React from 'react';
import Header from './Header';
import Drawer from './Drawer';
import ClippedDrawer from './info';
import Chat from './chat';
import Divider from "@material-ui/core/Divider";

function App() {
  return (
    <div className="App">
        <Header/>
        <Divider style= {{backgroundColor: "#ececeb", height:85, width:1519}}/>
        <Drawer/>
        <ClippedDrawer/>
        <Chat/>
    </div>
  );
}

export default App;
