import { Articles } from '@/components/Articles';
import { CaseStudies } from '@/components/CaseStudies';
import { Container } from '@/components/Container';
import { GetStartedForm } from '@/components/GetStartedForm';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { TechnologyAndData } from '@/components/TechnologyAndData';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Main />
        <Articles />
        <GetStartedForm />
        <CaseStudies />
        <TechnologyAndData />
      </Container>
    </div>
  );
}

export default App;
