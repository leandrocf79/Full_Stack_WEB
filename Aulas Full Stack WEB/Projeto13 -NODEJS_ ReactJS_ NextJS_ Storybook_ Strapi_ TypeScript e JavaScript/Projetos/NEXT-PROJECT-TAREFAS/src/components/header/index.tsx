
import styles from './styles.module.css';

//SISTEMA DE LOGIN
import { useSession, signIn, signOut } from 'next-auth/react';

/* Para usar navegação importar Link */
import Link from 'next/link';

export function Header(){
    //SISTEMA DE LOGIN. Criar o Hook, este.
    const {data: session, status} = useSession();


    return(
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href='/'>
                        <h1 className={styles.logo}>
                            Tarefas<span>+</span>
                        </h1>
                    </Link>

                    {/* dashboard, deixá-la no modo privado. Logado true */}
                    {session?.user  && (  
                        <Link  href='/dashboard' 
                            className={styles.link}>
                            Painel
                        </Link>
                        )}
                </nav>

                {/*SISTEMA DE LOGIN */}
                { status === 'loading' ? (
                    <></>
                ): session ? (
                    <>
                        <div className={styles.loginName}>Olá {session?.user?.name}</div>
                        <button className={styles.loginButton} onClick={ ()=> signOut() }> {/* Se estiver logado */}
                            Sair                  
                        </button>
                        
                    </>
                ):(
                    <button className={styles.loginButton} onClick={ ()=> signIn('google') }> {/* Se NÃO estiver logado. Esta utilizando um PROVIDER que é do google precisa informar que vai usar */}
                        Minha conta                 
                    </button>
                )}

                

            </section>
        </header>
    )
}
/********* Esse cabeçalho pode ser importado para todas as páginas
através do pages/_app.tsx   
*/