import React, { useState } from "react";
import { login } from '../../Services/UserService';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  const response = await login(email, password);
    alert(JSON.stringify(response));

    if (response.retour.code === 200) {
      //TODO rediriger vers la page d'accueil et enregistrer 
      // l'utilisateur dans le contexte ou le stockage local
      alert("Connexion réussie");
    } else {
      //TODO afficher un message d'erreur
      alert("Erreur lors de la connexion");
    }
  };

  return (
    <div class="App">
      <header class="App-header">
        {/* Ouverture du formulaire */}
        <form onSubmit={handleSubmit}>
          {/* Champ email */}
          <label class="formu">
            email :
            <input
              type="email"
              name="email"
              placeholder="test@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <br />
          {/* Champ mot de passe */}
          <label class="formu">
            mot de passe :
            <input
              type="password"
              name="password"
              placeholder="********"
              required
              value={password} // Liaison ajoutée
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <br />
          {/* Bouton d'envoi du formulaire */}
          <input type="submit" value="Envoyer" class="bouton" />
        </form>
      </header>
    </div>
  );
};

export default Login;
