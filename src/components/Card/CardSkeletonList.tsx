import CardSkeleton from './CardSkeleton'

interface Props {
   formulaListLength: Number;
}

export default function CardSkeletonList({ formulaListLength }: Props) {
   let skeletonList: Number[] = Array(formulaListLength).fill(0)
   return (
      <div className="card_list">
         {skeletonList.map((_, i) => <CardSkeleton key={i} />)}
      </div>
   )
}