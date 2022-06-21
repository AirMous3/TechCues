import { ArticlesTitle, ArticlesTitleWrapper, ArticlesViewAll } from './components';

export const ViewAll = ({ Title }) => {
  return (
    <ArticlesTitleWrapper>
      <ArticlesTitle>{Title}</ArticlesTitle>
      <ArticlesViewAll>View All</ArticlesViewAll>
    </ArticlesTitleWrapper>
  );
};
