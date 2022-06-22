import facebookLogo from '@/assets/facebookIcon.svg';
import instLogo from '@/assets/instagramIcon.svg';
import logo from '@/assets/purpleLogo.png';
import slackLogo from '@/assets/slackIcon.svg';
import twitterLogo from '@/assets/twitterIcon.svg';

import {
  CategoriesTitle,
  FooterLi,
  Logo,
  LogosContainer,
  LogosWrapper,
  StyledFooter,
} from './components';

export const Footer = () => {
  return (
    <StyledFooter>
      <LogosContainer>
        <img src={logo} alt="logo" />
        <LogosWrapper>
          <Logo>
            <img src={instLogo} alt="instLogo" />
          </Logo>
          <Logo>
            <img src={twitterLogo} alt="twitterLogo" />
          </Logo>
          <Logo>
            <img src={slackLogo} alt="slackLogo" />
          </Logo>
          <Logo>
            <img src={facebookLogo} alt="facebookLogo" />
          </Logo>
        </LogosWrapper>
      </LogosContainer>

      <div>
        <CategoriesTitle>Categories</CategoriesTitle>
        <ul>
          <FooterLi>Case Studies</FooterLi>
          <FooterLi>Mobile Technology</FooterLi>
          <FooterLi>Data Insights</FooterLi>
        </ul>
      </div>

      <div>
        <CategoriesTitle>Template</CategoriesTitle>
        <ul>
          <FooterLi>Style Guide</FooterLi>
          <FooterLi>License</FooterLi>
          <FooterLi>Change Log</FooterLi>
        </ul>
      </div>

      <div>4</div>
    </StyledFooter>
  );
};
