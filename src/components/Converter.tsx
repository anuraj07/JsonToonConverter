import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { encode } from '@toon-format/toon';
import ConversionStats from './ConversionStats';

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
    <Paper sx={{ padding: 4, margin: 2, backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#fff', fontWeight: 500 }}>
            JSON Input
          </Typography>
          <TextField
            multiline
            rows={20}
            variant="outlined"
            fullWidth
            value={jsonInput}
            onChange={(e) => handleJsonInputChange(e.target.value)}
            sx={{
              backgroundColor: '#1e1e1e',
              '& .MuiOutlinedInput-root': {
                fontFamily: 'monospace',
                color: '#d4d4d4',
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#555' },
                '&.Mui-focused fieldset': { borderColor: '#646cff' },
              },
            }}
            InputProps={{
              spellCheck: false,
            }}
          />
          <Typography variant="caption" sx={{ color: '#666', mt: 1, display: 'block' }}>
            Token Count: {jsonTokenCount}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#fff', fontWeight: 500 }}>
            TOON Output
          </Typography>
          <TextField
            multiline
            rows={20}
            variant="outlined"
            fullWidth
            value={toonOutput}
            InputProps={{
              readOnly: true,
              spellCheck: false,
            }}
            sx={{
              backgroundColor: '#1e1e1e',
              '& .MuiOutlinedInput-root': {
                fontFamily: 'monospace',
                color: '#d4d4d4',
                '& fieldset': { borderColor: '#333' },
                '&:hover fieldset': { borderColor: '#555' },
                '&.Mui-focused fieldset': { borderColor: '#646cff' },
              },
            }}
          />
          <Typography variant="caption" sx={{ color: '#666', mt: 1, display: 'block' }}>
            Token Count: {toonTokenCount}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Button onClick={handleConvert} variant="contained" size="large" sx={{ backgroundColor: '#646cff', '&:hover': { backgroundColor: '#535bf2' }, minWidth: 120 }}>
          Convert
        </Button>
        <Button onClick={handleCopy} variant="outlined" size="large" sx={{ color: '#fff', borderColor: '#666', '&:hover': { borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0.05)' } }}>
          Copy
        </Button>
        <Button onClick={handleSample} variant="text" sx={{ color: '#aaa', '&:hover': { color: '#fff' } }}>
          Sample
        </Button>
        <Button onClick={handleClear} variant="text" sx={{ color: '#aaa', '&:hover': { color: '#fff' } }}>
          Clear
        </Button>
        <Button onClick={handleBeautify} variant="text" sx={{ color: '#aaa', '&:hover': { color: '#fff' } }}>
          Beautify
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        {error && <Typography color="error" align="center">{error}</Typography>}
      </Box>
      <ConversionStats jsonTokenCount={jsonTokenCount} toonTokenCount={toonTokenCount} />
    </Paper>
  );
};

export default Converter;
