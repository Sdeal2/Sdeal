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
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/* ============================================================
   Put your WhatsApp number here (with country code, no + or spaces)
   Example: if your Indian number is 98765 43210, write: 919876543210
   Used by index.html (orders) and track.html (return requests).
   ============================================================ */
const WHATSAPP_NUMBER = "919800186022";
