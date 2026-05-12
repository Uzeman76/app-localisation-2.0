import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://89.80.248.46:84/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log("Erreur réseau");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
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
              placeholder="01234567"
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
