// Fetch doctors
async function fetchDoctors() {
    const res = await fetch("http://localhost:8080/api/doctors");
    if (!res.ok) throw new Error("Failed to fetch doctors");
    return res.json();
  }
  
  // Fetch patients
//   async function fetchPatients() {
//     const res = await fetch("http://localhost:8080/api/patients");
//     if (!res.ok) throw new Error("Failed to fetch patients");
//     return res.json();
//   }
  
  // Fetch appointments for a doctor by doctorId
  async function fetchAppointmentsByDoctor(doctorId) {
    const res = await fetch(`http://localhost:8080/api/appointments/doctor/${doctorId}`);
    if (!res.ok) throw new Error(`Failed to fetch appointments for doctor ${doctorId}`);
    return res.json();
  }
  
  /**
   * Prepare report data with patient count per doctor by fetching appointments per doctor.
   * @returns {Promise<Array<{name: string, PatientsHandled: number}>>}
   */
  export async function prepareReportDataWithAppointments() {
    const doctors = await fetchDoctors();
  
    // For each doctor, fetch appointments and count unique patients
    const reportData = await Promise.all(
      doctors.map(async (doctor) => {
        const appointments = await fetchAppointmentsByDoctor(doctor.id);
  
        // Assuming each appointment has a patientId field
        const uniquePatientIds = new Set(appointments.map((appt) => appt.patientId));
        return {
          name: `${doctor.firstName} ${doctor.lastName}`,
          PatientsHandled: uniquePatientIds.size,
        };
      })
    );
  
    return reportData;
  }
  
  