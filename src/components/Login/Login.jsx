import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      /*
      TODO : modifier l'url
      remplacer http://89.80.248.46:84 par 1 variable global que tu mettra dans  un fichier que tu appellera .env à la racine du projet
      EX : API_LOCATE_URL=http://89.80.248.46:84

      Cela te permettras d'éviter sur chaque fichier ou tu utiliseras l'url en dur
      */
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
    /*
    TODO : Toujours dans un but de faignantise, tu pourrais faire du découpage 

    EX :

      ici
        let body = JSON.stringify({ email, password })
        result = await connection(body)

      dans un fichier Controller/Form/Auth.js
        export function connexion(body){
          const route = 'auth/login'
          return await postForm(route, body)
        }
        (on pourras imaginer par la suite un connexion,register,deleteAccount ... 
        mais aussi et surtout, dans un Controller/Form/User.js, un getUser,updateUser,deleteUser ...)

      dans un fichier Service/Form/Form.js

        export function postForm(route, body){
        -- ta logique mais en faisant en sorte que ny l'url soit en dur ny  --
          return result
        }
        (on pourras imaginer par la suite un getForm,deleteForm,updateForm ... )
    */
  };

  return (
    //je ne connais pas très bien les bonnes pratiques en react, mais je vais me renseigner ;)
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
