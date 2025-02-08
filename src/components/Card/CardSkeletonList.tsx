import CardSkeleton from './CardSkeleton'
import styles from "../CardList/CardList.module.css"

export default function CardSkeletonList() {
   return (
      <div className={styles.card_list}>
         {[1, 2, 3, 4].map((_, i) => <CardSkeleton key={i} />)}
      </div>
   )
}