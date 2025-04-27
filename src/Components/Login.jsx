import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebaseInit";

const Login = () => {
  const [user, setUser] = useState(null);

  //   Google Login
  const provider = new GoogleAuthProvider();
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((resutl) => {
        console.log(resutl.user);
        setUser(resutl.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  //   LogOut Function
  const handleSignOut = () => {
    signOut(auth)
      .then((resutl) => {
        console.log(resutl, "// Sign-out successful.");
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  // Twitter Login
  const handleTwitter = () => {};

  //   Facebook login
  const providerWithFacebook = new FacebookAuthProvider();
  const handleFacebook = () => {
    signInWithPopup(auth, providerWithFacebook)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

// Github Login
const providerwithGithub = new GithubAuthProvider();
  const handleGithub = () => {
    signInWithPopup(auth, providerwithGithub)
    .then((result) => {
        console.log(result.user)
        setUser(result.user)
    })
    .catch((error) => {
        console.log(error)
        setUser(null)
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="my-6 text-center text-gray-500">or login with</div>

        {user ? (
          <button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
        ) : (
          <div className="flex flex-col gap-3">
            <button
              onClick={handleGithub}
              className="flex items-center justify-center gap-2 bg-gray-800 text-white rounded-lg py-2 hover:bg-gray-900 transition"
            >
              <i className="fab fa-github"></i> GitHub
            </button>
            <button
              onClick={handleFacebook}
              className="flex items-center justify-center gap-2 bg-blue-700 text-white rounded-lg py-2 hover:bg-blue-800 transition"
            >
              <i className="fab fa-facebook"></i> Facebook
            </button>
            <button
              onClick={handleTwitter}
              className="flex items-center justify-center gap-2 bg-blue-400 text-white rounded-lg py-2 hover:bg-blue-500 transition"
            >
              <i className="fab fa-twitter"></i> Twitter
            </button>
            <button
              onClick={handleGoogle}
              className="flex items-center justify-center gap-2 bg-red-500 text-white rounded-lg py-2 hover:bg-red-600 transition"
            >
              <i className="fab fa-google"></i> Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
