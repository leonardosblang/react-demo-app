import { Link } from "react-router-dom";
import { FaUserPlus, FaUserEdit, FaUserMinus } from "react-icons/fa";

import avatar from "../../assets/batman.png";
import "./style.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <img src={avatar} alt="Foto de perfil do usuário" />
      </div>
      <Link to="/">
        <FaUserPlus color="blue" size={26} />
        Criar
      </Link>
      <Link to="/update">
        <FaUserEdit color="white" size={26} />
        Atualizar
      </Link>
      <Link to="/delete">
        <FaUserMinus color="blue" size={26} />
        Deletar
      </Link>
      <Link to="/get">
        <FaUserMinus color="blue" size={26} />
        Ler
      </Link>
      <Link to="/getemailaddress">
        <FaUserMinus color="white" size={24} />
        Ler endereço de Email
      </Link>
    </div>
  );
}
