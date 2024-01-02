import axios from 'axios';

const onRegReservation = (param: any) => {
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-CSRF-TOKEN': 'pSejtmJGmTswL8mwF5DBGXoF5ZHgCn4sonTNPtZf8bub_HM3lxTAgVojql4dTPCJL731Kkw8yKnTPx0BxkGsXeFvyYOvykUP',
  };

  const config = {
    headers,
    withCredentials: true,
  };

  const response = axios.post('https://compno.com/api/v1/pre-reservation', { ...param }, config);

  return response;
};

export default onRegReservation;
