import { useEffect, useRef } from 'react'
import './Timer.css'

//типизация пропсов
interface Props {
   stopTimer: boolean;
   timerLeft: number;
   setTimerLeft: (time: number) => void;
}

//компонент таймера
export default function Timer({ stopTimer, timerLeft, setTimerLeft}: Props) {
   //кастомный хук
   const timerId = useRef<ReturnType<typeof setTimeout>>()

   //функция преобразования времени
   function convertTime(time: number) {
      let minutes = Math.floor(time / 60)
      let seconds = Math.floor(time % 60)
      return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
   }

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