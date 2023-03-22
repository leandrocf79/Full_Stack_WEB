
import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from './styles.module.css';

//Pull dos detalhes da tarefa no servidor
import { db } from "@/services/firebaseConnection";
import { doc, collection, query, where, getDoc, addDoc, getDocs, deleteDoc } from 'firebase/firestore'; // getDocs com 's'. No plural para pegar TODOS os documentos.

//CRIAR A PARTE DE COMENTÁRIOS.
import { Textarea } from "@/components/textarea";

//Permitir na postagem somente o nome do usuário com cadastro.
//Limitar comentários
import { ChangeEvent, FormEvent, useState } from 'react';
import { useSession } from "next-auth/react";
import { FaTrash } from "react-icons/fa";


//Enviar objetos para a página task. Tipagem para "item"
interface TaskProps {
    item: {//Dentro dele tem as propriedades que foram exibidas no terminal em console.log(task);
        tarefa: string,
        public: boolean,
        created: string,
        user: string,
        taskId: string
    } //Para saber o que cada um é (bool, string) basta olhar no terminal com console.log(task); habilitado

    //exibir esses comentários abaixo da parte de edição. Passar como array por ser uma lista. Precisa criar uma const[coments] em Task
    allComments: CommentProps[]

}



//exibir esses comentários abaixo da parte de edição. Pasar o que vai ter nela. Veja como aparece no BD uma mensagem ja criada
interface CommentProps {
    id: string,
    comment: string,
    taskId: string,
    user: string,
    name: string,
}





//Enviar objetos para a página task. Precisa acrescentar item na função. O typescript quer saber o que tem nele, criar uma tipagem para ele
//export default function Task(  {item}  ){
//Passada a tipagem, agora item vai respeitar ela acrescentando TaskProps
//exibir comentários abaixo da parte de edição passando allComments. Vai reclamar any, tipar ele com interface TaskProps{
export default function Task({ item, allComments }: TaskProps) {


    //passar o texto para a variável input para poder colocar o nome do user nas mensagens
    const [input, setInput] = useState('');

    //Limitar comentários
    const [comment, setComment] = useState('');

    const handleCommentUser = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
        setInput(event.target.value);
    };
    const count = comment.length;//Até aqui para limitar comentários e adicionar em Textarea: 
    //maxLength={200} 
    //onChange={handleCommentChange}

    //Permitir na postagem somente o nome do usuário com cadastro. Usar disable={true} no botão para permitir somente logados
    const { data: session } = useSession();


    //exibir esses comentários abaixo da parte de edição.
    //const [comments, setComments] = useState(allComments || []);// Vai iniciar com todos os comentários ou vazio. e Pode tipar ela 
    const [comments, setComments] = useState<CommentProps[]>(allComments || []); //Tipando ela fica blindada para não acontecer outra coisa que não seja o array dos objetos
    //Tudo pronto. Agora é só utilizar abaixo de <section




    //passar o texto para a variável input para poder colocar o nome do user nas mensagens
    async function handleComent(event: FormEvent) {
        event.preventDefault(); //Para não atualizar a página
        //alert('teste: function handleComent()')

        if (input === "") return; //Não permitir comentários vazios
        if (!session?.user?.email || !session?.user?.name) return; //Não permitir comentários sem nome ou email

        try {
            const docRef = await addDoc(collection(db, "comments"), { // Vai criar uma nova coleção para salvar comentários no BD com nome de ''comments'' 
                comment: input,
                created: new Date(),
                user: session?.user?.email,
                name: session?.user?.name,
                taskId: item?.taskId,
            }); //Acima é o cadastro no BD

            // Depois de registrar atualizar a lista automaticamente. O comment foi digitado no input
            const data = {
                id: docRef.id,
                comment: input,
                user: session?.user?.email,
                name: session?.user?.name,
                taskId: item?.taskId
            }//Manter esse comentário e adicionar a mais com data. Passar tudo para uma useState de comentários
            setComments((oldItens) => [...oldItens, data]);


            setInput('');  //Apagar o input após enviar
            setComment('')// Zerar o contador de caracteres


        } catch (err) {
            console.log(err);
        }

    }


    //deletar os comentários. Importar deleteDoc. "comments" é a collection criada no BD
    async function handleDeleteComments(id: string) {

        try {

            const docRef = doc(db, "comments", id); //Essa é a referência a ser deletada. Deletar:
            await deleteDoc(docRef);

            // alert("Comentário apagado");

            //Comentários foi apagado agora precisa informar para useState que foi apagado. filter() Vai percorrer todos os itens dos comentarios
            const deleteComment = comments.filter((item) => item.id !== id);//Deixar apenas os que NÃO clicou deletar

            //console.log(deleteComment);//Conferido. Agora passar para useState
            setComments(deleteComment);


        } catch (err) {
            console.log(err);
        }
    }//Essa função precisa ser chamada no botão deletar como onClick={ ()=> handleDeleteComments( item.id )}



    return (
        <div className={styles.container}>
            <Head>
                <title>Detalhes da tarefa</title>
            </Head>

            <main className={styles.main}>
                <h1>Tarefa</h1>

                {/* //Enviar objetos para a página task. */}
                <article className={styles.task}>
                    <p>
                        {item.tarefa}
                    </p>
                </article>

                {/* CRIAR A PARTE DE COMENTÁRIOS. Vai ser interessante importar Textarea*/}
                <section className={styles.commentsContainer}>
                    <h2>Deixar comentário</h2>
                    <form onSubmit={handleComent}>
                        <Textarea
                            value={input}
                            placeholder="Digite seu comentário..."
                            maxLength={200}
                            onChange={handleCommentUser}
                        />

                        <span className={count >= 170 ? styles.warning : ""}>
                            {count} / 200 caracteres
                        </span>

                        <button className={styles.button}
                            disabled={!session?.user}
                        >{session?.user ? "Enviar comentário" : "Faça login para enviar comentário"}
                        </button>
                    </form>
                </section>


                {/* //exibir esses comentários abaixo da parte de edição. LEMBRAR DE PASSAR A PROPRIEDADE KEY*/}
                <section className={styles.commentsContainer}>
                    <h2>Todos os comentários</h2>

                    {comments.length === 0 && (<span>Nenhun comentário foi encontrado...</span>)}

                    {comments.map((item) => (
                        <article key={item.id} className={styles.comment}>
                            <div className={styles.headComment}>
                                <label className={styles.commentsLabel}>{item.name}</label>

                                {/* Deixar o botão excluir somente do usuário logado, 
                                    sem ter o botão lixeira aparecendo de outro usuário                                
                                Se o email do comentário for igual ao do que está logado exibir lixeira de excluir */}
                                {item.user === session?.user?.email && (

                                    <button className={styles.buttonTrash} onClick={() => handleDeleteComments(item.id)}>
                                        <FaTrash size={18} />
                                    </button>
                                )}


                            </div>
                            <p>{item.comment}</p>
                        </article>
                    ))}

                </section>

            </main>
        </div>
    )
}

