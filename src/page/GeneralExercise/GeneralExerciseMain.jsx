import React, { useState, useEffect } from 'react';
import GeneralExerciseSet from './GeneralExerciseSet';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../../component/Loading/Loading';
import { useDispatch } from 'react-redux';
import { addExerciseSet } from '../../slice/exerciseSet/exerciseSetSlice';
import { useNavigate } from 'react-router-dom';
import { useCookie } from 'react-use';
import useCheckUser from '../../Hook/useCheckUser';

const GeneralExerciseMain = () => {
  useCheckUser('patient', '/patient/login');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);

  const [token, updateToken, deleteToken] = useCookie('token');
  const params = useParams();
  const language = useSelector((state) => state.language.value);
  const exerciseSet = useSelector((state) => state.exerciseSet.data);

  useEffect(() => {
    fetch(
      'https://physiopal-api-deploy-production.up.railway.app/generalExercises',
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
        console.log(params.id);
        // remove this later
        if (params.id - 1 < data.data.length) {
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
        `https://physiopal-api-deploy-production.up.railway.app/generalExercise/join/${id}`,
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
      navigate('/patient/generalExercise/session');
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

export default GeneralExerciseMain;
