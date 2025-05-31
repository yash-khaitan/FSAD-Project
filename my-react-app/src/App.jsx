// // src/App.jsx
// import React, { useState } from 'react'
// import {
//   Button,
//   Container,
//   Typography,
//   Stack,
//   Box,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField
// } from '@mui/material'
// import { useNavigate } from 'react-router-dom'

// const App = () => {
//   const navigate = useNavigate()
//   const [feedbackOpen, setFeedbackOpen] = useState(false)
//   const [feedbackText, setFeedbackText] = useState('')

//   const handleFeedbackSubmit = () => {
//     const feedbacks = JSON.parse(localStorage.getItem('appFeedbacks')) || []
//     feedbacks.push({ message: feedbackText, date: new Date().toISOString() })
//     localStorage.setItem('appFeedbacks', JSON.stringify(feedbacks))
//     setFeedbackText('')
//     setFeedbackOpen(false)
//     alert('Thank you for your feedback!')
//   }

//   return (
//     <>
//       {/* Top-right buttons */}
//       <Box
//         sx={{
//           position: 'fixed',
//           top: 16,
//           right: 16,
//           zIndex: 1000,
//           display: 'flex',
//           gap: 1, // spacing between buttons
//         }}
//       >
//         <Button variant="outlined" onClick={() => navigate('/patient-help')}>
//           Patient Help Manual
//         </Button>
//         <Button variant="outlined" onClick={() => setFeedbackOpen(true)}>
//           Give Feedback
//         </Button>
//       </Box>


//       <Container maxWidth="sm" style={{ marginTop: '100px', textAlign: 'center' }}>
//         <Typography variant="h4" gutterBottom>
//           Welcome to Health Portal
//         </Typography>
//         <Typography variant="h6" gutterBottom>
//           Register/Log In as:
//         </Typography>
//         <Stack spacing={2} direction="column" alignItems="center">
//           <Button variant="contained" fullWidth onClick={() => navigate('/patient-registration')}>
//             Patient
//           </Button>
//           <Button variant="contained" fullWidth onClick={() => navigate('/doctor-registration')}>
//             Doctor
//           </Button>
//           </Stack>
//           </Container>
//           <Container maxWidth="sm" style={{ marginTop: '100px', textAlign: 'center' }}>
//           <Typography variant="h6" gutterBottom>
//             LogIn as:
//           </Typography>
//           <Button variant="contained" fullWidth onClick={() => navigate('/admin-registration')}>
//             Admin
//           </Button>
        
//       </Container>

//       {/* Feedback Dialog */}
//       <Dialog open={feedbackOpen} onClose={() => setFeedbackOpen(false)}>
//         <DialogTitle>Feedback</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Your feedback"
//             fullWidth
//             multiline
//             rows={4}
//             value={feedbackText}
//             onChange={(e) => setFeedbackText(e.target.value)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setFeedbackOpen(false)}>Cancel</Button>
//           <Button onClick={handleFeedbackSubmit} disabled={!feedbackText.trim()}>
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>

//     </>
//   )
// }

// export default App

// src/App.jsx
// import React, { useState } from 'react'
// import {
//   Button,
//   Container,
//   Typography,
//   Stack,
//   Box,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Divider,
//   useTheme,
//   Grid,
//   Paper
// } from '@mui/material'
// import {
//   CalendarMonth,
//   LocalHospital,
//   FolderShared,
//   Lock,
//   Devices
// } from '@mui/icons-material'
// import { useNavigate } from 'react-router-dom'

// const App = () => {
//   const navigate = useNavigate()
//   const theme = useTheme()
//   const [feedbackOpen, setFeedbackOpen] = useState(false)
//   const [feedbackText, setFeedbackText] = useState('')

//   const handleFeedbackSubmit = () => {
//     const feedbacks = JSON.parse(localStorage.getItem('appFeedbacks')) || []
//     feedbacks.push({ message: feedbackText, date: new Date().toISOString() })
//     localStorage.setItem('appFeedbacks', JSON.stringify(feedbacks))
//     setFeedbackText('')
//     setFeedbackOpen(false)
//     alert('Thank you for your feedback!')
//   }

