import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Main />
      </Container>
    </div>
  );
}

export default App;
