import { useEffect } from "react"
import '../assets/css/card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CardProps{
    icon: IconProp | string;
    title: string;
    content: string;
  };

export default function Card (props: CardProps) {
    useEffect(() => {
        document.getElementById("cards")?.addEventListener("mousemove", (e) => {
          const cards = document.getElementsByClassName("card");
          for (const card of cards) {
            const rect = (card as HTMLElement).getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
    
            (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
            (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
          }
        });
      }, []);

    return (
    <div className="card">
        <div className="card-content">
        <div className="card-image">
            {typeof props.icon === 'string' ? (
                <img src={props.icon} className="Icon" />
            ) : (
                <FontAwesomeIcon icon={props.icon as IconProp} className="fw_icon" />
            )}
        </div>
        <div className="card-info-wrapper">
            <div className="card-info">
            <div className="card-info-title">
                <h3>{props.title}</h3>  
                <h4>{props.content}</h4>
            </div>    
            </div>
        </div>
        </div>
    </div>
  )
}
