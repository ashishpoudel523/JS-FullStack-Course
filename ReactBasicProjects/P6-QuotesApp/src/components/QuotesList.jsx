import { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from "@mui/material";

function QuotesList() {
  const [quotes, setQuotes] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/quotes");
        setQuotes(res.data.quotes);
        setLoad(false)
      } catch (err) {
        console.log(err);
      } finally {
        setLoad(false);
      }
    };
    fetchQuotes();
  }, []);

  if (load) return <CircularProgress/>

  return (
    <Grid container spacing={3}>
      {quotes.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item.quote}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.author}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default QuotesList;
