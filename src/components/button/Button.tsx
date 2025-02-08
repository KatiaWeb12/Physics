import styles from './Button.module.css'
interface Props{
  text: string;
}
export default function Button({text}:Props){
    return(
      <button className={styles.button}>{text}</button>
    )
}