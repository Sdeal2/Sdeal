/* ============================================================
   FIREBASE SETUP — do this once, takes about 5 minutes, free forever
   for a small store like this.

   1. Go to https://console.firebase.google.com
   2. Click "Add project" -> give it any name (e.g. "smart-d-store") -> create it
   3. In the left menu click "Build" -> "Firestore Database" -> "Create database"
      -> choose "Start in test mode" -> pick any location -> Enable
   4. Click the gear icon (top left) -> "Project settings"
   5. Scroll down to "Your apps" -> click the </> (web) icon -> register app
      (nickname anything, no need to set up hosting)
   6. It will show you a firebaseConfig object like the one below —
      copy YOUR values and paste them below, replacing the placeholders.
   ============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyB4OWuLPAsxq9QJ5P69EfJD_QX_ezlJ-Zg",
  authDomain: "smart-deal-store.firebaseapp.com",
  projectId: "smart-deal-store",
  storageBucket: "smart-deal-store.firebasestorage.app",
  messagingSenderId: "514906237893",
  appId: "1:514906237893:web:d183c233a88230d5adf9ac"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/* ============================================================
   Put your WhatsApp number here (with country code, no + or spaces)
   Example: if your Indian number is 9800186022, write: 919800186022
   Used by index.html (orders) and track.html (return requests).
   ============================================================ */
const WHATSAPP_NUMBER = "919800186022";
