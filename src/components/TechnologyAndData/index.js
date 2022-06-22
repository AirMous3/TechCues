import rocket from '@/assets/rocket.png';
import { AuthorAndDescription } from '@/components/AuthorAndDescription';
import { ViewAll } from '@/components/ViewAll';

import {
  RocketImage,
  SmallSubscribeButton,
  SmallSubscribeContainer,
  SmallSubscribeDescription,
  SmallSubscribeInput,
  TechnologyAndDataContainer,
  TechnologyContainer,
} from './components';
import { dataInsights, mobileTechnology } from './config';

export const TechnologyAndData = () => {
  return (
    <TechnologyAndDataContainer>
      <TechnologyContainer>
        <ViewAll Title={'Mobile Technology'} />
        {mobileTechnology.map(({ author, description }, index) => (
          <AuthorAndDescription author={author} description={description} key={index} />
        ))}
      </TechnologyContainer>

      <SmallSubscribeContainer>
        <RocketImage src={rocket} />
        <div>Heading</div>
        <SmallSubscribeDescription>
          Quality tech news. In your inbox. Every week.
        </SmallSubscribeDescription>
        <SmallSubscribeInput placeholder={'Email'} />
        <SmallSubscribeButton>subscribe</SmallSubscribeButton>
      </SmallSubscribeContainer>

      <TechnologyContainer>
        <ViewAll Title={'Data Insights'} />
        {dataInsights.map(({ description, author }, index) => (
          <AuthorAndDescription author={author} description={description} key={index} />
        ))}
      </TechnologyContainer>
    </TechnologyAndDataContainer>
  );
};
