import styled from 'styled-components';

import arrow from '@/assets/arrow.svg';

export const ArticlesTitle = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;
export const ArticlesTitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
export const ArticlesViewAll = styled.div`
  cursor: pointer;

  ::after {
    content: url(${arrow});
    margin-left: 10px;
  }
`;
export const ArticlesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
