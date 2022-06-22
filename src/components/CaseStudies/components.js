import styled from 'styled-components';

import { ArticleAuthor } from '@/components/Article/components';

export const CaseStudiesContainer = styled.div`
  position: relative;
`;
export const CaseStudiesWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;
export const CaseStudiesImageWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.boxShadows[1]};
  background: ${({ theme }) => theme.colors.white};
  z-index: 20;
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
  align-items: center;
  justify-content: space-around;
  gap: 35px;
  width: 100%;
  margin-left: 150px;
`;
export const CasesStudiesArrows = styled.img`
  position: absolute;
  top: 100px;
  left: -55px;
  z-index: 1;
`;
