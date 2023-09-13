import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

export default function useFirebaseAuth() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, phoneNumber, photoURL,emailVerified, accessToken } =
          user || {};
        dispatch(
          login({
            accessToken,
            user: {
              displayName,
              email,
              phoneNumber,
              photoURL,
              emailVerified
            },
          })
        );
        setLoading(false);
        setUser(user);
      } else {
        setLoading(false);
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, auth]);

  return { user, loading };
}
