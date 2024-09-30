// firebase.config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyASuvhmvOEi9jENqjm8pjxhEVG0HeMKjqc",
  authDomain: "apiimob.firebaseapp.com",
  projectId: "apiimob",
  storageBucket: "apiimob.appspot.com",
  messagingSenderId: "772245665676",
  appId: "1:772245665676:web:a1aab067cdad40424208a9",
  measurementId: "G-84JGCFGPXE"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializar Firestore
const db = getFirestore(app);

// Função para adicionar um documento à coleção "test" (para teste)
export const testAddDocument = async () => {
  try {
    const docRef = await addDoc(collection(db, "test"), { test: "Hello Firestore!" });
    console.log("Documento escrito com ID: ", docRef.id);
  } catch (e) {
    console.error("Erro ao adicionar documento: ", e);
  }
};

// Função para recuperar todos os documentos da coleção "test"
export const testGetDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, "test"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
};

// Chamar as funções para testar a conexão
testAddDocument().then(() => {
  // Chamar a função para recuperar os documentos após adicionar
  testGetDocuments();
});
