// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDtA5O22jTmceRV7YHn_59bew65zNte2XU",
  authDomain: "melie-7a04a.firebaseapp.com",
  databaseURL: "https://melie-7a04a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "melie-7a04a",
  storageBucket: "melie-7a04a.appspot.com",
  messagingSenderId: "979160632485",
  appId: "1:979160632485:web:1e627dad7b75106744d14c",
  measurementId: "G-PD7Z1K5CCX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Booking form submit
document.getElementById('booking-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const confirmation = document.getElementById('confirmation');

    // Save booking to Firebase
    const bookingRef = await db.ref('bookings/').push({
        name, service, date, time, paid: false
    });

    confirmation.textContent = `Thank you, ${name}! Your ${service} appointment is booked for ${date} at ${time}.`;

    // Stripe payment code here (if needed)
    // ...

    this.reset();
});

// Real-time updates (optional)
db.ref('bookings/').on('value', (snapshot) => {
    const bookings = snapshot.val();
    // Update your UI with the latest bookings if needed
});




