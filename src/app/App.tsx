import React from 'react';
import '../app/index.css';
import HeaderText from "../components/atoms/Text/HeaderText/HeaderText";
import LeftSlideText from "../components/atoms/Text/LeftSlideText/LeftSlideText";
import AccountText from "../components/atoms/Text/LeftSlideText/AccountText";
import Header from "../components/organisms/Header/Header";
import MainRouter from "../router/MainRouter";




function App() {
  return (
      <div>
         <MainRouter/>
      </div>
  );
}

export default App;
