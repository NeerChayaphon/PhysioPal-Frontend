import React from 'react';
import TherapeuticExerciseSet from './TherapeuticExerciseSet';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { incrementExercise } from '../../slice/exerciseSet/exerciseSetSlice';

import Loading from '../../component/Loading/Loading';

const TherapeuticExerciseSetMain = () => {
  const params = useParams();
  const language = useSelector((state) => state.language.value);
  const exerciseSet = useSelector((state) => state.exerciseSet.data);
  const exerciseCount = useSelector((state) => state.exerciseSet.count);

  if (exerciseSet === null) {
    return <Loading />;
  } else {
    return (
      <TherapeuticExerciseSet
        ExerciseSet={exerciseSet}
        Language={language === 'English' ? 'eng' : 'th'}
        ExerciseCount={exerciseCount}
      />
    );
  }
};

export default TherapeuticExerciseSetMain;
