import foto from '../../assets/img/Photo - 12.png';
import './styles.css';

function TableHeader() {
  return (
    <table className="table-container">
      <thead className="table-thead-container">
        <tr>
          <th className="table-border-left">
            <h3>FOTO</h3>
          </th>
          <th>
            <h3>NOME</h3>
          </th>
          <th>
            <h3>CARGO</h3>
          </th>
          <th>
            <h3>DATA DE ADMISSÃO</h3>
          </th>
          <th className="table-border-right">
            <h3>TELEFONE</h3>
          </th>
        </tr>
      </thead>

      <tbody className="table-tbody-container">
        <tr>
          <td>
            <img src={foto} alt="Giovana Foto" />
          </td>
          <td>
            <h3>Giovana L. Arruda</h3>
          </td>
          <td>
            <h3>Front-end</h3>
          </td>
          <td>
            <h3>00/00/0000</h3>
          </td>
          <td>+55 (55)55555-555</td>
        </tr>
        <tr>
          <td>
            <img src={foto} alt="Giovana Foto" />
          </td>
          <td>
            <h3>Giovana L. Arruda</h3>
          </td>
          <td>
            <h3>Front-end</h3>
          </td>
          <td>
            <h3>00/00/0000</h3>
          </td>
          <td>+55 (55)55555-555</td>
        </tr>
        <tr>
          <td>
            <img src={foto} alt="Giovana Foto" />
          </td>
          <td>
            <h3>Giovana L. Arruda</h3>
          </td>
          <td>
            <h3>Front-end</h3>
          </td>
          <td>
            <h3>00/00/0000</h3>
          </td>
          <td>+55 (55)55555-555</td>
        </tr>
        <tr>
          <td>
            <img src={foto} alt="Giovana Foto" />
          </td>
          <td>
            <h3>Giovana L. Arruda</h3>
          </td>
          <td>
            <h3>Front-end</h3>
          </td>
          <td>
            <h3>00/00/0000</h3>
          </td>
          <td>+55 (55)55555-555</td>
        </tr>
        <tr>
          <td>
            <img src={foto} alt="Giovana Foto" />
          </td>
          <td>
            <h3>Giovana L. Arruda</h3>
          </td>
          <td>
            <h3>Front-end</h3>
          </td>
          <td>
            <h3>00/00/0000</h3>
          </td>
          <td>+55 (55)55555-555</td>
        </tr>
      </tbody>
    </table>
  );
}
export default TableHeader;
