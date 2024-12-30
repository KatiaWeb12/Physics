import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { Formula } from '@/types'
import RepeatingCard from '../RepeatingCard/RepeatingCard';

interface Props {
   formula: Formula;
}

export default function RepeatingSlide({ formula }: Props) {
   const [isFlipped, setIsFlipped] = useState(false)
   function onFlippHendle() {
      setIsFlipped(!isFlipped)
   }
   return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
         <RepeatingCard formula={formula} onFlippHendle={onFlippHendle} slideType='question' />
         <RepeatingCard formula={formula} onFlippHendle={onFlippHendle} slideType='answer' />
      </ReactCardFlip>
   )
}