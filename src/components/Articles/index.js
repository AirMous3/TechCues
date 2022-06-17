import { Article } from '@/components/Article';
import {
  ArticlesTitle,
  ArticlesTitleWrapper,
  ArticlesViewAll,
  ArticlesWrapper,
} from '@/components/Articles/components';

export const Articles = () => {
  return (
    <div>
      <ArticlesTitleWrapper>
        <ArticlesTitle>Recent Articles</ArticlesTitle>
        <ArticlesViewAll>View All</ArticlesViewAll>
      </ArticlesTitleWrapper>
      <ArticlesWrapper>
        <Article />
        <Article />
        <Article />
      </ArticlesWrapper>
    </div>
  );
};
