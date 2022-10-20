import { useState } from "react";
import { useSignin } from "../hooks/useSignin";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin, error, isLoading } = useSignin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(email, password);
  };

  return (
    <form className="signin" onSubmit={handleSubmit}>
      <h3>Sign In</h3>

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Sign In</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signin;
