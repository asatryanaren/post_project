// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { selectEmails } from "../../features/usersSlice";

// const FormPage = () => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [emailDirty, setEmailDirty] = useState(false);
//   const [passwordDirty, setPasswordDirty] = useState(false);
//   const [emailError, setEmailError] = useState("Email cannot be empty");
//   const [passwordError, setPasswordError] = useState(
//     "Password cannot be empty"
//   );
//   const [formvalid, setFormValid] = useState(false);

//   useEffect(() => {
//     if (emailError || passwordError) {
//       setFormValid(false);
//     } else {
//       setFormValid(true);
//     }
//   });
//   //////////////////////
//   const registeredUsers = useSelector(selectEmails);
//   console.log(registeredUsers);
//   //////////////////////////
//   const blurHandler = (e) => {
//     switch (e.target.name) {
//       case "email":
//         setEmailDirty(true);
//         break;
//       case "password":
//         setPasswordDirty(true);
//         break;
//     }
//   };

//   const emailHendler = (e) => {
//     setEmail(e.target.value);
//     const re =
//       /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     if (!re.test(String(email).toLowerCase())) {
//       setEmailError("Not correct email");
//     } else {
//       setEmailError("");
//     }
//   };

//   const handlerPassword = (e) => {
//     setPassword(e.target.value);
//     if (e.target.value.length < 3 || e.target.value.length > 8) {
//       setPasswordError("password must be longer than 3 and shorter than 8");
//       if (!e.target.value) {
//         setPasswordError("Password cannot be empty");
//       }
//     } else {
//       setPasswordError("");
//     }
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//       }}
//     >
//       <p>Login to your account</p>
//       <input
//         type="email"
//         name="email"
//         onBlur={(e) => blurHandler(e)}
//         value={email}
//         onChange={(e) => emailHendler(e)}
//         placeholder="email"
//       />
//       {emailDirty && emailError && <p>{emailError}</p>}
//       <input
//         type="password"
//         name="password"
//         onBlur={(e) => blurHandler(e)}
//         value={password}
//         onChange={(e) => handlerPassword(e)}
//         placeholder="Password"
//       />
//       {passwordDirty && passwordError && <p>{passwordError}</p>}

//       <button type="submit" disabled={!formvalid}>
//         Enter <NavLink to="/posts"></NavLink>
//       </button>
//     </form>
//   );
// };
// export default FormPage;
