
// Your Firebase config (add databaseURL and fix storageBucket)
const firebaseConfig = {
  apiKey: "AIzaSyDtA5O22jTmceRV7YHn_59bew65zNte2XU",
  authDomain: "melie-7a04a.firebaseapp.com",
  databaseURL: "https://melie-7a04a-default-rtdb.europe-west1.firebasedatabase.app", // <-- Add this
  projectId: "melie-7a04a",
  storageBucket: "melie-7a04a.appspot.com", // <-- Fix typo
  messagingSenderId: "979160632485",
  appId: "1:979160632485:web:1e627dad7b75106744d14c",
  measurementId: "G-PD7Z1K5CCX"
};
mongodb://<username>:<password>@c081fcb2-9623-422a-b24b-0b6af04a392f.eur3.firestore.goog:443/melie?loadBalanced=true&tls=true&authMechanism=SCRAM-SHA-256&retryWrites=false

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Single event listener for booking and payment
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

    // Show confirmation (optional, before payment)
    confirmation.textContent = `Thank you, ${name}! Your ${service} appointment is booked for ${date} at ${time}.`;

    // Redirect to Stripe Checkout (replace with your own backend endpoint)
    fetch('/create-checkout-session', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({bookingId: bookingRef.key, service})
    })
    .then(res => res.json())
    .then(data => {
        window.location = data.checkoutUrl; // Stripe Checkout URL
    });

    this.reset();
});

// Real-time updates (optional)
db.ref('bookings/').on('value', (snapshot) => {
    const bookings = snapshot.val();
    // Update your UI with the latest bookings if needed
});



