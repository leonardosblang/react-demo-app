
import Sidebar from "../../components/Sidebar";
import Title from "../../components/Title";
import { FaUserNinja } from "react-icons/fa";
import ClientUsers from "../../services/user.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./style.css";




export default function GetEmail() {
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");

  const handleGetUsers = async (e) => {
    e.preventDefault();
    try {
      const response = await ClientUsers.getUserbyEmail(email);
      setUser(response);
    } catch (e) {
      toast.error("Ocorreu um erro na busca");
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div>
      <Sidebar />
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>User Email</h1>

        <form className="form-profile" onSubmit={handleGetUsers}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Salvar</button>
        </form>
        {user &&
          user.map((item, index) => {
            return (
              <div className="container" id={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </div>
            );
          })}
      </div>
    </div>
  );
}
