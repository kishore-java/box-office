/* eslint-disable */
import React from 'react';

const ActorCard = ({ birthday, deathday, gender, country, image, name }) => {
  return (
    <div>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `${gender}` : null}
      </h1>
      <p>{country ? `comes from ${country}` : 'country unknown'}</p>
      <p>{birthday ? `born ${birthday}` : null}</p>
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </div>
  );
};

export default ActorCard;
