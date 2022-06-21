import { Articles } from '@/components/Articles';
import { CaseStudies } from '@/components/CaseStudies';
import { Container } from '@/components/Container';
import { GetStartedForm } from '@/components/GetStartedForm';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Main />
        <Articles />
        <GetStartedForm />
        <CaseStudies />
      </Container>
    </div>
  );
}

export default App;
