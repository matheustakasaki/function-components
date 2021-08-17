import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1" />
      <h1>Formulário de cadastro</h1>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