//   return (
//     <>
//       {/* Top-right buttons */}
//       <Box
//         sx={{
//           position: 'fixed',
//           top: 16,
//           right: 16,
//           zIndex: 1000,
//           display: 'flex',
//           gap: 1,
//         }}
//       >
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={() => navigate('/patient-help')}
//         >
//           Help Manual
//         </Button>
//         <Button
//           variant="outlined"
//           color="secondary"
//           onClick={() => setFeedbackOpen(true)}
//         >
//           Feedback
//         </Button>
//       </Box>

//       {/* Hero Section */}
//       <Container maxWidth="md" sx={{ mt: 10, textAlign: 'center' }}>
//         <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
//           HealthHaven
//         </Typography>
//         <Typography variant="h6" color="text.secondary" fontStyle="italic" gutterBottom>
//           "Where Care Meets Convenience."
//         </Typography>
//         <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
//           Welcome to <strong>HealthHaven</strong>, your one-stop destination for personalized healthcare
//           management. Book appointments, consult doctors, and keep track of your medical records—
//           all in one place.
//         </Typography>
//       </Container>

//       {/* Feature Highlights */}
//       <Container maxWidth="md" sx={{ mt: 6, mb: 10 }}>
//       <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
//         🌟 Feature Highlights
//       </Typography>

//       <Box
//         component="ul"
//         sx={{
//           listStyleType: '"✔️  "',
//           pl: 3,
//           mt: 3,
//           typography: 'body1',
//           color: 'text.primary',
//           '& li': {
//             mb: 2,
//             ml: 2,
//           },
//         }}
//       >
//         <li>Instant Appointment Booking</li>
//         <li>Doctor & Specialist Directory</li>
//         <li>Medical History & Reports</li>
//         <li>Secure & Private Access</li>
//         <li>Available 24/7 on Web and Mobile</li>
//       </Box>
//     </Container>


//       {/* Registration Section */}
//       {/* Login & Registration Section */}
// <Container
//   maxWidth="sm"
//   sx={{
//     mb: 8,
//     p: 4,
//     borderRadius: 3,
//     boxShadow: 3,
//     bgcolor: theme.palette.background.paper,
//     textAlign: 'center',
//   }}
// >
//   <Typography variant="h5" gutterBottom>
//     Get Started with HealthHaven
//   </Typography>
//   <Typography variant="body1" color="text.secondary" mb={3}>
//     Choose your role to sign up or log in
//   </Typography>

//   <Grid container spacing={2}>
//     <Grid item xs={12} sm={4}>
//       <Button
//         variant="contained"
//         fullWidth
//         size="large"
//         startIcon={<LocalHospital />}
//         onClick={() => navigate('/doctor-registration')}
//       >
//         Doctor
//       </Button>
//     </Grid>
//     <Grid item xs={12} sm={4}>
//       <Button
//         variant="contained"
//         fullWidth
//         size="large"
//         startIcon={<FolderShared />}
//         onClick={() => navigate('/patient-registration')}
//       >
//         Patient
//       </Button>
//     </Grid>
//     <Grid item xs={12} sm={4}>
//       <Button
//         variant="outlined"
//         fullWidth
//         size="large"
//         startIcon={<Lock />}
//         onClick={() => navigate('/admin-registration')}
//       >
//         Admin
//       </Button>
//     </Grid>
//   </Grid>

//   <Divider sx={{ my: 4 }}>Need Help?</Divider>

//   <Typography variant="body2" color="text.secondary">
//     Refer to the manual above or reach out through feedback!
//   </Typography>
// </Container>


