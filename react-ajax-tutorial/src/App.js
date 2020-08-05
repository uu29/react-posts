import React, { Component } from 'react';
import { PostContainer } from './containers'; //컴포넌트 일일이 안가져오고 한꺼번에 가져오기 위함.
import { Header } from './components'; //컴포넌트 일일이 안가져오고 한꺼번에 가져오기 위함.
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PostContainer />
    </div>
  );
}

export default App;
