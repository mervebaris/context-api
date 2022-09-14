import { ThemeContextProvider } from "./contexts/ThemeContext";
import './styles.css';
import Container from "./Container";
 

const App = () => (
  <>
    <ThemeContextProvider>
      <Container />
    </ThemeContextProvider>
    
  </>
);

export default App;