//       {/* Feedback Dialog */}
//       <Dialog
//         open={feedbackOpen}
//         onClose={() => setFeedbackOpen(false)}
//         fullWidth
//         maxWidth="sm"
//       >
//         <DialogTitle>Give Us Your Feedback</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Your feedback"
//             fullWidth
//             multiline
//             rows={4}
//             variant="outlined"
//             value={feedbackText}
//             onChange={(e) => setFeedbackText(e.target.value)}
//           />
//         </DialogContent>
//         <DialogActions sx={{ pr: 3, pb: 2 }}>
//           <Button onClick={() => setFeedbackOpen(false)}>Cancel</Button>
//           <Button
//             variant="contained"
//             onClick={handleFeedbackSubmit}
//             disabled={!feedbackText.trim()}
//           >
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react'
import {
  Button,
  Container,
  Typography,
  Stack,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
  useTheme,
  Grid,
} from '@mui/material'
import {
  LocalHospital,
  FolderShared,
  Lock,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [feedbackText, setFeedbackText] = useState('')

  const handleFeedbackSubmit = () => {
    const feedbacks = JSON.parse(localStorage.getItem('appFeedbacks')) || []
    feedbacks.push({ message: feedbackText, date: new Date().toISOString() })
    localStorage.setItem('appFeedbacks', JSON.stringify(feedbacks))
    setFeedbackText('')
    setFeedbackOpen(false)
    alert('Thank you for your feedback!')
  }

  return (
    <>
      {/* Top-right buttons */}
      <Box
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1000,
          display: 'flex',
          gap: 1,
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate('/patient-help')}
        >
          Help Manual
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setFeedbackOpen(true)}
        >
          Feedback
        </Button>
      </Box>

      {/* Hero Section */}
      <Container maxWidth="md" sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
          HealthHaven
        </Typography>
        <Typography variant="h6" color="text.secondary" fontStyle="italic" gutterBottom>
          "Where Care Meets Convenience."
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          Welcome to <strong>HealthHaven</strong>, your one-stop destination for personalized healthcare
          management. Book appointments, consult doctors, and keep track of your medical records—
          all in one place.
        </Typography>
      </Container>

      {/* Registration Section */}
      <Container
        maxWidth="sm"
        sx={{
          mb: 8,
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          bgcolor: theme.palette.background.paper,
          textAlign: 'center',
          mt: 6,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Get Started with HealthHaven
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Choose your role to sign up or log in
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              startIcon={<LocalHospital />}
              onClick={() => navigate('/doctor-registration')}
            >
              Doctor
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              startIcon={<FolderShared />}
              onClick={() => navigate('/patient-registration')}
            >
              Patient
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="outlined"
              fullWidth
              size="large"
              startIcon={<Lock />}
              onClick={() => navigate('/admin-registration')}
            >
              Admin
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }}>Need Help?</Divider>

        <Typography variant="body2" color="text.secondary">
          Refer to the manual above or reach out through feedback!
        </Typography>
      </Container>

      {/* Feature Highlights - Placed Below Registration */}
      {/* Feature Highlights - Placed Below Registration */}
      {/* <Container maxWidth="md" sx={{ mt: 4, mb: 10 }}>
        <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
          🌟 Feature Highlights
        </Typography>

        <Box
          component="ul"
          sx={{
            listStyleType: '"✔️  "',
            pl: 3,
            mt: 3,
            typography: 'body1',
            color: 'text.primary',
            maxWidth: 360,         // limit width so it doesn't stretch too much
            mx: 'auto',            // margin left and right auto to center box horizontally
            '& li': {
              mb: 2,
              ml: 2,
            },
          }}
        >
          <li>Instant Appointment Booking</li>
          <li>Doctor & Specialist Directory</li>
          <li>Medical History & Reports</li>
          <li>Secure & Private Access</li>
          <li>Available 24/7 on Web and Mobile</li>
        </Box>
      </Container> */}

<Container maxWidth="sm" sx={{ mt: 2, mb: 10 }}>
  <Typography
    variant="h5"
    align="center"
    gutterBottom
    fontWeight="700"
    sx={{ color: 'primary.main' }}
  >
    🌟 Feature Highlights
  </Typography>

  <Box
    component="ul"
    sx={{
      bgcolor: 'background.paper',
      boxShadow: 3,
      borderRadius: 2,
      p: 4,
      mt: 3,
      maxWidth: 400,
      mx: 'auto',
      listStyle: 'none',
      color: 'text.primary',
      fontSize: '1.1rem',
      lineHeight: 1.6,
      fontWeight: 500,
    }}
  >
    {[
      'Instant Appointment Booking',
      'Doctor & Specialist Directory',
      'Medical History & Reports',
      'Secure & Private Access',
      'Available 24/7 on Web and Mobile',
    ].map((feature, index) => (
      <Box
        component="li"
        key={index}
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: index === 4 ? 0 : 2,
        }}
      >
        <Box
          component="span"
          sx={{
            mr: 1.5,
            color: 'success.main',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            userSelect: 'none',
          }}
        >
          ✔️
        </Box>
        {feature}
      </Box>
    ))}
  </Box>
</Container>



      {/* Feedback Dialog */}
      <Dialog
        open={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Give Us Your Feedback</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Your feedback"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ pr: 3, pb: 2 }}>
          <Button onClick={() => setFeedbackOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleFeedbackSubmit}
            disabled={!feedbackText.trim()}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default App
