/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  const { show, setShow } = useState(null);

  useEffect(() => {
    apiGet('/shows/${id}?embed[]=seasons&embed[]').then(results => {
      setShow(results);
    });
  }, [id]);
  console.log('show', show);
  return <div>ths</div>;
};

export default Show;