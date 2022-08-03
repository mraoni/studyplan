import React from 'react';
import MainForm from '../Components/MainForm';
import List from  '../Components/List';
import style from './App.module.scss'
import Cronometer from '../Cronometer';

function App() {
  return (
    <div className={style.AppStyle}>      
      <MainForm />
      <List />
      <Cronometer />
    </div>
  );
}

export default App;
