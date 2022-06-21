import styled from 'styled-components';

import { ArticleAuthor } from '@/components/Article/components';

export const CaseStudiesWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;
export const CaseStudiesImageWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.boxShadows[1]};
`;
export const CaseStudiesAuthor = styled(ArticleAuthor)`
  margin-top: 30px;
  padding-left: 30px;
`;
export const CaseStudiesDescription = styled.div`
  font-size: 29px;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.primary};
  padding-left: 30px;
  padding-bottom: 30px;
`;
export const CasesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
  margin-left: 200px;
`;
