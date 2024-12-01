import { ReactNode } from "react"
import "./ContentWrapper.css";
interface Props {
  children: ReactNode;
}
export default function ContentWrapper({ children }: Props) {
  return (
    <div className="content_wrapper">
      {children}
    </div>
  )
}