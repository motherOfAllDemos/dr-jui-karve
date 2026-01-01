import React from 'react';
import { Box, Paper, Typography, Avatar, Button } from '@mui/material';
import { LocalHospital } from '@mui/icons-material';
import DentistChairIcon from "../assets/dentist-chair.png"

const Navbar: React.FC = () => {
  const menuItems = ['home', 'resume', 'testimonials', 'contact'];

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        width: '100%',
        py: 1,
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: 'transparent',
        zIndex: 1300,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          backgroundColor: '#C5E1F5',
          borderRadius: '12px',
          border: '1px solid #A5C9E3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: { xs: 0.8, sm: 1, md: 1.2 },
          px: { xs: 1.5, sm: 2, md: 3 },
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.12), 0px 2px 6px rgba(0, 0, 0, 0.08)',
          flexShrink: 0,
        }}
      >
        {/* Dentist Chair Icon on the left */}
        <Box
          component="img"
          src={DentistChairIcon}
          alt="Dentist Chair"
          sx={{
            width: { xs: '40px', sm: '48px', md: '56px' },
            height: { xs: '40px', sm: '48px', md: '56px' },
            objectFit: 'contain',
          }}
        />

        {/* Menu Items in the center */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 1.5, sm: 2, md: 3 },
            flex: 1,
          }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item}
              variant="h6"
              component="a"
              href={`#${item}`}
              sx={{
                color: '#2C3E50',
                textDecoration: 'none',
                cursor: 'pointer',
                textTransform: 'capitalize',
                fontWeight: 500,
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Avatar */}
        <Avatar
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          sx={{
            width: { xs: 35, sm: 40, md: 45 },
            height: { xs: 35, sm: 40, md: 45 },
            border: '2px solid #2C3E50',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            mr: { xs: 1, sm: 1.5, md: 2 },
          }}
        />

        {/* Contact Me Button */}
        <Button
          variant="contained"
          href="#contact"
          sx={{
            backgroundColor: '#1976d2',
            color: '#FFFFFF',
            textTransform: 'none',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
            px: { xs: 1.5, sm: 2, md: 2.5 },
            py: { xs: 0.5, sm: 0.6, md: 0.7 },
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Contact Me
        </Button>
      </Paper>
    </Box>
  );
   
};

export default Navbar;
