import styled from 'styled-components';

export const ArticleWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.boxShadows[1]};
  border-radius: 8px;
  margin-top: 30px;
`;
export const ArticleImage = styled.img`
  margin-bottom: 30px;
`;
export const ArticleTitle = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 30px;
`;
export const ArticleAuthor = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.whiteGray};
`;
export const ArticleDescription = styled.div`
  font-size: 19px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.primary};
  max-width: 265px;
`;
export const ArticleDescriptionWrapper = styled.div`
  padding: 0px 25px 30px 30px;
`;
