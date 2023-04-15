import React from 'react';
import GeneralExerciseSet from './GeneralExerciseSet';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { incrementExercise } from '../../slice/exerciseSet/exerciseSetSlice';

import Loading from '../../component/Loading/Loading';
import useCheckUser from '../../Hook/useCheckUser';

const GeneralExerciseSetMain = () => {
  useCheckUser('patient', '/patient/login');
  const params = useParams();
  const language = useSelector((state) => state.language.value);
  const exerciseSet = useSelector((state) => state.exerciseSet.data);
  const exerciseCount = useSelector((state) => state.exerciseSet.count);

  if (exerciseSet === null) {
    return <Loading />;
  } else {
    return (
      <GeneralExerciseSet
        ExerciseSet={exerciseSet}
        Language={language === 'English' ? 'eng' : 'th'}
        ExerciseCount={exerciseCount}
      />
    );
  }
};

export default GeneralExerciseSetMain;
