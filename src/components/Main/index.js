import mainImage from '@/assets/mainImage.png';

import {
  MainAuthor,
  MainDate,
  MainDescription,
  MainInmage,
  MainSection,
  MainTitle,
  StyledMain,
} from './components';

export const Main = () => {
  return (
    <StyledMain>
      <MainSection>
        <MainTitle>Mobile Technology</MainTitle>
        <MainDescription>
          Technology in Sales: How Data is Powering Purchase Decisions
        </MainDescription>
        <MainAuthor>Milford Smith</MainAuthor>
        <MainDate>February 12, 2021</MainDate>
      </MainSection>
      <div>
        <MainInmage src={mainImage} alt="mainImage" />
      </div>
    </StyledMain>
  );
};
