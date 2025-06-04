import { useState } from 'react';
import { Box, Tabs, Tab, Typography, Grid, Paper } from '@mui/material';

function TabPanel({ value, index, children }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function YB() { 
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Yearbook
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Logo & Mascot" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="./Logo.png"
                alt="Logo"
                width={200}
                sx={{borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1">
                Graduation siswi Santa Ursula Jakarta tahun 2025 mengangkat tema MOSAIC: Marks of Persistence United with Resilience, yang mencerminkan perjalanan Sanurian’25 dengan semangat pantang menyerah (persistence), ketangguhan dalam menghadapi tantangan (resilience), dan kebersamaan (unity). Seperti burung layang-layang (swallow bird) yang bermigrasi dalam kelompok dengan ketekunan dan kerja sama, Sanurian’25 tumbuh bersama, saling mendukung, dan menggapai mimpi secara kolektif. Maskot burung layang-layang dalam gaya mosaik dipilih sebagai simbol ketangguhan, persatuan, dan nilai SERVIAM yang menjadi fondasi dalam tiga tahun perjalanan kami di SMP Santa Ursula Jakarta.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography>
            This is the content for Tab 2. (Add more content here.)
          </Typography>
        </Paper>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography>
            This is the content for Tab 3. (Add more explanations here.)
          </Typography>
        </Paper>
      </TabPanel>
    </Box>
  );
}