import { useMutation } from '@tanstack/react-query';
import { postPreApplication } from 'apis/preApplication';
import { PreApplicationParams } from 'apis/preApplication/type';
import { AxiosError } from '../type';

const usePreApplication = () => {
  const { mutate: preRegister } = useMutation({
    mutationKey: ['preApplication'],
    mutationFn: (data:PreApplicationParams) => postPreApplication(data),
    onSuccess: () => alert('사전등록 신청 완료'),
    onError: (error:AxiosError) => alert(error.response.data?.msg || '오류가 발생했습니다.'),

  });

  return { preRegister };
};

export default usePreApplication;
