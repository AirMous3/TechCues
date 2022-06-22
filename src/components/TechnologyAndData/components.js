import styled from 'styled-components';

import { Button } from '@/components/Button';
import { FormInput } from '@/components/GetStartedForm/components';

export const TechnologyAndDataContainer = styled.div`
  margin-top: 130px;
  margin-bottom: 200px;
  display: flex;
  justify-content: space-between;
`;
export const TechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
export const SmallSubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  max-width: 320px;
  padding: 40px;
  gap: 30px;
  align-items: center;
`;
export const SmallSubscribeDescription = styled.div`
  font-size: 23px;
  line-height: 36px;
`;
export const SmallSubscribeInput = styled(FormInput)`
  padding: 8px;
`;
export const SmallSubscribeButton = styled(Button)`
  font-size: 20px;
  line-height: 30px;
  width: 83%;
`;
export const RocketImage = styled.img`
  width: 60px;
  height: 60px;
`;
