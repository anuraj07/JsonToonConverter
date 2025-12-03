import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

interface ConversionStatsProps {
    jsonTokenCount: number;
    toonTokenCount: number;
}

const ConversionStats: React.FC<ConversionStatsProps> = ({ jsonTokenCount, toonTokenCount }) => {
    const tokensSaved = Math.max(0, jsonTokenCount - toonTokenCount);
    const reductionPercentage = jsonTokenCount > 0 ? Math.round((tokensSaved / jsonTokenCount) * 100) : 0;

    return (
        <Paper
            elevation={0}
            sx={{
                backgroundColor: '#1e1e1e',
                padding: 3,
                borderRadius: 4,
                marginTop: 4,
                border: '1px solid #333',
            }}
        >
            <Typography variant="subtitle1" align="center" sx={{ color: '#fff', mb: 2 }}>
                Conversion Statistics
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ color: '#2196f3', fontWeight: 'bold' }}>
                        {reductionPercentage}%
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#888' }}>
                        Token Reduction
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ color: '#fff', fontWeight: 'bold' }}>
                        {tokensSaved}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#888' }}>
                        Tokens Saved
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ color: '#4caf50', fontWeight: 'bold' }}>
                        {toonTokenCount}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#888' }}>
                        Final Tokens
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default ConversionStats;
