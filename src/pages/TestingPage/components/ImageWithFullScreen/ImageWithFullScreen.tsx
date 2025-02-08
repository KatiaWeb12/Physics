import { useState } from 'react';
import styles from './ImageWithFullScreen.module.css'

// типизация пропсов
interface Props {
  src: string;
}
// Картинка задания
export default function ImageWithFullScreen({ src }: Props) {
  //Открыта ли картнка на поный экран
  const [isFullScreen, setIsFullScreen] = useState(false)

  //Открытие картинки на полный экран
  function openFullScreen() {
    setIsFullScreen(true)
  }
  //Закрытие картинки
  function closeFullScreen(event) {
    if (!(event.target.closest === 'ImageWithFullScreen_image_modal__iFqO0')) {
      setIsFullScreen(false)
      console.log()
    }

  }
  return (
    <div>
      <img onClick={openFullScreen} className={styles.task_image} src={src} alt='task_img' />
      {isFullScreen && (
        <div className={styles.image_modal} onClick={closeFullScreen}>
          <div className={styles.modal_cont}>
            <img src={src} alt='task_img' className={styles.full_screen_image} />
          </div>
        </div>
      )}
    </div>
  )
}