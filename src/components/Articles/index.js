import { Article } from '@/components/Article';
import { ArticlesWrapper } from '@/components/Articles/components';
import { ViewAll } from '@/components/ViewAll';

import { config } from './config';

export const Articles = () => {
  return (
    <div>
      <ViewAll Title={'Recent Articles'} />
      <ArticlesWrapper>
        {config.map(({ description, author, title, image }, index) => (
          <Article
            key={index}
            author={author}
            title={title}
            description={description}
            image={image}
          />
        ))}
      </ArticlesWrapper>
    </div>
  );
};
