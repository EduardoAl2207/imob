import React, { useState, useEffect } from 'react';
import { db } from '../firebase.config'; // Certifique-se de que está importando seu Firebase corretamente
import { collection, getDocs, query } from 'firebase/firestore';

const Slider = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carregamento

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const snapshot = await getDocs(query(collection(db, 'listings')));
                const fetchedListings = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setListings(fetchedListings);
                console.log('Fetched Listings:', fetchedListings); // Verifique se está retornando o esperado
            } catch (error) {
                console.error("Error fetching listings:", error);
            } finally {
                setLoading(false); // Atualiza o estado de carregamento após a busca
            }
        };

        fetchListings();
    }, []);

    // Verifique se listings está definido e não está vazio
    if (loading) {
        return <div>Loading...</div>; // Exibe mensagem de carregamento
    }

    if (!listings || listings.length === 0) {
        return <div>No listings available</div>; // Exibe mensagem se não houver listagens
    }

    return (
        <div>
            {listings.map(listing => (
                <div key={listing.id}>
                    <h3>{listing.title}</h3>
                    {/* Adicione outros campos que deseja exibir */}
                    <h2>{listing.price}</h2>
                </div>
            ))}
        </div>
    );
};

export default Slider;
