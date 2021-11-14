/* eslint-disable */
import React from 'react';

import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ birthday, deathday, gender, country, image, name }) => {
  return (
    <StyledActorCard>
      <div className="img-wrapper">
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `${gender}` : null}
      </h1>
      <p>{country ? `comes from ${country}` : 'country unknown'}</p>
      <p>{birthday ? `born ${birthday}` : null}</p>
      <p className="deathday">{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </StyledActorCard>
  );
};

export default ActorCard;
