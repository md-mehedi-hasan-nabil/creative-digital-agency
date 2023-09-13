import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { app } from "../firebase/firebaseConfig";

const auth = getAuth(app);

export default function handleLogout() {
  signOut(auth)
    .then(() => {
      toast.success("Sign-out successful.");
    })
    .catch((error) => {
      toast.error(error?.message ? error.message : "Somethimg is wrong.");
      console.log(error);
    });
}
