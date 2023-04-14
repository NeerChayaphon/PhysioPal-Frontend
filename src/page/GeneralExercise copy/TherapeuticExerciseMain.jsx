import React, { useState, useEffect } from 'react';
import GeneralExerciseSet from './TherapeuticExerciseSet';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../../component/Loading/Loading';
import { useDispatch } from 'react-redux';
import { addExerciseSet } from '../../slice/exerciseSet/exerciseSetSlice';
import { useNavigate } from 'react-router-dom';

const TherapeuticExerciseMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const token = sessionStorage.getItem('token');
  const language = useSelector((state) => state.language.value);
  const exerciseSet = useSelector((state) => state.exerciseSet.data);

  // create useEffect that operates on id
  useEffect(() => {
    if (id !== null) {
      console.log(id);
      fetch(
        `https://physiopal-api-deploy-production.up.railway.app/therapeuticExercise/join/${id}`,
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
          dispatch(addExerciseSet(data.data));
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    if (!loading && data != null) {
      navigate('/patient/therapeuticExercise/session');
    }
  }, [loading]);

  return <Loading />;

  // if (loading || data === null || data === undefined) {
  //   return <Loading />;
  // } else {
  //   console.log(data.data.ExerciseSet[0]);
  //   return (
  //     <GeneralExerciseSet
  //       ExerciseSet={data.data}
  //       Language={language === 'English' ? 'eng' : 'th'}
  //     />
  //   );
  // }
};

export default TherapeuticExerciseMain;
