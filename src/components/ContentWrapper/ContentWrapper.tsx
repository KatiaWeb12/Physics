import { ReactNode } from "react"
import styles from "./ContentWrapper.module.css"
interface Props {
  children: ReactNode;
}
export default function ContentWrapper({ children }: Props) {
  return (
    <div className={styles.content_wrapper}>
      {children}
    </div>
  )
}