//Aqui não precisa usar o useEffect, a informação pode ser trazida do servidor (server side)
// Os dois pontos é para usar a tipagem do typescript
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    // params? com interrogação  caso o usuário tente acessar digitando algo no link
    const idTask = params?.id as string;
    //console.log("Id recebido no [id].tsx: ",id);//Veja no TERMINAL ao atualizar uma página task

    //Pull dos detalhes da tarefa no servidor
    const docRef = doc(db, 'nexttask', idTask);
    //Buscar informação do BD
    const snapshot = await getDoc(docRef);


    //exibir esses comentários abaixo da parte de edição. taskId foi o nome dado no BD. --> onde taskID for igual ao id da tarefa que é idTask 
    const q = query(collection(db, 'comments'), where('taskId', '==', idTask));
    const snapshotComments = await getDocs(q); // getDocs com 's'. No plural para pegar TODOS os documentos.
    //o snapshotComments vai recever tudo. Agora montar o array como será exibido
    //let allComments = []; //Dessa forma vai pedir uma tipagem para não ficar any, ela não sabe o que ela é ainda. Fazer a interface acima de Task()
    let allComments: CommentProps[] = []; //Se passar o mouse sobre ele, vai mostrar como array
    //Aqui terá o retorno. Usar forEach para percorrer todos eles
    snapshotComments.forEach((doc) => {
        allComments.push({
            id: doc.id,
            comment: doc.data().comment,
            taskId: doc.data().taskId,
            user: doc.data().user,
            name: doc.data().name
        })
    })
    // VEJA NO TERMINAL
    // console.log(allComments); //Para saber se está passando todos os comentários. Passar allComments para o componente return{ props  e também para Task()

    //Fazer a verificação
    if (snapshot.data() === undefined && !snapshot.data()?.public) { //Se ele não encontrar tarefa. Caso tente digitar algo que não existe direcionar para home, por isso usar o "permanent: false"
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    //IMPORTANTÍSSIMO
    //Outros usuários acessar apenas tarefas PÚBLICAS. "public" foi o nome dado no BD.            
    if (!snapshot.data()?.public) {//Se NÃO for pública:
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    // console.log(snapshot.data()); //Veja no TERMINAL ao atualizar uma página task

    /*Obviamente que poderia ter sido feito assim:
    if( snapshot.data() === undefined && !snapshot.data()?.public )  
    Foram separados apenas para entendimento*/

    //A data está vindo como Timestamp, exemplo, 20032023. Converter created com data formatada, 20/03/2023.
    const miliseconds = snapshot.data()?.created?.seconds * 1000;
    const task = {
        tarefa: snapshot.data()?.tarefa,
        public: snapshot.data()?.public,
        created: new Date(miliseconds).toLocaleDateString(),
        user: snapshot.data()?.user,
        taskId: idTask
    }
    console.log(task);



    return {
        props: { //Enviar objetos para a página task, //exibir comentários abaixo da parte de edição.
            item: task,
            allComments: allComments
        }
    }
}