import { useState } from "react";

interface User2 {
  uid: string;
  name: string;
}

const tempUser: User2 = {
  uid: "DFC456",
  name: "Adriana",
};

export const User = () => {
  const [user, setUser] = useState<User2>(tempUser);

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Raciel Díaz",
    });
  };
  return (
    <div className="mt-2">
      <h3>User</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
      {!user ? <pre>No User</pre> : <pre> {JSON.stringify(user)}</pre>}
    </div>
  );
};
