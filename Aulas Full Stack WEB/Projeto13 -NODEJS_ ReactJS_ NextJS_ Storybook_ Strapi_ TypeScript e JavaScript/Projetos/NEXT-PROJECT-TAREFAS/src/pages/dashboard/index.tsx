/* Lembrando que sempre que for PÁGINA tem que que usar DEFAULT */

import styles from './styles.module.css';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

//criar a parte de listas
import { FiShare2 } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';

//visualizar as alterações no painel
import { Textarea } from '@/components/textarea';

//funcionalidades do projeto com banco de dados
import { ChangeEvent, FormEvent, useState } from 'react';

//registrar no BD as tarefas
import { db } from '../../services/firebaseConnection';
import { addDoc, collection } from 'firebase/firestore';


//registrar no BD as tarefas. HomeProps dizer o que tem dentro de {user} e o tipo
interface HomeProps{
    user:{
        email: string
    }
}


//registrar no BD as tarefas. Vai dar erro no {user}, precisa fazer a tipagem do typesript 
export default function Dashboard( {user}: HomeProps ){
    
    //funcionalidades do projeto com banco de dados. Passar isso no textarea
    const [input, setInput] = useState('');
    const [publicTask, setPublicTask]=useState(false); //a caixa de seleção para tornar público inicia sempre como false


//funcionalidades do projeto com banco de dados. Passar a tipagem
    function handleChangePublic(event: ChangeEvent<HTMLInputElement>){
        //console.log(event.target.checked)

        //Se clicar na caixa passar para true
        setPublicTask(event.target.checked)
    }


//Ajustar db no projeto. Tem que tipar o evento importando FormEvent
//registrar no BD as tarefas. Passar para assincrona - async
   async function handleRegisterTask(event: FormEvent){
    event.preventDefault();      // Para não atualizar a página. Em typeScript fica dessa forma.

    //Se o input for vazio, não digitou nada. Não deixar enviar vazio para DB.
    if(input === '') return;
    //alert('teste')

    //registrar no BD as tarefas
    //addDoc para criar um id aleatório e passar o nome da collection que será criada no db
    try{
        await addDoc(collection(db, "nexttask"),{
            tarefa: input,
            created: new Date(),
            user: user?.email,
            public: publicTask
        });
        setInput(''); //Para voltar vazio
        setPublicTask(false); //Voltar para false para próxima tarefa
        alert('Tarefa salva no BD')
    }catch(err){
        console.log('Erro:', err);
        alert('Erro em registrar as tarefas no BD .')

    }

    /*
    tarefa: input,          -Recebe o que digitar no input
    created: new Date(),    -Data atual do registro
    user: user?.email,      -Se usuário logado
    public: publicTask      -Se a tarefa é publica ou não
    
    *** Veja lá no final do cod o retun
    */

   }



    return(
        <div className={styles.container}>
            <Head>
                <title>Painel de tarefas</title>
            </Head>  

            {/* visualizar as alterações no painel */}
            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qual sua tarefa?</h1>

                        {/**Ajustar db no projeto usando onSubmit{} nos formularios */}
                        <form onSubmit={handleRegisterTask}> {/*Criado o components/textarea para aproveitar esse formulários e trocar apenas o conteúdo textarea dele  */}
                            
                    {/*//funcionalidades do projeto com banco de dados */}
                            <Textarea
                                placeholder='Digite sua tarefa...'  
                                value={input}  
                                onChange={ (event: ChangeEvent<HTMLTextAreaElement>) => setInput(event.target.value)}                        
                            />  {/* Essa parte:
                            onChange={ (event) => setInput(event.target.value)}  
                            vai dar erro no value. Não vai encontrar. Para corrigir isso deve informar 
                             que ele é do textarea tipando o "event" com impotação de 'ChangeEvent'
                             e dizer a qual elemento pertence, 'HTMLTextAreaElement'.
                             */}


                    {/*//funcionalidades do projeto com banco de dados */}
                            <div className={styles.checkboxArea}> 
                                <input type="checkbox"
                                    className={styles.checkbox} 
                                    checked={publicTask}
                                    onChange={handleChangePublic}
                                />{/*   Iniciar a caixa como true, MAS se fizer assim:
                                checked={true} vai ficar marcada de forma permanente. 
                                Corrigir com useState
                                */}{/*
                                        onChange={} foi iniciada diferente para aprendizado.
                                        Utilizada uma função externa.
                                */}


                                <label>Deixar tarefa publica?</label>
                            </div>
                            <button type='submit' className={styles.button}>
                                Registrar
                            </button>
                        </form>
                    </div>
                </section>  

                {/*criar a parte de listas */}
                <section className={styles.taskContainer}>
                    <h1>Minhas tarefas</h1>

                    <article className={styles.task}>
                        <div className={styles.tagContainer}>
                            <label className={styles.tag}>PÚBLICO</label>
                            <button className={styles.shareButton}>
                                <FiShare2
                                    size={22}
                                    color="#3183ff"

                                />
                            </button>
                        </div>

                        <div className={styles.taskContent}>
                            <p>Minha primeira tarefa</p>
                            <button className={styles.trashButton}>
                                <FaTrash size={22}
                                color='#ea3140'/>
                            </button>
                        </div>
                    </article>
                </section>

            </main>  

        </div>
    )
}

//proteger o link /dashboard no navegador. Server Side é sempre executado no lado do SERVIDOR.

//Get server side props para fazer a verificação se tem usuário logado
export const getServerSideProps: GetServerSideProps =async ( {req} ) => {//Escreva ""req"" de requisição. Importante ser apenas essas 3 letras
    //console.log("Buscando pelo server side"); //Veja no   TERMINAL
    //importar getSession para não ter que usar useEffect
    const session = await getSession( {req} );
    //console.log(session); //Veja no   TERMINAL
    if( !session?.user ){
        //Se não tem user, vá para home
        return{
            redirect: {
                destination: '/', //Home
                permanent: false
            },
        };

    }

    //registrar no BD as tarefas. Precisa retornar uma propriedade para o componente props
    //email: session?.user?.email agora a função Dashboard() pode receber essa propriedade "user"
    return{
        props:{
            user:{
                email: session?.user?.email
            }
        },
    }
}