/* Smart Deal Firebase configuration */
const firebaseConfig = {
  apiKey: "AIzaSyB4OWuLPAsxq9QJ5P69EfJD_QX_eIzJ-Zg",
  authDomain: "smart-deal-store.firebaseapp.com",
  projectId: "smart-deal-store",
  storageBucket: "smart-deal-store.firebasestorage.app",
  messagingSenderId: "514906237893",
  appId: "1:514906237893:web:d183c233a88230d5adf9ac"
};

let db = null;

try {
  if (typeof firebase !== 'undefined') {
    if (!firebase.apps || !firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
  }
} catch (e) {
  console.error('Firebase initialization failed:', e);
  db = null;
}

// WhatsApp number: country code + number, no +, spaces or hyphens.
const WHATSAPP_NUMBER = "919800186022";
