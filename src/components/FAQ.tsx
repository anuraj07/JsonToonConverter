import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: 'What is toon?',
            answer: 'TOON is a concise data format optimized for LLMs, reducing token usage while maintaining readability.',
        },
        {
            question: 'What is this json to toon converter?',
            answer: 'This tool converts standard JSON data into the TOON format, helping you save on API costs and context window usage.',
        },
        {
            question: 'How much can I save by using a JSON to TOON converter?',
            answer: 'You can typically save 30-60% on token usage, depending on the structure and content of your JSON data.',
        },
        {
            question: 'Do LLMs understand TOON format from a JSON to TOON converter?',
            answer: 'Yes, modern LLMs like GPT-4, Claude, and Gemini are capable of understanding and processing the TOON format effectively.',
        },
        {
            question: 'Is my data safe when using the JSON to TOON converter?',
            answer: 'Yes, all conversions happen locally in your browser. Your data is never sent to any server.',
        },
    ];

    return (
        <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 4 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ color: '#fff', mb: 4 }}>
                FAQ
            </Typography>
            {faqs.map((faq, index) => (
                <Accordion key={index} sx={{ backgroundColor: 'transparent', color: '#fff', borderBottom: '1px solid #333', boxShadow: 'none', '&:before': { display: 'none' } }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
                        <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: '#aaa' }}>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default FAQ;
