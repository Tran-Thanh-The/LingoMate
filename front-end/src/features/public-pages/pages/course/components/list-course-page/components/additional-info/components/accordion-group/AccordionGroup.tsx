import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionIcon from './components/accordion-icon/AccordionIcon';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const formatLinks = (text) => {
  const urlRegex = /(?<!@)\b[^\s]+?\.(com|net|org)\b/g;
  return text.replace(
    urlRegex,
    (match) =>
      `<a href="${match}" target="_blank" style="color: #4d4de6; text-decoration: underline;">${match}</a>`,
  );
};
const StandardAccordion = ({ title, faqItems, expanded, onChange }) => {
  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary
        expandIcon={<AccordionIcon isExpanded={expanded} />}
        aria-controls={`${title}-content`}
        id={`${title}-header`}
        sx={{
          color: expanded ? '#23242d' : '#6b7280',
          fontWeight: 600,
        }}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails sx={{ maxHeight: '224px', overflowY: 'auto' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {faqItems.map((item, index) => (
            <Box key={index} color={'#23242d'}>
              <Typography variant="body2" color="#111827" mb="8px">
                {item.question}
              </Typography>
              <Typography
                variant="caption"
                mb="16px"
                whiteSpace="pre-line"
                dangerouslySetInnerHTML={{ __html: formatLinks(item.answer) }}
              />
            </Box>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

const CustomAccordion = ({ title, content, expanded, onChange }) => {
  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary
        expandIcon={<AccordionIcon isExpanded={expanded} />}
        aria-controls={`${title}-content`}
        id={`${title}-header`}
        sx={{
          color: expanded ? '#23242d' : '#6b7280',
          fontWeight: '600',
        }}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  );
};

const AccordionGroup = ({ accordionData }) => {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <Grid container spacing={3}>
      {accordionData.map((data, index) => (
        <Grid size={{ xs: 12 }} key={index}>
          {data.type === 'custom' ? (
            <CustomAccordion
              title={data.title}
              content={data.content}
              expanded={expandedPanel === index}
              onChange={handleChange(index)}
            />
          ) : (
            <StandardAccordion
              title={data.title}
              faqItems={data.faqItems}
              expanded={expandedPanel === index}
              onChange={handleChange(index)}
            />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export { StandardAccordion, CustomAccordion, AccordionGroup };
