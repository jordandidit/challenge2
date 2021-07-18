import React from 'react';

function Card({person}) {
  return(
    <div className="tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="grid-container" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
      <div>
        
        <p>{person.title}</p>
      </div>
    </div>
  );
}

export default Card;