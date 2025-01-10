import CardSkeleton from './CardSkeleton'

export default function CardSkeletonList() {
   return (
      <div className="card_list">
         {[1, 2, 3, 4].map((_, i) => <CardSkeleton key={i} />)}
      </div>
   )
}