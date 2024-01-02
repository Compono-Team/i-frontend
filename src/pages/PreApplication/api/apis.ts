import axios from 'axios';

const onRegReservation = (param: any) => {
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-CSRF-TOKEN': 'pSejtmJGmTswL8mwF5DBGXoF5ZHgCn4sonTNPtZf8bub_HM3lxTAgVojql4dTPCJL731Kkw8yKnTPx0BxkGsXeFvyYOvykUP',
  };

  // Axios 요청에 헤더 추가
  const response = axios.post('http://compno.com/v1/pre-reservation', { ...param }, { headers });

  return response;
};

export default onRegReservation;
