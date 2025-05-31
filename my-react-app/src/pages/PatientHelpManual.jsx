// import React from 'react'
// import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material'

// const PatientHelpManual = () => {
//   return (
//     <Container maxWidth="md" style={{ marginTop: '50px' }}>
//       <Typography variant="h4" gutterBottom>
//         Patient Help Manual
//       </Typography>

//       <Typography variant="h6" gutterBottom>
//         1. Registering as a Patient
//       </Typography>
//       <Typography paragraph>
//         Click the "Patient" button on the homepage. Fill out the registration form with your personal details including name, email, date of birth, and password. Click submit to create your account.
//       </Typography>

//       <Divider style={{ margin: '20px 0' }} />

//       <Typography variant="h6" gutterBottom>
//         2. Logging In
//       </Typography>
//       <Typography paragraph>
//         Once registered, you can log in using your email and password from the login page.
//       </Typography>

//       <Divider style={{ margin: '20px 0' }} />

//       <Typography variant="h6" gutterBottom>
//         3. Booking an Appointment
//       </Typography>
//       <Typography paragraph>
//         Navigate to the "Book Appointment" section after logging in. Select the doctor, choose a date and time, and click "Confirm Appointment".
//       </Typography>

//       <Divider style={{ margin: '20px 0' }} />

//       <Typography variant="h6" gutterBottom>
//         4. Viewing Medical Records
//       </Typography>
//       <Typography paragraph>
//         Go to "My Records" to view your prescriptions, past diagnoses, and other medical history shared by your doctor.
//       </Typography>

//       <Divider style={{ margin: '20px 0' }} />

//       <Typography variant="h6" gutterBottom>
//         6. Getting Support
//       </Typography>
//       <Typography paragraph>
//         For technical support or general inquiries email us at support@virtualmedicalhome.com.
//       </Typography>
//     </Container>
//   )
// }

// export default PatientHelpManual

// import React from 'react';
// import {
//   Container,
//   Typography,
//   Divider,
// } from '@mui/material';

// const PatientHelpManual = () => {
//   return (
//     <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
//       <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
//         Patient Help Manual
//       </Typography>

//       <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
//         1. Registering as a Patient
//       </Typography>
//       <Typography paragraph sx={{ mb: 3, lineHeight: 1.6 }}>
//         Click the <strong>Patient</strong> button on the homepage. Fill out the registration form with your personal details including name, email, date of birth, and password. Click submit to create your account.
//       </Typography>

//       <Divider sx={{ my: 3 }} />

//       <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
//         2. Logging In
//       </Typography>
//       <Typography paragraph sx={{ mb: 3, lineHeight: 1.6 }}>
//         Once registered, you can log in using your email and password from the login page.
//       </Typography>

//       <Divider sx={{ my: 3 }} />

//       <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
//         3. Booking an Appointment
//       </Typography>
//       <Typography paragraph sx={{ mb: 3, lineHeight: 1.6 }}>
//         Navigate to the <strong>Book Appointment</strong> section after logging in. Select the doctor, choose a date and time, and click <strong>Confirm Appointment</strong>.
//       </Typography>

//       <Divider sx={{ my: 3 }} />

//       <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
//         4. Viewing Medical Records
//       </Typography>
//       <Typography paragraph sx={{ mb: 3, lineHeight: 1.6 }}>
//         Go to <strong>My Records</strong> to view your prescriptions, past diagnoses, and other medical history shared by your doctor.
//       </Typography>

//       <Divider sx={{ my: 3 }} />

//       <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
//         6. Getting Support
//       </Typography>
//       <Typography paragraph sx={{ mb: 3, lineHeight: 1.6 }}>
//         For technical support or general inquiries email us at{' '}
//         <a href="mailto:support@virtualmedicalhome.com" style={{ color: '#1976d2', textDecoration: 'none' }}>
//           support@virtualmedicalhome.com
//         </a>.
//       </Typography>
//     </Container>
//   );
// };

// export default PatientHelpManual;

import React from 'react';
import {
  Container,
  Typography,
  Divider,
  Box,
} from '@mui/material';

const PatientHelpManual = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ fontWeight: 'bold', mb: 4, color: '#1976d2' }} // Blue header
      >
        Patient Help Manual
      </Typography>

      <Box 
        sx={{ 
          p: 3, 
          mb: 4, 
          bgcolor: '#f5f5f5', 
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
          1. Registering as a Patient
        </Typography>
        <Typography paragraph sx={{ lineHeight: 1.6 }}>
          Click the <strong>Patient</strong> button on the homepage. Fill out the registration form with your personal details including name, email, date of birth, and password. Click submit to create your account.
        </Typography>
      </Box>

      <Box 
        sx={{ 
          p: 3, 
          mb: 4, 
          bgcolor: '#f5f5f5', 
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
          2. Logging In
        </Typography>
        <Typography paragraph sx={{ lineHeight: 1.6 }}>
          Once registered, you can log in using your email and password from the login page.
        </Typography>
      </Box>

      <Box 
        sx={{ 
          p: 3, 
          mb: 4, 
          bgcolor: '#f5f5f5', 
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
          3. Booking an Appointment
        </Typography>
        <Typography paragraph sx={{ lineHeight: 1.6 }}>
          Navigate to the <strong>Book Appointment</strong> section after logging in. Select the doctor, choose a date and time, and click <strong>Confirm Appointment</strong>.
        </Typography>
      </Box>

      <Box 
        sx={{ 
          p: 3, 
          mb: 4, 
          bgcolor: '#f5f5f5', 
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
          4. Viewing Medical Records
        </Typography>
        <Typography paragraph sx={{ lineHeight: 1.6 }}>
          You can view your prescriptions, past diagnoses, and other medical history shared by your doctor.
        </Typography>
      </Box>

      <Box 
        sx={{ 
          p: 3, 
          mb: 4, 
          bgcolor: '#f5f5f5', 
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
          6. Getting Support
        </Typography>
        <Typography paragraph sx={{ lineHeight: 1.6 }}>
          For technical support or general inquiries email us at{' '}
          <a 
            href="mailto:support@virtualmedicalhome.com" 
            style={{ color: '#1976d2', textDecoration: 'none' }}
          >
            support@virtualmedicalhome.com
          </a>.
        </Typography>
      </Box>
    </Container>
  );
};

export default PatientHelpManual;
