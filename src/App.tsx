import React from 'react';
import './App.css';
import {MainPage} from "./pages/MainPage";
import {useAppSelector} from "./app/hooks";
import {SettingsPage} from "./pages/SettingsPage";

function App() {
    const pageNumber = useAppSelector(state => state.hmi.page)

  return (
    <div className="App">
        {pageNumber === 0 && <MainPage/>}
        {pageNumber === 1 && <SettingsPage/>}
    </div>
  );
}

export default App;
