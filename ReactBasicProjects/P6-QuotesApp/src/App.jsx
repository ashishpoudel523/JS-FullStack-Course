import { Container, Typography } from "@mui/material";
import QuotesList from "./components/QuotesList";

function App() {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Quotes
      </Typography>
      <QuotesList />
    </Container>
  );
}

export default App;
