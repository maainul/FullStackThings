import { useContext } from "react";
import { AuthContext, ThemeContext } from "./MyContext";

function Button() {
  const theme = useContext(ThemeContext);
}

function Profile() {
  const currentUser = useContext(AuthContext);
}
