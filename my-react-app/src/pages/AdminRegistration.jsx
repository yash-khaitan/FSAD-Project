// import React, { useState } from 'react';
// import {
//   Container,
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Paper,
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// export default function AdminLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       console.log('Response:', response);
//       // Check if the response is ok (status in the range 200-299)
      

//       if (response.ok) {
//         const data = await response.json();
//         // Save JWT token in localStorage
//         localStorage.setItem('jwt', data.token);
//         navigate('/admin-dashboard');
//       } else {
//         alert('Invalid credentials!');
//       }
//     } catch (error) {
//       alert('Error connecting to server: ' + error.message);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Admin Login
//         </Typography>

//         <Box component="form" noValidate autoComplete="off" onSubmit={handleLogin}>
//           <TextField
//             fullWidth
//             label="Email"
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
//             Sign In
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }


import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      console.log('Response:', response);
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('jwt', data.token);
        navigate('/admin-dashboard');
      } else {
        alert('Invalid credentials!');
      }
    } catch (error) {
      alert('Error connecting to server: ' + error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper
        elevation={6}
        sx={{
          p: 5,
          borderRadius: 3,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          bgcolor: 'background.paper',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          Admin Login
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleLogin}
          sx={{ '& .MuiTextField-root': { mb: 3 } }}
        >
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: 600,
              fontSize: '1.1rem',
              borderRadius: 2,
              textTransform: 'none',
            }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
