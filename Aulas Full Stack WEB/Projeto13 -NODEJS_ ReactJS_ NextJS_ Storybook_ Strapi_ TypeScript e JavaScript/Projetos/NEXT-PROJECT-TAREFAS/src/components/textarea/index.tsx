import styles from './styles.module.css';
import { HTMLProps } from 'react';

// ...rest - pegar todas as propriedades e dizer que só pode receber HTMLProps<> do tipo <HTMLTextAreaElement>
export function Textarea( {...rest}: HTMLProps<HTMLTextAreaElement> ){
    return <textarea className={styles.textarea} {...rest}></textarea>;
} // Repassando propriedades em   {...rest}></textarea>



