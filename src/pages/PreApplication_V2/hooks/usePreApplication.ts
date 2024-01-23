import { useMutation } from '@tanstack/react-query';
import { postPreApplication } from 'apis/preApplication';
import { PreApplicationParams } from 'apis/preApplication/type';
import { useNavigate } from 'react-router-dom';
import { AxiosError, ModalData } from '../type';

interface Props {
  setModalData: React.Dispatch<React.SetStateAction<ModalData>>;
}
const usePreApplication = ({ setModalData }:Props) => {
  const navigate = useNavigate();

  const { mutate: preRegister } = useMutation({
    mutationKey: ['preApplication'],
    mutationFn: (data:PreApplicationParams) => postPreApplication(data),
    onSuccess: () => setModalData((prev) => ({
      ...prev,
      title: '사전예약 완료.',
      content: '사전예약이 완료되었습니다.\n감사합니다.',
      isOpen: true,
      action: () => navigate('/'),
    })),
    onError: (error:AxiosError) => setModalData((prev) => ({
      ...prev,
      title: '사전예약 오류',
      content: error.response.data?.msg ? '사전예약 신청 중,\n오류가 발생했습니다.' : '',
      isOpen: true,
    })),

  });

  return { preRegister };
};

export default usePreApplication;
