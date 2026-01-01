import React from 'react';
import { Box, Container, Typography } from '@mui/material';

interface SectionProps {
  title?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <Box
      component="section"
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        {title && (
          <Typography variant="h4" component="h2" gutterBottom>
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default Section;
