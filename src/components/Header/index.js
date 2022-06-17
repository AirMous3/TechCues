import logo from '@/assets/logo.png';
import { Button } from '@/components/Button';

import {
  CategoriesWrapper,
  HeaderDescription,
  HeaderUl,
  HeaderWrapper,
  SearchImage,
  SubscribeWrapper,
} from './components';

export const Header = () => {
  return (
    <header>
      <HeaderDescription>
        Discover how you can scale your data with TechCues
        <a href="#123">Learn more</a>
      </HeaderDescription>
      <HeaderWrapper>
        <CategoriesWrapper>
          <img src={logo} alt="logoImage" />
          <HeaderUl>
            <li>Categories</li>
            <li>Authors</li>
            <li>Template</li>
          </HeaderUl>
        </CategoriesWrapper>

        <SubscribeWrapper>
          <SearchImage />
          <Button>Subscribe</Button>
        </SubscribeWrapper>
      </HeaderWrapper>
    </header>
  );
};
