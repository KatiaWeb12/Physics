import styles from "./Statistics.module.css"

interface Props {
  list: string[];
}

export default function Statistics({ list }: Props) {
  return (
    <div className={styles.statistics}>
      <h5>Формулы, которые следует повторить</h5>
      <ul>
        {list.map(el => <li key={el}>{el}</li>)}
      </ul>
    </div>
  )
}