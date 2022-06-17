import article1 from '@/assets/article1.png';
import {
  ArticleAuthor,
  ArticleDescription,
  ArticleDescriptionWrapper,
  ArticleImage,
  ArticleTitle,
  ArticleWrapper,
} from '@/components/Article/components';

export const Article = () => {
  return (
    <ArticleWrapper>
      <ArticleImage src={article1} alt="article1" />

      <ArticleDescriptionWrapper>
        <ArticleTitle>Mobile Technology</ArticleTitle>
        <ArticleAuthor>Adell Jacobi</ArticleAuthor>
        <ArticleDescription>Best Technology Podcast Episodes of 2020</ArticleDescription>
      </ArticleDescriptionWrapper>
    </ArticleWrapper>
  );
};
