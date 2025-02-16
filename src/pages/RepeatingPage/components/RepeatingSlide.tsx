import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { Formula } from '@/types'
import RepeatingCard from './RepeatingCard/RepeatingCard';

interface Props {
   formula: Formula;
   setFormulasForReating: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function RepeatingSlide({ formula, setFormulasForReating }: Props) {
   const [isFlipped, setIsFlipped] = useState(false)
   function onFlippHendle() {
      setIsFlipped(!isFlipped)
   }
   return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
         <RepeatingCard formula={formula} onFlippHendle={onFlippHendle} slideType='question' setFormulasForReating={setFormulasForReating}/>
         <RepeatingCard formula={formula} onFlippHendle={onFlippHendle} slideType='answer' />
      </ReactCardFlip>
   )
}