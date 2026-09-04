import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Configurações extraídas diretamente do seu console do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmDzXpNUblagEwqTNkoqNVJKaEht9Oi2E",
  authDomain: "app-task-flow-a32ee.firebaseapp.com",
  databaseURL: "https://app-task-flow-a32ee-default-rtdb.firebaseio.com",
  projectId: "app-task-flow-a32ee",
  storageBucket: "app-task-flow-a32ee.firebasestorage.app",
  messagingSenderId: "510052565672",
  appId: "1:510052565672:web:4d4015280bdcd5204cb89d"
};

// Evita reinicializar o app se ele já estiver ativo no Expo
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Exporta o banco de dados Realtime para ser usado nos componentes
export const db = getDatabase(app);