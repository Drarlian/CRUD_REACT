import './home.css';
import { useContext, useRef } from 'react';
import { UsersContext } from '../contexts/UsersContext';
import { ToastContainer, toast } from 'react-toastify';


function Home() {

  const {alteraDados} = useContext(UsersContext);

  const refNome = useRef<HTMLInputElement>(null!);
  const refEmail = useRef<HTMLInputElement>(null!);
  const refIdade = useRef<HTMLInputElement>(null!);
  const refEmprego = useRef<HTMLInputElement>(null!);

  function enviarDados(event: React.FormEvent<HTMLButtonElement>){
    event.preventDefault();

    if (refNome.current.value != '' && refEmail.current.value != '' && refIdade.current.value != '' && refEmprego.current.value != ''){
      toast.success('Dados Enviados!');
      alteraDados(refNome.current?.value, refEmail.current?.value, Number(refIdade.current?.value), refEmprego.current?.value);
      limparDados();
    } else{
      toast.warning("Dados Incompletos!")
    }
  }

  function apagarDados(event: React.FormEvent<HTMLButtonElement>){
    event.preventDefault();

    if (refNome.current.value != '' || refEmail.current.value != '' || refIdade.current.value != '' || refEmprego.current.value != ''){
        refNome.current.value = '';
        refEmail.current.value = '';
        refIdade.current.value = '';
        refEmprego.current.value = '';
    
        toast.warning('Dados Limpos!');
    } else{
        toast.warning('Dados Vazios!');
    }
  }

  function limparDados(){
    refNome.current.value = '';
    refEmail.current.value = '';
    refIdade.current.value = '';
    refEmprego.current.value = '';
  }

  return (
    <div className="HomeVisual">
        <ToastContainer />
        <form>
            <h1>Formulario de Inscrição</h1>
            <input type="text" placeholder="Nome" ref={refNome}></input>
            <input type="email" placeholder="Email" ref={refEmail}></input>
            <input type="number" placeholder="Idade" ref={refIdade}></input>
            <input type="text" placeholder="Emprego" ref={refEmprego}></input>
            <div className='botoesFormulario'>
                <button type='submit' onClick={apagarDados}>Limpar</button>
                <button type='submit' onClick={enviarDados}>Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default Home
