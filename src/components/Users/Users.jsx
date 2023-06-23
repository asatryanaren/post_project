import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { registered, selectFormEmail } from "../../features/formSlice";
import { getUsers } from "../../features/usersSlice";

const Users = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectFormEmail);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data)
      .then((data) => {
        dispatch(getUsers(data));
      });
    dispatch(registered(email));
  }, []);

  return <div></div>;
};
export default Users;
