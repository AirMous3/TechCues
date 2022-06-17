import {
  ArticleAuthor,
  ArticleDescription,
  ArticleDescriptionWrapper,
  ArticleImage,
  ArticleTitle,
  ArticleWrapper,
} from '@/components/Article/components';

export const Article = ({ title, description, author, image }) => {
  return (
    <ArticleWrapper>
      <ArticleImage src={image} alt="article1" />

      <ArticleDescriptionWrapper>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleAuthor>{author}</ArticleAuthor>
        <ArticleDescription>{description}</ArticleDescription>
      </ArticleDescriptionWrapper>
    </ArticleWrapper>
  );
};
