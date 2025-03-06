import { Funcionarios } from '../../models/funcionarios';
import './styles.css';

type TableHeaderProps = {
  funcionarios: Funcionarios[];
  searchFunc: string;
};

function TableHeader({ funcionarios, searchFunc }: TableHeaderProps) {
  const filterFunc = funcionarios.filter((func) => {
    const searchTerms = searchFunc.toLowerCase();
    return (
      func.name.toLowerCase().includes(searchTerms) ||
      func.job.toLowerCase().includes(searchTerms) ||
      func.phone.toLowerCase().includes(searchTerms)
    );
  });

  return (
    <table className="table-container">
      <thead className="table-thead-container">
        <tr>
          <th className="table-border-left">
            <h3>FOTO</h3>
          </th>
          <th className="table-border-right-380">
            <h3>NOME</h3>
          </th>
          <th className="table-border-right-500">
            <h3>CARGO</h3>
          </th>
          <th className="table-border-right-600">
            <h3>DATA DE ADMISSÃO</h3>
          </th>
          <th className="table-border-right">
            <h3>TELEFONE</h3>
          </th>
        </tr>
      </thead>

      <tbody className="table-tbody-container">
        {filterFunc.map((funcionario) => {
          return (
            <tr key={funcionario.id}>
              <td>
                <img src={funcionario.image} alt={`${funcionario.name} Foto`} />
              </td>
              <td>
                <h3>{funcionario.name}</h3>
              </td>
              <td className="table-show-375">
                <h3>{funcionario.job}</h3>
              </td>
              <td className="table-show-520">
                <h3>
                  {new Date(funcionario.admission_date).toLocaleDateString()}
                </h3>
              </td>
              <td className="table-show-970">
                <h3>{funcionario.phone}</h3>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default TableHeader;
