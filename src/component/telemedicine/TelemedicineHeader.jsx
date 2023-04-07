import React from 'react';
import { Text, Heading } from '@chakra-ui/react';

import { useSelector } from 'react-redux';

const TelemedicineHeader = () => {
  const language = useSelector((state) => state.language.value);
  return (
    <div>
      <Heading size='lg' px={10} mt={10} mb={5}>
        {language === 'English' ? 'Telemedicine' : 'การแพทย์ทางไกล'}
      </Heading>
      <Text fontSize='l' px={10}>
        {language === 'English'
          ? 'Medical communication system physical therapists and patients directly through our web application. This allows you to receive services like having a personal physician during your physical therapy. Or whenever you want help and a physiotherapist can also prescribe exercises or treatment to patients online.'
          : 'ระบบสื่อสารระหว่างแพทย์ นักกายภาพบำบัดและผู้ป่วยโดยตรงผ่าน เว็บแอปพลิเคชั่นของเรา ทำให้คุณได้รับการบริการเสมือนกับมีแพทย์ประจำ ตัวระหว่างคุณทำกายภาพบำบัด หรือทุกเมื่อเมื่อคุณต้องการ ความช่วยเหลือและนักกายภาพบำบัดยังสามารถกำหนดการออกกำลังกายหรือการรักษาให้กับผู้ป่วยทางออนไลน์ได้'}
      </Text>
    </div>
  );
};

export default TelemedicineHeader;
