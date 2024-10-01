<<<<<<< HEAD
// src/config/firebase.config.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuração do Firebase
=======
// firebase.config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Sua configuração do Firebase
>>>>>>> c107fdf854ac4ea7176a42939b2ca3112aca9919
const firebaseConfig = {
  apiKey: "AIzaSyASuvhmvOEi9jENqjm8pjxhEVG0HeMKjqc",
  authDomain: "apiimob.firebaseapp.com",
  projectId: "apiimob",
  storageBucket: "apiimob.appspot.com",
  messagingSenderId: "772245665676",
  appId: "1:772245665676:web:a1aab067cdad40424208a9",
  measurementId: "G-84JGCFGPXE"
};

<<<<<<< HEAD
// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para adicionar dados (opcional, se você não precisar disso aqui, pode removê-la)
async function addData() {
  try {
    // Adicionando um contato
    const contactRef = await addDoc(collection(db, "contacts"), {
      landlordId: "1000",
      message: "1000",
      timestamp: new Date("2024-10-01T13:26:20Z"), // UTC-3
      userRef: "1000"
    });
    console.log("Contato adicionado com ID: ", contactRef.id);

    // Adicionando uma listagem
    const listingRef = await addDoc(collection(db, "listings"), {
      category: "1000",
      description: "1000",
      images: ["1000"], // Você pode adicionar mais URLs de imagens aqui
      location: [25.4284, -49.2733], // Coordenadas em formato numérico
      price: 1000,
      status: "1000",
      timestamp: new Date("2024-10-01T13:23:47Z"), // UTC-3
      title: "1000",
      userRef: "1000"
    });
    console.log("Listagem adicionada com ID: ", listingRef.id);

    // Adicionando uma oferta
    const offerRef = await addDoc(collection(db, "offers"), {
      listingRef: "1000",
      offerAmount: 1000,
      timestamp: new Date("2024-10-01T13:25:16Z"), // UTC-3
      userRef: "1000"
    });
    console.log("Oferta adicionada com ID: ", offerRef.id);

    // Adicionando um usuário
    const userRef = await addDoc(collection(db, "users"), {
      email: "1000",
      name: "255",
      timestamp: new Date("2024-10-01T13:15:00Z") // UTC-3
    });
    console.log("Usuário adicionado com ID: ", userRef.id);
    
  } catch (e) {
    console.error("Erro ao adicionar documento: ", e);
  }
}

// Chame a função para adicionar os dados se necessário
// addData(); // Descomente esta linha se você quiser adicionar os dados

export { db, addData }; // Exportando o db e a função addData para uso em outros arquivos
=======
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
>>>>>>> c107fdf854ac4ea7176a42939b2ca3112aca9919
