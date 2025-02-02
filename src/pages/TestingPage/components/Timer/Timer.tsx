import { useEffect, useRef } from 'react'
import './Timer.css'
import { convertTime } from '@/utils';

//типизация пропсов
interface Props {
   stopTimer: boolean;
   timerLeft: number;
   setTimerLeft: (time: number) => void;
}

//компонент таймера
export default function Timer({ stopTimer, timerLeft, setTimerLeft }: Props) {
   //кастомный хук
   const timerId = useRef<ReturnType<typeof setTimeout>>()
   useEffect(() => {
      //если тест не завершён
      if (!stopTimer) {
         timerId.current = setTimeout(() => {
            setTimerLeft(timerLeft + 1)
         }, 1000)
      }
      return () => {
         //очищение таймера
         clearTimeout(timerId.current)
      }
   }, [timerLeft, stopTimer, setTimerLeft])

   return (
      <div className="timer">
         <p>
            Время выполнения: {convertTime(timerLeft)}
         </p>
      </div>
   )
}