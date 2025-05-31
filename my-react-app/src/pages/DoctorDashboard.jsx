// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import {
//   Container,
//   Typography,
//   Paper,
//   CircularProgress,
//   Button,
//   Box,
//   Switch,
//   FormControlLabel,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   TextField,
//   Divider,
// } from '@mui/material';
// import axios from 'axios';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const DoctorDashboard = () => {
//   const { id } = useParams(); // Doctor ID from URL
//   const [doctor, setDoctor] = useState(null);
//   const [appointments, setAppointments] = useState([]);
//   const [complaints, setComplaints] = useState([]);
//   const [prescriptions, setPrescriptions] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [isDayOpen, setIsDayOpen] = useState(false);
//   const [replyForms, setReplyForms] = useState({});
//   const [replies, setReplies] = useState({});
//   const [replyTexts, setReplyTexts] = useState({});
//   const [patientHistories, setPatientHistories] = useState({});

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDoctorData = async () => {
//       try {
//         const [doctorRes, appointmentRes, complaintRes] = await Promise.all([
//           axios.get(`http://localhost:8080/api/doctors/${id}`),
//           axios.get(`http://localhost:8080/api/appointments/doctor/${id}`),
//           axios.get(`http://localhost:8080/api/complaints/doctor/${id}`),
//         ]);

//         setDoctor(doctorRes.data);
//         setAppointments(appointmentRes.data);
//         setIsDayOpen(doctorRes.data.available);

//         const complaintsWithPatients = await Promise.all(
//           complaintRes.data.map(async (comp) => {
//             try {
//               const patientRes = await axios.get(`http://localhost:8080/api/patients/${comp.patientId}`);
//               return { ...comp, patient: patientRes.data };
//             } catch (error) {
//               console.error('Error fetching patient for complaint:', comp.id, error);
//               return { ...comp, patient: null };
//             }
//           })
//         );
//         setComplaints(complaintsWithPatients);

//         // Saved replies
//         const savedReplies = {};
//         complaintRes.data.forEach((comp) => {
//           const storedReply = localStorage.getItem(`reply-${comp.id}`);
//           if (storedReply) {
//             savedReplies[comp.id] = storedReply;
//           }
//         });
//         setReplies(savedReplies);

//         // Fetch prescriptions
//         const prescriptionsMap = {};
//         await Promise.all(
//           appointmentRes.data.map(async (appt) => {
//             try {
//               const res = await axios.get(`http://localhost:8080/api/prescriptions/appointment/${appt.id}`);
//               prescriptionsMap[appt.id] = res.data;
//             } catch {
//               prescriptionsMap[appt.id] = null;
//             }
//           })
//         );
//         setPrescriptions(prescriptionsMap);

//         // Fetch past appointments for each patient
//         const historyMap = {};
//         await Promise.all(
//           appointmentRes.data.map(async (appt) => {
//             if (appt.patient?.id && !historyMap[appt.patient.id]) {
//               try {
//                 const res = await axios.get(`http://localhost:8080/api/appointments/patient/${appt.patient.id}`);
//                 historyMap[appt.patient.id] = res.data;
//               } catch {
//                 historyMap[appt.patient.id] = [];
//               }
//             }
//           })
//         );
//         setPatientHistories(historyMap);

//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoctorData();
//   }, [id]);

//   const handleToggleAvailability = async () => {
//     try {
//       const newStatus = !isDayOpen;
//       await axios.put(
//         `http://localhost:8080/api/doctors/${id}/availability`,
//         null,
//         { params: { available: newStatus } }
//       );
//       setIsDayOpen(newStatus);
//       localStorage.setItem(`doctor-${id}-dayStatus`, JSON.stringify(newStatus));
//     } catch (error) {
//       alert('Failed to update availability.', error);
//     }
//   };

//   const toggleReplyForm = (complaintId) => {
//     setReplyForms((prev) => ({
//       ...prev,
//       [complaintId]: !prev[complaintId],
//     }));
//   };

//   const handleReplyChange = (complaintId, text) => {
//     setReplyTexts((prev) => ({
//       ...prev,
//       [complaintId]: text,
//     }));
//   };

//   const saveReply = (complaintId) => {
//     const replyText = replyTexts[complaintId];
//     if (!replyText.trim()) return alert('Reply cannot be empty');
//     localStorage.setItem(`reply-${complaintId}`, replyText);
//     setReplies((prev) => ({ ...prev, [complaintId]: replyText }));
//     setReplyForms((prev) => ({ ...prev, [complaintId]: false }));
//     setReplyTexts((prev) => ({ ...prev, [complaintId]: '' }));
//   };

//   if (loading) return <Container><CircularProgress /></Container>;
//   if (!doctor) return <Container><Typography>No doctor data found.</Typography></Container>;

//   return (

//     <>
//     <Box sx={{
//         position: 'fixed',
//         top: 16,
//         right: 16,
//         zIndex: 1000,
//         display: 'flex',
//         gap: 1,
//       }}>
//         <Button variant="outlined" onClick={() => navigate('/')}>Home</Button>
//       </Box>

//     <Container maxWidth="md">
//       {/* Doctor Info */}
//       <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
//         <Typography variant="h4">Doctor Dashboard</Typography>
//         <Typography><strong>Name:</strong> {doctor.firstName} {doctor.lastName}</Typography>
//         <Typography><strong>Specialization:</strong> {doctor.specialization}</Typography>
//         <Typography><strong>Email:</strong> {doctor.email}</Typography>
//         <Typography><strong>Phone:</strong> {doctor.phone}</Typography>
//         <Typography><strong>Location:</strong> {doctor.location}</Typography>
//       </Paper>

//       {/* Availability Toggle */}
//       <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
//         <Typography variant="h5">Availability</Typography>
//         <FormControlLabel
//           control={<Switch checked={isDayOpen} onChange={handleToggleAvailability} />}
//           label={isDayOpen ? 'Available' : 'Unavailable'}
//         />
//       </Paper>

//       {/* Appointments */}
//       <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
//         <Typography variant="h5">Appointments</Typography>
//         {appointments.length === 0 ? (
//           <Typography>No appointments.</Typography>
//         ) : appointments.map((appt) => (
//           <Accordion key={appt.id} sx={{ mb: 2 }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//               <Typography><strong>Patient:</strong> {appt.patient?.name || 'Unknown'}</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography><strong>Status:</strong> {appt.status}</Typography>
//               <Typography><strong>Age:</strong> {appt.patient?.age}</Typography>
//               <Typography><strong>Symptoms:</strong> {appt.symptoms}</Typography>
//               <Typography><strong>Slot:</strong> {new Date(appt.slot.startTime).toLocaleString()} - {new Date(appt.slot.endTime).toLocaleString()}</Typography>

//               {/* Patient's History Card */}
//               <Paper elevation={2} sx={{ p: 2, mt: 3, bgcolor: '#fafafa' }}>
//                 <Typography variant="h6" gutterBottom>Patient's History</Typography>

//                 {/* Health History */}
//                 <Typography><strong>Health History:</strong> {appt.patient?.healthHistory || 'N/A'}</Typography>

//                 <Divider sx={{ my: 2 }} />

//                 {/* Past Appointments With You */}
//                 <Typography variant="subtitle1"><strong>Past Appointments With You:</strong></Typography>
//                 {(patientHistories[appt.patient?.id] || [])
//                   .filter(p => p.id !== appt.id && p.doctor?.id === doctor.id)
//                   .map((past) => (
//                     <Typography key={past.id} variant="body2" sx={{ ml: 2, mb: 1 }}>
//                       • {new Date(past.slot.startTime).toLocaleString()} – {past.symptoms}
//                     </Typography>
//                 ))}
//                 {(patientHistories[appt.patient?.id] || [])
//                   .filter(p => p.id !== appt.id && p.doctor?.id === doctor.id).length === 0 && (
//                   <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
//                     No previous history with you.
//                   </Typography>
//                 )}
//               </Paper>

//               {/* Prescription buttons */}
//               <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
//                 <Button variant="contained" onClick={() =>
//                   navigate(`/doctor/${id}/prescriptions/new`, { state: { appointment: appt, doctor, patient: appt.patient } })
//                 }>
//                   Add Prescription
//                 </Button>
//                 {prescriptions[appt.id] ? (
//                   <Button variant="outlined" onClick={() =>
//                     navigate(`/doctor/${id}/prescriptions/view/${prescriptions[appt.id].id}`)
//                   }>
//                     View Prescription
//                   </Button>
//                 ) : (
//                   <Typography variant="body2" color="gray">No prescription added</Typography>
//                 )}
//               </Box>
//             </AccordionDetails>
//           </Accordion>
//         ))}
//       </Paper>

//       {/* Earnings */}
//       <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
//         <Typography variant="h5">Earnings</Typography>
//         <Typography><strong>Appointment Charge:</strong> ₹{doctor.fees}</Typography>
//         <Typography><strong>Total Appointments:</strong> {appointments.length}</Typography>
//         <Typography><strong>Total Earnings:</strong> ₹{appointments.length * 1000}</Typography>
//       </Paper>

//       {/* Complaints */}
//       <Paper elevation={3} sx={{ p: 4, mt: 4, mb: 6 }}>
//         <Typography variant="h5">Complaints</Typography>
//         {complaints.length === 0 ? (
//           <Typography>No complaints.</Typography>
//         ) : complaints.map((comp) => (
//           <Accordion key={comp.id} sx={{ mb: 2 }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//               <Typography><strong>{comp.patient?.name || 'Unknown'}:</strong> {comp.subject}</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography><strong>Message:</strong> {comp.message}</Typography>
//               <Typography variant="body2"><strong>Submitted:</strong> {new Date(comp.submittedAt).toLocaleString()}</Typography>
//               {replies[comp.id] && (
//                 <Paper elevation={1} sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5', borderLeft: '4px solid #1976d2' }}>
//                   <Typography><strong>Your Reply:</strong> {replies[comp.id]}</Typography>
//                 </Paper>
//               )}
//               {replyForms[comp.id] ? (
//                 <>
//                   <TextField
//                     fullWidth
//                     label="Write your reply"
//                     multiline
//                     rows={3}
//                     value={replyTexts[comp.id] || ''}
//                     onChange={(e) => handleReplyChange(comp.id, e.target.value)}
//                     sx={{ mt: 2 }}
//                   />
//                   <Box sx={{ mt: 1, display: 'flex', gap: 2 }}>
//                     <Button variant="contained" onClick={() => saveReply(comp.id)}>Save Reply</Button>
//                     <Button variant="outlined" onClick={() => toggleReplyForm(comp.id)}>Cancel</Button>
//                   </Box>
//                 </>
//               ) : (
//                 <Button sx={{ mt: 2 }} variant="outlined" onClick={() => toggleReplyForm(comp.id)}>Reply to Patient</Button>
//               )}
//             </AccordionDetails>
//           </Accordion>
//         ))}
//       </Paper>
//     </Container>
//     </>
//   );
// };

// export default DoctorDashboard;


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  CircularProgress,
  Button,
  Box,
  Switch,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Divider,
} from '@mui/material';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DoctorDashboard = () => {
  const { id } = useParams(); // Doctor ID from URL
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [prescriptions, setPrescriptions] = useState({});
  const [loading, setLoading] = useState(true);
  const [isDayOpen, setIsDayOpen] = useState(false);
  const [replyForms, setReplyForms] = useState({});
  const [replies, setReplies] = useState({});
  const [replyTexts, setReplyTexts] = useState({});
  const [patientHistories, setPatientHistories] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const [doctorRes, appointmentRes, complaintRes] = await Promise.all([
          axios.get(`http://localhost:8080/api/doctors/${id}`),
          axios.get(`http://localhost:8080/api/appointments/doctor/${id}`),
          axios.get(`http://localhost:8080/api/complaints/doctor/${id}`),
        ]);

        setDoctor(doctorRes.data);
        setAppointments(appointmentRes.data);
        setIsDayOpen(doctorRes.data.available);

        const complaintsWithPatients = await Promise.all(
          complaintRes.data.map(async (comp) => {
            try {
              const patientRes = await axios.get(`http://localhost:8080/api/patients/${comp.patientId}`);
              return { ...comp, patient: patientRes.data };
            } catch (error) {
              console.error('Error fetching patient for complaint:', comp.id, error);
              return { ...comp, patient: null };
            }
          })
        );
        setComplaints(complaintsWithPatients);

        // Saved replies
        const savedReplies = {};
        complaintRes.data.forEach((comp) => {
          const storedReply = localStorage.getItem(`reply-${comp.id}`);
          if (storedReply) {
            savedReplies[comp.id] = storedReply;
          }
        });
        setReplies(savedReplies);

        // Fetch prescriptions
        const prescriptionsMap = {};
        await Promise.all(
          appointmentRes.data.map(async (appt) => {
            try {
              const res = await axios.get(`http://localhost:8080/api/prescriptions/appointment/${appt.id}`);
              prescriptionsMap[appt.id] = res.data;
            } catch {
              prescriptionsMap[appt.id] = null;
            }
          })
        );
        setPrescriptions(prescriptionsMap);

        // Fetch past appointments for each patient
        const historyMap = {};
        await Promise.all(
          appointmentRes.data.map(async (appt) => {
            if (appt.patient?.id && !historyMap[appt.patient.id]) {
              try {
                const res = await axios.get(`http://localhost:8080/api/appointments/patient/${appt.patient.id}`);
                historyMap[appt.patient.id] = res.data;
              } catch {
                historyMap[appt.patient.id] = [];
              }
            }
          })
        );
        setPatientHistories(historyMap);

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorData();
  }, [id]);

  const handleToggleAvailability = async () => {
    try {
      const newStatus = !isDayOpen;
      await axios.put(
        `http://localhost:8080/api/doctors/${id}/availability`,
        null,
        { params: { available: newStatus } }
      );
      setIsDayOpen(newStatus);
      localStorage.setItem(`doctor-${id}-dayStatus`, JSON.stringify(newStatus));
    } catch (error) {
      alert('Failed to update availability.', error);
    }
  };

  const toggleReplyForm = (complaintId) => {
    setReplyForms((prev) => ({
      ...prev,
      [complaintId]: !prev[complaintId],
    }));
  };

  const handleReplyChange = (complaintId, text) => {
    setReplyTexts((prev) => ({
      ...prev,
      [complaintId]: text,
    }));
  };

  const saveReply = (complaintId) => {
    const replyText = replyTexts[complaintId];
    if (!replyText.trim()) return alert('Reply cannot be empty');
    localStorage.setItem(`reply-${complaintId}`, replyText);
    setReplies((prev) => ({ ...prev, [complaintId]: replyText }));
    setReplyForms((prev) => ({ ...prev, [complaintId]: false }));
    setReplyTexts((prev) => ({ ...prev, [complaintId]: '' }));
  };

  if (loading) return <Container sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}><CircularProgress /></Container>;
  if (!doctor) return <Container sx={{ mt: 10 }}><Typography>No doctor data found.</Typography></Container>;

  return (
    <>
      <Box
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 1000,
        boxShadow: 3,
        borderRadius: 1,
        bgcolor: 'background.paper',
      }}
    >
      <Button
        variant="outlined"
        onClick={() => navigate('/')}
        sx={{
          textTransform: 'none',
          fontWeight: 'medium',
          px: 2,
          py: 0.5,
        }}
      >
        Home
      </Button>
    </Box>



      <Container maxWidth="md" sx={{ mb: 10 }}>
        {/* Doctor Info */}
        <Paper elevation={4} sx={{ p: 4, mt: 6, borderRadius: 3, bgcolor: '#e3f2fd' }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#1565c0' }}>
            Welcome Dr. {doctor.firstName} {doctor.lastName}
          </Typography>
          <Typography sx={{ mb: 1 }}><strong>Name:</strong> {doctor.firstName} {doctor.lastName}</Typography>
          <Typography sx={{ mb: 1 }}><strong>Specialization:</strong> {doctor.specialization}</Typography>
          <Typography sx={{ mb: 1 }}><strong>Email:</strong> {doctor.email}</Typography>
          <Typography sx={{ mb: 1 }}><strong>Phone:</strong> {doctor.phone}</Typography>
          <Typography><strong>Location:</strong> {doctor.location}</Typography>
        </Paper>

        {/* Availability Toggle */}
        <Paper elevation={4} sx={{ p: 3, mt: 5, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: '#f3f6fb' }}>
          <Typography variant="h5" sx={{ fontWeight: '600', color: '#0d47a1' }}>
            Availability
          </Typography>
          <FormControlLabel
            control={<Switch checked={isDayOpen} onChange={handleToggleAvailability} color="primary" />}
            label={isDayOpen ? 'Available' : 'Unavailable'}
            sx={{ userSelect: 'none' }}
          />
        </Paper>

        {/* Appointments */}
        <Paper elevation={4} sx={{ p: 4, mt: 5, borderRadius: 3 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#0d47a1' }}>
            Appointments
          </Typography>
          {appointments.length === 0 ? (
            <Typography>No appointments.</Typography>
          ) : appointments.map((appt) => (
            <Accordion key={appt.id} sx={{ mb: 2, borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#1976d2' }} />}>
                <Typography sx={{ fontWeight: 600, color: '#1565c0' }}>
                  Patient: {appt.patient?.name || 'Unknown'}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: '#f9fbff', borderRadius: 1 }}>
                <Typography sx={{ mb: 0.7 }}><strong>Status:</strong> {appt.status}</Typography>
                <Typography sx={{ mb: 0.7 }}><strong>Age:</strong> {appt.patient?.age}</Typography>
                <Typography sx={{ mb: 0.7 }}><strong>Symptoms:</strong> {appt.symptoms}</Typography>
                <Typography sx={{ mb: 1 }}><strong>Slot:</strong> {new Date(appt.slot.startTime).toLocaleString()} - {new Date(appt.slot.endTime).toLocaleString()}</Typography>

                {/* Patient's History Card */}
                <Paper elevation={1} sx={{ p: 2, mt: 3, bgcolor: '#e8f0fe', borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#0d47a1' }}>Patient's History</Typography>

                  <Typography sx={{ mb: 1 }}><strong>Health History:</strong> {appt.patient?.healthHistory || 'N/A'}</Typography>

                  <Divider sx={{ my: 1.5 }} />

                  <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: '600' }}>
                    Past Appointments With You:
                  </Typography>
                  {(patientHistories[appt.patient?.id] || [])
                    .filter(p => p.id !== appt.id && p.doctor?.id === doctor.id)
                    .map((past) => (
                      <Typography key={past.id} variant="body2" sx={{ ml: 2, mb: 0.7 }}>
                        • {new Date(past.slot.startTime).toLocaleString()} – {past.symptoms}
                      </Typography>
                  ))}
                  {(patientHistories[appt.patient?.id] || [])
                    .filter(p => p.id !== appt.id && p.doctor?.id === doctor.id).length === 0 && (
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                      No previous history with you.
                    </Typography>
                  )}

                  <Divider sx={{ my: 1.5 }} />

                  {/* Prescriptions */}
                  <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: '600' }}>Prescriptions:</Typography>
                  {prescriptions[appt.id] && prescriptions[appt.id].length > 0 ? (
                    <ul style={{ paddingLeft: '1.2rem', marginTop: 0 }}>
                      {prescriptions[appt.id].map((presc) => (
                        <li key={presc.id}>
                          {presc.medication} - {presc.dosage} - {presc.frequency}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Typography variant="body2" color="text.secondary">No prescriptions found.</Typography>
                  )}
                </Paper>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>

        {/* Earnings */}
        <Paper elevation={3} sx={{ p: 4, mt: 4, mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, color: '#1976d2', fontWeight: 'bold' }}>
            Earnings
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Typography>
              <strong>Appointment Charge:</strong> ₹{doctor.fees}
            </Typography>
            <Typography>
              <strong>Total Appointments:</strong> {appointments.length}
            </Typography>
            <Typography>
              <strong>Total Earnings:</strong> ₹{appointments.length * doctor.fees}
            </Typography>
          </Box>
        </Paper>


        {/* Complaints */}
        <Paper elevation={4} sx={{ p: 4, mt: 5, borderRadius: 3 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#0d47a1' }}>
            Complaints
          </Typography>
          {complaints.length === 0 ? (
            <Typography>No complaints.</Typography>
          ) : complaints.map((complaint) => (
            <Box key={complaint.id} sx={{ mb: 3, p: 3, borderRadius: 3, bgcolor: '#f5f7fa', boxShadow: '0 1px 5px rgba(0,0,0,0.05)' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1565c0' }}>
                From Patient: {complaint.patient?.name || 'Unknown'}
              </Typography>
              <Typography sx={{ mb: 1.5 }}><strong>Complaint:</strong> {complaint.message}</Typography>

              {/* Show stored reply if exists */}
              {replies[complaint.id] && (
                <Paper elevation={1} sx={{ p: 2, mb: 2, bgcolor: '#e1f5fe', borderRadius: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: '600', mb: 1, color: '#0277bd' }}>
                    Your Reply:
                  </Typography>
                  <Typography>{replies[complaint.id]}</Typography>
                </Paper>
              )}

              {/* Reply button to toggle form */}
              <Button
                variant="contained"
                size="small"
                onClick={() => toggleReplyForm(complaint.id)}
                sx={{ mb: 1 }}
                color={replyForms[complaint.id] ? 'secondary' : 'primary'}
              >
                {replyForms[complaint.id] ? 'Cancel Reply' : 'Reply'}
              </Button>

              {/* Reply form */}
              {replyForms[complaint.id] && (
                <Box sx={{ mt: 1 }}>
                  <TextField
                    label="Type your reply"
                    multiline
                    rows={3}
                    fullWidth
                    value={replyTexts[complaint.id] || ''}
                    onChange={(e) => handleReplyChange(complaint.id, e.target.value)}
                  />
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => saveReply(complaint.id)}
                    sx={{ mt: 1 }}
                  >
                    Save Reply
                  </Button>
                </Box>
              )}
            </Box>
          ))}
        </Paper>
      </Container>
    </>
  );
};

export default DoctorDashboard;
