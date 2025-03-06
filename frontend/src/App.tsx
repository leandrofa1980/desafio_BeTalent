import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import TableHeader from './components/TableHeader';
import { BASE_URL } from './utils/request';
import { Funcionarios } from './models/funcionarios';

function App() {
  const [funcionarios, setFuncionarios] = useState<Funcionarios[]>([]);
  const [searchFunc, setSearchFunc] = useState('');

  useEffect(() => {
    axios.get(`${BASE_URL}/employees`).then((response) => {
      setFuncionarios(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Main searchFunc={searchFunc} onSearchChange={setSearchFunc} />
      <TableHeader funcionarios={funcionarios} searchFunc={searchFunc} />
    </>
  );
}

export default App;
