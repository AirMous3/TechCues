import { Article } from '@/components/Article';
import {
  ArticlesTitle,
  ArticlesTitleWrapper,
  ArticlesViewAll,
  ArticlesWrapper,
} from '@/components/Articles/components';

import { config } from './config';

export const Articles = () => {
  return (
    <div>
      <ArticlesTitleWrapper>
        <ArticlesTitle>Recent Articles</ArticlesTitle>
        <ArticlesViewAll>View All</ArticlesViewAll>
      </ArticlesTitleWrapper>
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
