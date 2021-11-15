/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGet('/shows/${id}?embed[]=seasons&embed[]')
      .then(results => {
        setShow(results);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [id]);
  console.log('show', show);
  if (isLoading) {
    return <div>tdata being loaded</div>;
  }
  if (error) {
    return <div>error occured :{error}</div>;
  }
  return <div>show page</div>;
};

export default Show;
