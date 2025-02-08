import styles from "./ErrorContent.module.css"
interface Props {
  text?: string;
}
export default function ErrorContent({ text = 'Произошла ошибка. Попробуйте обновить страницу' }: Props) {
  return (
    <p className={styles.error}>{text}</p>
  );
}