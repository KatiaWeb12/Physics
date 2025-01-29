import { useEffect, useRef, useState } from 'react'
import './Timer.css'

//типизация пропсов
interface Props {
   stopTimer: boolean;
   timerLeft: number;
   setTimerLeft: (time: number) => void;
}

//функция преобразования времени
function convertTime(time: number) {
   let minutes = Math.floor(time / 60)
   let seconds = Math.floor(time % 60)
   return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
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
   }, [timerLeft, stopTimer])

   return (
      <div className="timer">
         <p>
            Осталось: {convertTime(timerLeft)}
         </p>
      </div>
   )
}