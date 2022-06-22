import { AuthorAndDescription } from '@/components/AuthorAndDescription';
import { ViewAll } from '@/components/ViewAll';

import { TechnologyAndDataContainer, TechnologyContainer } from './components';
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
      <div>2</div>
      <TechnologyContainer>
        <ViewAll Title={'Data Insights'} />
        {dataInsights.map(({ description, author }, index) => (
          <AuthorAndDescription author={author} description={description} key={index} />
        ))}
      </TechnologyContainer>
    </TechnologyAndDataContainer>
  );
};
