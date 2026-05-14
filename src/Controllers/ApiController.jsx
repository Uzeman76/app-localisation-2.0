/*
Gestion Du CRUD via l'API
C → Créer           | postApi
R → Lire            | getApi
U → Mettre à jour   | patchApi
D → Supprimer       | deleteApi
*/

export const getApi = () => {
    // TO DO
};

export const postApi = async () => {
    // TO DO
};

export const postApiWithBody = async (endpoint, data) => {
    const BASE_URL = import.meta.env.VITE_API_URL;
    let response;
    try {
      response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      return await response.json();
    } catch (error) {
      return error;
    }
};


export const updateApi = () => {
// TO DO

};

export const patchApi = () => {

 // TO DO

};