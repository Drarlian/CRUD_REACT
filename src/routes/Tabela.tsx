import { useContext} from "react";
import { UsersContext } from '../contexts/UsersContext';
import './tabela.css';


function Tabela() {
  const {users, removerUsuario} = useContext(UsersContext);

  return (
    <div className="TabelaVisual">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Profissão</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i) => (
            <tr key={i.id}>
              <td>{i.nome}</td>
              <td >{i.email}</td>
              <td>{i.idade}</td>
              <td>{i.emprego}</td>
              <td><button onClick={() => removerUsuario(i.id)}>Remover</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tabela