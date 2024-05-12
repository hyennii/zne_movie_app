import React from 'react';
 
function Food({name, picture}){
  return(
    <div>
      <h2>I like {name}</h2>
      <img src = {picture} alt={name}></img>
    </div>
  )
}

const foodILike = [
  {
    id : 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id : 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id : 3,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id : 4,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

// function renderFood(dish) {         /* item 이름이 dish */
//   return <Food name={dish.name} picture={dish.image}/>
// }


function App() {
  return (
    <div>
      {foodILike.map(dish => (        /* dish는 object임. dish는 첫번째로 Kimchi object, 그다음은 Samgyeopsal object  */
        <Food key={dish.id} name={dish.name} picture={dish.image}/>           /* picture는 두번째 prop */
      ))}
    </div>
  );
}         

// function App() {
//   return(
//     <div>
//       {foodILike.map(renderFood)}
//     </div>
//   )
// }


export default App;

// map : array의 각 item에 function을 적용하고 array를 줌
// key prop 에러가 떴을때 : 각 컴포넌트들은 유일해야하기 때문에 각각 id값을 주면 해결