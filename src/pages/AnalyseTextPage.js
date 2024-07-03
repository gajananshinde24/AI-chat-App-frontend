import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
} from '@mui/material';
import axios from 'axios';

const AnalyseTextPage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleAnalyze = async () => {
    try {
      const response = await axios.post('http://localhost:3003/api/v1/sentiment/analyze', {
        text,
      });
      setResult(response.data.sentiment);
    } catch (error) {
      console.error('There was an error analyzing the text!', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '20vh' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Text Analysis
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Enter text to analyze sentiment
      </Typography>
      <Box mt={4}>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
      <Box mt={4}>
        <Button variant="contained" color="primary" size="large" onClick={handleAnalyze}>
          Analyze
        </Button>
      </Box>
      {result && (
        <Box mt={4}>
          <Typography variant="h6" component="p">
            Result: {result}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default AnalyseTextPage;
