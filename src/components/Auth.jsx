import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-10 flex min-w-[320px] flex-col gap-3">
      <input
        className="rounded bg-gray-200 p-2 text-gray-800"
        type="text"
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="rounded bg-gray-200 p-2 text-gray-800"
        type="password"
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSignIn}
        className="rounded bg-blue-500 p-3 text-white transition hover:bg-blue-600"
      >
        Sign In
      </button>
    </div>
  );
}

export default Auth;
