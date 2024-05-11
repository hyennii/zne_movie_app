import React from 'react';
import Potato from './potato';   //하나의 컴포넌트만 렌더링해야하기 때문에, App 안에 Potato 넣기

function App() {
  return (
    <div className="App">
      <h1>Hello :)</h1>
      <Potato/>    
    </div>
  );
}

export default App;
