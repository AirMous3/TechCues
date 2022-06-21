import caseStudies from '@/assets/caseStudies.png';
import { AuthorAndDescription } from '@/components/AuthorAndDescription';
import { ViewAll } from '@/components/ViewAll';

import {
  CaseStudiesAuthor,
  CaseStudiesDescription,
  CaseStudiesImageWrapper,
  CaseStudiesWrapper,
  CasesWrapper,
} from './components';
import { cases } from './config';

export const CaseStudies = () => {
  return (
    <div>
      <ViewAll Title={'Case Studies'} />
      <CaseStudiesWrapper>
        <CaseStudiesImageWrapper>
          <img src={caseStudies} alt="case" />
          <CaseStudiesAuthor>Adell Jacobi</CaseStudiesAuthor>
          <CaseStudiesDescription>
            Drive Efficient Growth with Integrated Data
          </CaseStudiesDescription>
        </CaseStudiesImageWrapper>
        <CasesWrapper>
          {cases.map(({ author, description }) => (
            <AuthorAndDescription description={description} author={author} />
          ))}
        </CasesWrapper>
      </CaseStudiesWrapper>
    </div>
  );
};
