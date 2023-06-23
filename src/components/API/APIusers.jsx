// import { useEffect } from "react";
// import { getData, registered, selectFormEmail } from "../../features/formSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { getUsersData, selectEmailUser } from "../../features/usersSlice";
// import axios from "axios";

// const ApiUsers = () => {
//   const email = useSelector(selectFormEmail);
//   //   const email = useSelector(selectEmailUser);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.data)
//       .then((resp) => {
//         dispatch(getData([...resp]));
//         dispatch(getUsersData([...resp]));
//       });
//     // dispatch(registered(email));
//   }, [email]);
//   return <div></div>;
// };
// export default ApiUsers;
