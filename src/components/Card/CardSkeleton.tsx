import styles from "./Card.module.css"

//Скелетон карточки с формулой
export default function CardSkeleton() {
  return (
    <div className={styles.card_skeleton}>
      <div className={styles.image_skeleton} />
      <div className={styles.card_info_skeleton}>
        <div className={styles.topic_cont_skeleton} />
        <div className={styles.cont_skeleton} />
      </div>
      <div className={styles.learn_more}>
        <div className={styles.button_skeleton} />
      </div>
    </div>
  )
}