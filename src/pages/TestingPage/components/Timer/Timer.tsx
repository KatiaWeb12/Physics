import { useEffect, useRef } from 'react'
import './Timer.css'
import { convertTime } from '@/utils';

//типизация пропсов
interface Props {
   stopTimer: boolean;
   timerLeft: number;
   setTimerLeft: (time: number) => void;
}

//Компонент таймера
export default function Timer({ stopTimer, timerLeft, setTimerLeft }: Props) {
   const timerId = useRef<ReturnType<typeof setTimeout>>()
   useEffect(() => {
      //Если тест не завершён
      if (!stopTimer) {
         //Увеличение времени на 1 секунду
         timerId.current = setTimeout(() => {
            setTimerLeft(timerLeft + 1)
         }, 1000)
      }
      return () => {
         //Очищение таймера
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