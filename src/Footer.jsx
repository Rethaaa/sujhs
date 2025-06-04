import React from 'react';
import { Box, Typography, Divider, List, ListItem } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#002A45', color: '#fff', px: 4, py: 6, mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'stretch',
          gap: 4
        }}
      >
        {/* Left: Community Description */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            About Class of 2025
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Typography>
        </Box>

        {/* Right: Credits and Copyright */}
        <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Credits
            </Typography>

            <Box sx={{ flex: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="subtitle2" fontWeight={"Bold"}>Tech Team</Typography>
                <List dense sx={{ pl: 2 }}>
                  <ListItem disableGutters>Aretha Hartono</ListItem>
                  <ListItem disableGutters>Jemima Arcella Hasian Allagan</ListItem>
                  <ListItem disableGutters>Kyna Audenie Kamal</ListItem>
                  <ListItem disableGutters>Caroline Regina Darwis</ListItem>
                </List>
              </Box>

              <Box>
                <Typography variant="subtitle2" fontWeight={"Bold"}>Yearbook Team</Typography>
                <List dense sx={{ pl: 2 }}>
                  <ListItem disableGutters>Emilie Soesanto</ListItem>
                  <ListItem disableGutters>Kenisha Djohan Young</ListItem>
                  <ListItem disableGutters>Kayla Almyra Wardhana</ListItem>
                  <ListItem disableGutters>Lucia Nera Candra Puntadewa</ListItem>
                  <ListItem disableGutters>Catleen Mulan Tyas Ho</ListItem>
                  <ListItem disableGutters>Latisha Lowena Lynd</ListItem>
                  <ListItem disableGutters>Regina Gracia Johanes</ListItem>
                  <ListItem disableGutters>Valika Arum Murtani</ListItem>
                  <ListItem disableGutters>Aubrey Olivia Arifin</ListItem>
                  <ListItem disableGutters>Perlita Garcia</ListItem>
                </List>
              </Box>

              <Box>
                <Typography variant="subtitle2" fontWeight={"Bold"}>Event Team</Typography>
                <List dense sx={{ pl: 2 }}>
                  <ListItem disableGutters>Ivana Natasya Quinn Ginting</ListItem>
                  <ListItem disableGutters>Samantha Angelina Malau</ListItem>
                  <ListItem disableGutters>Jessica Susanto</ListItem>
                  <ListItem disableGutters>Kimie Pratono Wijaya</ListItem>
                  <ListItem disableGutters>Gabriella Michelle Budojo</ListItem>
                  <ListItem disableGutters>Samantha Elaine Gunawan</ListItem>
                  <ListItem disableGutters>Aretha Hartono</ListItem>
                  <ListItem disableGutters>Milliana Romauli</ListItem>
                  <ListItem disableGutters>Anastasia Nadia Ivanna Putri</ListItem>
                  <ListItem disableGutters>Celestine Aiko Erdest</ListItem>
                </List>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body2" align="right">
            &copy; {new Date().getFullYear()} Santa Ursula Junior High School Class of 2025. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;