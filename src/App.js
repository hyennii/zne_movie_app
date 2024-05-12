import React from 'react';
import PropTypes from 'prop-types';
 
function Food({name, picture, rating}){
  return(
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt={name}></img>
    </div>
  )
}

Food.propTypes = {        /* 얻고 싶은 props에 대한 설명 적기(콘솔 확인) */
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const foodILike = [
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];

// function renderFood(dish) {         /* item 이름이 dish */
//   return <Food name={dish.name} picture={dish.image}/>
// }


function App() {
  return (
    <div>
      {foodILike.map(dish => (        /* dish는 object임. dish는 첫번째로 Kimchi object, 그다음은 Samgyeopsal object  */
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>           /* picture는 두번째 prop */
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