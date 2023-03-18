import Head from 'next/head'
import styles from '../../styles/home.module.css'

//Pode usar <img> se quiser, mas o Next tem um modelo que carrega melhor, tem mais performance. Image
import Image from 'next/image';
import homeimage from '../../public/assets/home-image.jpg';
// Pode priorizar o carregamento escrevendo apenas priority. Não precisa ser priority={true}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize de forma fácil</title>        
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image  className={styles.homeimage}
                  alt="Logo Tarefas"
                  src={homeimage}
                  priority={true}
          />
        </div>
        <h1 className={styles.title}>
          Organize seus estudos e outras tarefas
          <br/>do dia a dia.
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+12 posts</span>
          </section>

          <section className={styles.box}>
            <span>+5 comentários</span>
          </section>
        </div>

      </main>
      
    </div>
  )
}
