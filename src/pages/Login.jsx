import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/login.png";
import loaderImage from "../assets/loading.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import { useLoginWithGoogleMutation } from "../features/auth/authApi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [
    loginWithGoogle,
    {
      isSuccess: isSuccessLoginWithGoogle,
      isError: isErrorLoginWithGoogle,
      error: loginWithGoogleError,
    },
  ] = useLoginWithGoogleMutation();

  const auth = getAuth(app);

  const [loginInfo, setLoginInfo] = useState({
    accessToken: undefined,
    user: undefined,
  });
  const [loadingLoginWithGoogle, setLoadingLoginWithGoogle] = useState(false);

  // const handleSuccessLoginWithGoogle = useCallback(() => {
  //   /**
  //    * if login is success than show sucess toast and redirect to home page
  //    */
  //   setLoadingLoginWithGoogle(false);
  //   toast.success("Google login successful");
  //   dispatch(login(loginInfo));

  //   return redirect("/");
  // }, [dispatch, loginInfo]);

  /**
   * handle error login with google
   */
  useEffect(() => {
    if (isErrorLoginWithGoogle) {
      if (loginWithGoogleError?.status === 409) {
        /**
         * User email already exists! -> status === 409
         */
        /**
         * if login is success than show sucess toast and redirect to home page
         */
        setLoadingLoginWithGoogle(false);
        toast.success("Google login successful");
        dispatch(login(loginInfo));
        setLoadingLoginWithGoogle(false);
        navigate("/");
      }
    }
  }, [
    dispatch,
    loginInfo,
    isErrorLoginWithGoogle,
    loginWithGoogleError,
    navigate,
  ]);

  /**
   * handle success login with google
   */
  useEffect(() => {
    if (isSuccessLoginWithGoogle) {
      /**
       * if login is success than show sucess toast and redirect to home page
       */
      setLoadingLoginWithGoogle(false);
      toast.success("Google login successful");
      dispatch(login(loginInfo));
      setLoadingLoginWithGoogle(false);
      navigate("/");
    }
  }, [dispatch, loginInfo, isSuccessLoginWithGoogle, navigate]);

  function handleGoogleLogin() {
    // loading true
    setLoadingLoginWithGoogle(true);
    // google provider
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const { displayName, email, phoneNumber, photoURL, emailVerified } =
          result.user;

        setLoginInfo({
          accessToken: token,
          user: {
            displayName,
            email,
            phoneNumber,
            photoURL,
            emailVerified,
          },
        });

        loginWithGoogle({
          displayName,
          email,
          phoneNumber,
          photoURL,
          emailVerified,
        });
      })
      .catch((error) => {
        setLoadingLoginWithGoogle(false);
        console.log(error);
      });
  }

  return (
    <section className="h-screen grid grid-cols-12 justify-center items-center">
      <div className="col-span-12 md:col-span-8 flex justify-center items-center h-full bg-blue-50 overflow-hidden">
        <img
          className="w-3/4"
          src={loginImage}
          alt=""
          data-aos="fade-up-right"
          data-aos-duration="2000"
        />
      </div>
      <div className="col-span-12 md:col-span-4 p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Login your Account
        </h1>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered"
            />
          </div>
          <a
            href="#"
            className="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >
            Forget Password?
          </a>

          <div>
            <button className="btn btn-block">Login</button>
          </div>
        </form>
        <div>
          <h4 className="my-4">Sign in with</h4>
          <button
            disabled={loadingLoginWithGoogle}
            className="btn btn-block bg-red-600 my-1 flex justify-center gap-2"
            onClick={handleGoogleLogin}
          >
            {loadingLoginWithGoogle ? (
              <>
                <img
                  className="w-8 animate-spin"
                  src={loaderImage}
                  alt="loading..."
                />
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                <span>Google</span>
              </>
            )}
          </button>
          <button className="btn btn-block bg-slate-600 my-1 flex justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span>Github</span>
          </button>
        </div>
        <Link
          to="/register"
          className="text-xs text-gray-600 hover:underline hover:text-blue-600"
        >
          Donot have an account yet? Sign Up
        </Link>
      </div>
    </section>
  );
}
