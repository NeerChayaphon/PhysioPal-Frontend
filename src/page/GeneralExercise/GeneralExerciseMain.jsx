import React, { useState, useEffect } from 'react';
import GeneralExerciseSet from './GeneralExerciseSet';
import { useParams } from 'react-router-dom';

const GeneralExerciseMain = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);

  const token = sessionStorage.getItem('token');
  const params = useParams();

  useEffect(() => {
    fetch('https://physiopal-api-production.up.railway.app/generalExercises', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(params.id);
        // remove this later
        if (params.id - 1 === 0) {
          setId(data.data[params.id - 1]._id);
        }
        console.log('try another id');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // create useEffect that operates on id
  useEffect(() => {
    if (id !== null) {
      console.log(id);
      fetch(
        `https://physiopal-api-production.up.railway.app/generalExercise/join/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading || data === null || data === undefined) {
    return <div>Loading...</div>;
  } else {
    console.log(data.data.ExerciseSet[0]);
    return <GeneralExerciseSet ExerciseSet={data.data} Language={'eng'} />;
  }
};

export default GeneralExerciseMain;
