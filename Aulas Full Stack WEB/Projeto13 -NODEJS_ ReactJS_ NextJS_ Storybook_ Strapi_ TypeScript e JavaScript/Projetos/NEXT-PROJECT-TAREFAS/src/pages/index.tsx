import Head from 'next/head'
import styles from '../../styles/home.module.css'

//Pode usar <img> se quiser, mas o Next tem um modelo que carrega melhor, tem mais performance. Image
import Image from 'next/image';
import homeimage from '../../public/assets/home-image.jpg';
import { GetStaticProps } from 'next';
// Pode priorizar o carregamento escrevendo apenas priority. Não precisa ser priority={true}

//atualizar os botões de postagens  e  comentários
import { collection, getDocs } from 'firebase/firestore'; // getDocs com 's'. No plural para pegar TODOS os documentos.
import { db } from '@/services/firebaseConnection';

//atualizar os botões de postagens  e  comentários
interface HomeProps {//Vai receber as propriedades criadas em getStaticProps
  posts: number;
  comments: number;
}

export default function Home({ posts, comments }: HomeProps) { // tipado  { posts, comments }: HomeProps agora pode distribuir 
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize de forma fácil</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image className={styles.homeimage}
            alt="Logo Tarefas"
            src={homeimage}
            priority={true}
          />
        </div>
        <h1 className={styles.title}>
          Organize seus estudos e outras tarefas
          <br />do dia a dia.
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+{posts} posts</span> {/* atualizar os botões de postagens  e  comentários */}
          </section>

          <section className={styles.box}>
            <span>+{comments} comentários</span> {/* atualizar os botões de postagens  e  comentários */}
          </section>
        </div>

      </main>

    </div>
  )
}



//atualizar os botões de postagens  e  comentários
export const getStaticProps: GetStaticProps = async () => {

  //Buscar do BD a contagem. Importar collection e getDocs. Importar db
  const commentRef = collection(db, 'comments');   //'comments' nome dado para collection no BD
  //Fazer o mesmo com as tarefas
  const postRef = collection(db, 'nexttask');

  const commentSnapshot = await getDocs(commentRef);//Aqui terá o resultado do documento
  const postSnapshot = await getDocs(postRef);

  return {
    props: {   //    commentSnapshot.size || 0     zero caso não tenha nada
      posts: postSnapshot.size || 0,
      comments: commentSnapshot.size || 0


    },

    //REVALIDATE para revalidar o número de postagens
    revalidate: 60,  //Revalidada a cada 60 segundos


  }//Receber isso para o componente export default function Home()
}

