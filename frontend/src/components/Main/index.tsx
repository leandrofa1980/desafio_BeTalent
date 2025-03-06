import lupa from '../../assets/icon/lupa.svg';
import './styles.css';

type MainProps = {
  searchFunc: string;
  onSearchChange: (value: string) => void;
};

function Main({ searchFunc, onSearchChange }: MainProps) {
  return (
    <main>
      <section id="section-container">
        <div className="container-section-body">
          {/* Controla o tamanho máximo dos elementos na tela */}
          <div className="container-title-search">
            <div className="title-container">
              <h1>Funcionários</h1>
            </div>
            <div className="search-container">
              <input
                type="text"
                placeholder="Pesquisar"
                className="search-input"
                value={searchFunc}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <img className="lupa-icon" src={lupa} alt="Lupa pesquisa" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Main;
