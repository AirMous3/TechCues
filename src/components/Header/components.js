import styled from 'styled-components';

import arrow from '@/assets/Vector.svg';
import searchImage from '@/assets/searchImage.svg';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px 20px 40px;

  img {
    object-fit: scale-down;
  }

  box-shadow: ${({ theme }) => theme.boxShadows[0]};
`;
export const CategoriesWrapper = styled.div`
  display: flex;


  li {
    margin-left: 25px;
    list-style-type: none;

    ::after {
      content: url(${arrow});
      margin-left: 10px;
    }
  }
`;
export const HeaderUl = styled.ul`
  display: flex;
`;
export const HeaderDescription = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;

  a {
    margin-left: 20px;
  }
`;
export const SubscribeWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchImage = styled.div`
  background-image: url(${searchImage});
  width: 32px;
  height: 32px;
  margin-right: 20px;
`;
