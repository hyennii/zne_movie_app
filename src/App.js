import React from 'react';
 
function Food({name, picture}){
  return(
    <div>
      <h2>I like {name}</h2>
      <img src = {picture}></img>
    </div>
  )
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (        /* dish는 object임. dish는 첫번째로 Kimchi object, 그다음은 Samgyeopsal object  */
        <Food name={dish.name} picture={dish.image}/>           /* picture는 두번째 prop */
      ))}
    </div>
  );
}

export default App;

// map : array의 각 item에 function을 적용하고 array를 줌