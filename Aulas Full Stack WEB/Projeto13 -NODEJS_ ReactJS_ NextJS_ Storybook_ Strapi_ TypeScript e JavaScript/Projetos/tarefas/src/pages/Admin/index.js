import { useState, useEffect } from 'react';
import './admin.css';
import { auth, db } from '../../firebaseConnection';
import { signOut } from 'firebase/auth';

import { toast } from 'react-toastify';


//EDITAR TAREFA  importar updateDoc
import{ 
    addDoc, 
    collection,
    onSnapshot, query, orderBy, where,
    doc, deleteDoc,
    updateDoc
} from 'firebase/firestore';
//import { async } from '@firebase/util';

export default function Admin(){
    const [tarefaInput, setTarefaInput] = useState('');
    const [user, setUser] = useState({});
    const [tarefas, setTarefas] = useState([]);

    //EDITAR TAREFA
    const [edit, setEdit] = useState({});// Aqui será passado o item inteiro como id, tarefa... Todas as propriedades.

    useEffect(()=>{
        async function loadTarefas(){
            const userDetail = localStorage.getItem("@detailUser")
            setUser(JSON.parse(userDetail))


            if(userDetail){
                const data = JSON.parse(userDetail);
                const tarefaRef = collection(db, 'tarefas'); 
                const q = query(tarefaRef, orderBy("created", "desc"), where("userUid", "==", data?.uid)); 
                const unsub = onSnapshot(q, (snapshot)=>{
                    let lista = []; 
                    snapshot.forEach((doc)=>{
                        lista.push({
                            id: doc.id,
                            tarefa: doc.data().tarefa, 
                            userUid: doc.data().userUid
                        })
                    })
                    
                    //console.log(lista);
                    setTarefas(lista);
                    console.log(unsub);
                } )

            }
        }
        loadTarefas();
    },[])


    async function handleRegister(e){
        e.preventDefault();
        //alert("teste botao registrar tarefa");

        if(tarefaInput === ''){
            toast("Digite sua tarefa... Não deixe em branco.");
           // alert("Digite sua tarefa...")
            return; 
        }

//Verificação EDITAR TAREFA
        //edit?  se não tiver id ele segue em frente, ignora essa parte.
        if(edit?.id){
            UpdateTarefa();// Se tiver um ID vai chamar essa função
            return;
        }
//Fim verificação EDITAR TAREFA


        await addDoc(collection(db, "tarefas"), {
            tarefa: tarefaInput,
            created: new Date(), 
            userUid: user?.uid, 
        })
        .then(()=>{
            toast.success("Tarefa registrada :)");
            console.log("Tarefa registarda");
            setTarefaInput('');
        })
        .catch((error)=>{
            toast.error("ERRO. Algo inesperado aconteceu");
            console.log(error);
        })
    }
    
    
    async function handleLogout(){
        await signOut(auth);
    } 

    async function delTarefa(id){
       // alert('teste delTarefa. ID: '+ id);
       const docRef = doc(db, "tarefas", id)
       await deleteDoc(docRef);
       toast.warn("Tarefa excluida");
    } 

//EDITAR TAREFA
    //Repara que vai ser editado o item, não o id. Por isso coloca item aqui.
    //Outra coisa importante o textarea que registra é comandado pelo tarefaInput
    async function editTarefa(item){
        //console.log(item);
        setTarefaInput(item.tarefa);

        setEdit(item); // Aqui será passado o item inteiro como id, tarefa... Todas as propriedades.
    }


//EDITAR TAREFA
    async function UpdateTarefa(){
       // alert('botao atualizar / submit / onSubmit={handleRegister}  / if(edit?.id) /  UpdateTarefa(); ');
      const docRef = doc(db, "tarefas", edit?.id);
      await updateDoc(docRef, { //Agora passar o que será atualizado
        tarefa: tarefaInput,
      })
      .then(()=>{
        toast.warn("Tarefa atualizada");
        console.log("Tarefa atualizada");
        //Limpar áreas
        setTarefaInput('');
        setEdit({});
      })
      .catch(()=>{
        toast.error("ERRO ao tentar atualizar");
        console.log('ERRO ao atualizar.');
        setTarefaInput('');
        setEdit({});
      })
    }

    
    return(
        <div className='admin-container'>
            <h1>Minhas tarefas</h1>
            <form className='form' onSubmit={handleRegister}>
                <textarea 
                placeholder="Digite sua tarefa" 
                value={tarefaInput} 
                onChange={(e)=>setTarefaInput(e.target.value)} />

{/*EDITAR TAREFA:
        Aqui será criada uma renderização condicional para depois que 
        editar mudar o nome do botão de Registrar para Atualizar
{Object.keys(edit).length > 0 } isso é para saber se está vasio ou tem algo em   const [edit, setEdit] = useState([]);
o sinal "?" quer dizer que vai editar uma tarefa
*/}      
                {Object.keys(edit).length > 0 ? (
                    <button className='btn-register' style={{backgroundColor: '#1da770'}} type='submit'>Atualizar</button>
                ) : (
                    <button className='btn-register' type='submit'>Registrar</button>
                )}
                
            </form>

            {tarefas.map((item)=>(
                <article key={item.id} className='list'>
                    <p>{item.tarefa}</p>
                    <div>

                        <button onClick={ ()=> editTarefa(item)  }>Editar</button>

                        <button onClick={  ()=> delTarefa(item.id)  } 
                        className='btn-delete'>Excluir</button>
                    </div>
                </article>                
            ))}            

            <button className='btn-logout' onClick={handleLogout}>Sair</button>


        </div>
    )
}