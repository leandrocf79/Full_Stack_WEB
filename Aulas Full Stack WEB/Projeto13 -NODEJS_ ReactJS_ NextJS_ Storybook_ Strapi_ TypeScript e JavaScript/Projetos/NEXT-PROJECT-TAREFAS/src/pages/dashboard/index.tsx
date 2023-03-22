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
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';

//registrar no BD as tarefas
import { db } from '../../services/firebaseConnection';
import { addDoc, collection, query, orderBy, where, onSnapshot, doc, deleteDoc } from 'firebase/firestore';


//Link tarefa pública
import Link from 'next/link';

//registrar no BD as tarefas. HomeProps dizer o que tem dentro de {user} e o tipo
interface HomeProps{
    user:{
        email: string
    }
}


//listar itens para função de REALTIME. Por estar usando TypeScript pode criar um array com objetos
interface TasckProps{
    id: string;
    created: Date;
    public: boolean;
    tarefa: string;
    user: string;
}

//registrar no BD as tarefas. Vai dar erro no {user}, precisa fazer a tipagem do typesript 
export default function Dashboard( {user}: HomeProps ){
    
    //funcionalidades do projeto com banco de dados. Passar isso no textarea
    const [input, setInput] = useState('');
    const [publicTask, setPublicTask]=useState(false); //a caixa de seleção para tornar público inicia sempre como false

    //listar itens para função de REALTIME. Usar typescript, vai ficar melhor para criar um array com objetos
    //const [task, setTask] = useState([]);
    const [task, setTask] = useState<TasckProps[]>([]);


//listar itens para função de REALTIME
    useEffect(()=>{ 
        async function loadTarefas(){
            //Buscar no bd a coleção que quer acessar
            const tarefasRef = collection(db, "nexttask" )
            //Criar filtro para ordenar por ordem de criação e exibir SOMENTE conteúdo do user logado com where('user', '==', user?.email) 
            const q = query(
                tarefasRef,
                orderBy("created", "desc"),
                where('user', '==', user?.email)

            )
            //Agora pode buscar usando realtime passando a referência query para receber o retorno"CallBack" com snapshot para ter acesso a todos os dados do user
           
            onSnapshot(q, (snapshot)=>{ //http://localhost:3000/dashboard   Dar um F5

                //console.log(snapshot);// Vai reclamar que "where" precisa de index. Veja anotações na documentação própria deste projeto.
/*Na lista em inspecionar/console veja que agora tem acesso a todos os dados que podem ser usados no projeto */
                //alert("snapshot foi lido")

                //Agora que está tudo ok, precisa criar um local para armazenar usando typescript
                let lista = [] as TasckProps[];
                //Agora pode percorrrer todos os elementos que achou em snapshot com NOMES EXATAMENTE IGUAIS AO CRIADOS NO DB
                snapshot.forEach( (doc)=>{
                    lista.push( {    //Só vai conseguir passar aqui o que foi chamado na tipagem
                        id: doc.id,
                        tarefa: doc.data().tarefa,
                        created: doc.data().created,
                        user: doc.data().user,
                        public: doc.data().public
                     })
                })
                //console.log(lista)
                //alert('lista carregada no console')

                //Testado. Passar para useState
                setTask(lista);

                //Pronto. Agora pode char isso lá no article para exibir todos os itens na página


            })
        }//Lembrar sempre de CHAMAR A FUNÇÃO

        loadTarefas();

    },[user?.email]) //Por estar usando algo externo passar user?.email como DEPENDÊNCIA.

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

//Se estiver pública a postagem. Lembrando que id foi passado como string.
async function handleShare(id: string){
    //console.log("ID do user: ", id);//Clicar no botão do link na página de postagem http://localhost:3000/dashboard 
    //Para dar uma funcionalidade como COPIAR automáticamente o link passar função para async e clipboard para copiar:
    await navigator.clipboard.writeText(
        /* `http://localhost:3000/task/${id}`  // Para não ter que fazer assim e ter que mudar depois, pode usar uma funcionalidade do lado do cliente.
        Vá em    .env      e crie NEXT_PUBLIC_URL=http://localhost:3000    SEM BARRA no final
        */

        `${process.env.NEXT_PUBLIC_URL}/task/${id}` //Parar projeto!! Ctrl+C para carregar novamente .env      


    );  alert("URL do link copiado com sucesso.")
}


//Criar funcionalidade DELETAR tarefa. Importar doc e deleteDoc
    async function handleDeleteTask(id: string) {
        const docRef = doc(db, "nexttask",  id); //Referência. Agora é só deletar passando a referência:
        await deleteDoc(docRef);// vai deletar a tarefa que passsar com id

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

{/**listar itens para função de REALTIME. Lembrar de por uma key obrigatória*/}

                    {task.map((item)=>(

                    <article key={item.id}     className={styles.task}>

                       {/*Só exibir botão "PÚBLICO"  se estiver público o conteúdo*/} 
                       {item.public && (

                            <div className={styles.tagContainer}>
                                <label className={styles.tag}>PÚBLICO</label>
                                <button className={styles.shareButton} onClick={ ()=> handleShare(item.id)}>Copiar link: 
                                <FiShare2
                                    size={22}
                                    color="#3183ff"

                                />
                                 </button>
                            </div>

                       )}
                        

                        <div className={styles.taskContent}>

         {/*listar itens para função de REALTIME. Agora pode corrigir o parágrafo
           <p>Minha primeira tarefa</p>
         */}  
         {/* //Link tarefa pública. vai navegar o usuário*/}       
                        {item.public ? (
                            <Link  href={ `/task/${item.id}` }>
                              <p>{item.tarefa}</p>
                            </Link>
                        ):(                            
                            <p>{item.tarefa}</p>
                        ) }  
                        {/**Se não for pública, deixar somente o parágrafo sem link*/}


                            {/**Criar funcionalidade DELETAR tarefa. Para passar o id:   handleDeleteTask(item.id) */}
                            <button className={styles.trashButton} onClick={ ()=> handleDeleteTask(item.id)}>
                                <FaTrash size={22}
                                color='#ea3140'/>
                            </button>
                        </div>
                    </article>

                    ))}


                    
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