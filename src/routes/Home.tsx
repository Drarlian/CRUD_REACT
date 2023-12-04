import './routes.css';
import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function Home() {

  const refNome = useRef<HTMLInputElement>(null!);
  const refEmail = useRef<HTMLInputElement>(null!);
  const refIdade = useRef<HTMLInputElement>(null!);
  const refEmprego = useRef<HTMLInputElement>(null!);

  function enviaDados(event: React.FormEvent<HTMLButtonElement>){
    event.preventDefault();

    const dados = {
        nome: refNome.current?.value,
        email: refEmail.current?.value,
        idade: refIdade.current?.value,
        emprego: refEmprego.current?.value
    }

    toast.success('Dados Enviados!');
    console.log(dados);

  }

  function apagaDados(event: React.FormEvent<HTMLButtonElement>){
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
                <button type='submit' onClick={apagaDados}>Limpar</button>
                <button type='submit' onClick={enviaDados}>Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default Home
