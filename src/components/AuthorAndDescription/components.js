import styled from 'styled-components';

export const Author = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.whiteGray};
`;
export const Description = styled.div`
  font-size: 19px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.primary};
  max-width: 450px;
  cursor: pointer;
`;
