import React from 'react';
import { Heading } from '@chakra-ui/react';
import GeneralExerciseType from '../../component/GeneralExercise/GeneralExerciseType';
import useGet from '../../Hook/useGet';
import Loading from '../../component/Loading/Loading';

const GeneralExerciseTypePage = () => {
  const { data, error, loading } = useGet(
    'https://physiopal-api-deploy-production.up.railway.app/musculoskeltalTypes'
  );

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Heading size='lg' px={10} mt={10} mb={5}>
        General Exercise
      </Heading>
      <GeneralExerciseType type={data.data} />
    </div>
  );
};

export default GeneralExerciseTypePage;
