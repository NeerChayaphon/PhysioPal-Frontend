import React from 'react'
import {
    Heading,
  } from '@chakra-ui/react';
import GeneralExerciseType from '../../component/GeneralExercise/GeneralExerciseType';

const GeneralExerciseTypePage = () => {
    return (
        <div>
            <Heading size='lg' px={10} mt={8} mb={5}>General Exercise</Heading>
            <GeneralExerciseType/>
        </div>
    )
}

export default GeneralExerciseTypePage
