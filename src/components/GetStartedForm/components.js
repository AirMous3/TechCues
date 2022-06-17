import styled from 'styled-components';

import { Button } from '@/components/Button';

export const FormWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 130px;
  padding: 50px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 8px;
  margin-bottom: 130px;
`;
export const FormTitle = styled.div`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 30px;
`;
export const FormDescription = styled.div`
  font-size: 31px;
  line-height: 50px;
  letter-spacing: 1px;
  max-width: 500px;
`;
export const FormInput = styled.input`
  color: white;
  outline: none;
  font-size: 20px;
  line-height: 30px;
  background: #1b1b4d;
  border: 1px solid #8989f8;
  border-radius: 4px;
  padding: 13px 200px 13px 200px;

  ::placeholder {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  max-width: 535px;
`;
export const FormInputButton = styled(Button)`
  font-size: 20px;
  height: 100%;
`;
