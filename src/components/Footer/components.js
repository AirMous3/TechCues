import styled from 'styled-components';

import { FormInput } from '@/components/GetStartedForm/components';
import {Button} from '@/components/Button';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 80px 125px;
  background: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.footerIcons};
`;
export const LogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
export const LogosWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.footerIcons};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
export const CategoriesWrapper = styled.div``;
export const CategoriesTitle = styled.div`
  font-size: 19px;
  line-height: 18px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;
export const FooterLi = styled.li`
  font-size: 17px;
  line-height: 29px;
  cursor: pointer;
`;
export const FooterInput = styled(FormInput)`
  padding: 12px 0;
  width: 100%;
`;
export const FooterSubscribeWrapper = styled.div`
  font-size: 29px;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const FooterButton = styled(Button)``
