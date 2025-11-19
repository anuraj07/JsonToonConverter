import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Paper } from '@mui/material';
import { encode } from '@toon-format/toon';

const sampleJson = {
  name: 'John Doe',
  age: 30,
  isStudent: false,
  courses: [
    { title: 'History', credits: 3 },
    { title: 'Math', credits: 4 },
  ],
};

const countTokens = (text: string) => {
  if (!text) return 0;
  return text.split(/\s+/).filter(Boolean).length;
};

const Converter: React.FC = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [toonOutput, setToonOutput] = useState('');
  const [error, setError] = useState('');
  const [jsonTokenCount, setJsonTokenCount] = useState(0);
  const [toonTokenCount, setToonTokenCount] = useState(0);

  const handleJsonInputChange = (text: string) => {
    setJsonInput(text);
    setJsonTokenCount(countTokens(text));
  };

  const handleConvert = () => {
    if (!jsonInput.trim()) {
      setError('JSON input is empty.');
      setToonOutput('');
      setToonTokenCount(0);
      return;
    }
    try {
      const json = JSON.parse(jsonInput);
      const toon = encode(json);
      setToonOutput(toon);
      setToonTokenCount(countTokens(toon));
      setError('');
    } catch (e) {
      setError('Invalid JSON format.');
      setToonOutput('');
      setToonTokenCount(0);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(toonOutput);
  };

  const handleSample = () => {
    const sampleString = JSON.stringify(sampleJson, null, 2);
    handleJsonInputChange(sampleString);
  };

  const handleClear = () => {
    handleJsonInputChange('');
    setToonOutput('');
    setError('');
    setToonTokenCount(0);
  };

  const handleBeautify = () => {
    if (!jsonInput.trim()) {
      setError('JSON input is empty.');
      return;
    }
    try {
      const json = JSON.parse(jsonInput);
      const beautified = JSON.stringify(json, null, 2);
      handleJsonInputChange(beautified);
      setError('');
    } catch (e) {
      setError('Invalid JSON format. Cannot beautify.');
    }
  };

  return (
    <Paper sx={{ padding: 2, margin: 2, backgroundColor: '#F5F5DC' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="JSON Input"
            multiline
            rows={15}
            variant="outlined"
            fullWidth
            value={jsonInput}
            onChange={(e) => handleJsonInputChange(e.target.value)}
            sx={{ backgroundColor: '#FFFFFF' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="TOON Output"
            multiline
            rows={15}
            variant="outlined"
            fullWidth
            value={toonOutput}
            InputProps={{
              readOnly: true,
            }}
            sx={{ backgroundColor: '#EFEFEF' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item>
              <Button onClick={handleConvert} variant="contained" sx={{ backgroundColor: '#808000', '&:hover': { backgroundColor: '#6B8E23' } }}>
                Convert
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={handleCopy} variant="contained" sx={{ backgroundColor: '#808000', '&:hover': { backgroundColor: '#6B8E23' } }}>
                Copy
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={handleSample} variant="contained" sx={{ backgroundColor: '#808000', '&:hover': { backgroundColor: '#6B8E23' } }}>
                Sample
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={handleClear} variant="contained" sx={{ backgroundColor: '#808000', '&:hover': { backgroundColor: '#6B8E23' } }}>
                Clear
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={handleBeautify} variant="contained" sx={{ backgroundColor: '#808000', '&:hover': { backgroundColor: '#6B8E23' } }}>
                Beautify
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {error && <Typography color="error">{error}</Typography>}
        </Grid>
        <Grid item xs={12}>
          <Typography>JSON Token Count: {jsonTokenCount}</Typography>
          <Typography>TOON Token Count: {toonTokenCount}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Converter;
