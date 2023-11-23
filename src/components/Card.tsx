import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from "react"
import '../assets/css/card.css'

interface CardProps{
    icon: string | IconDefinition;
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
            <i className={props.icon}></i>
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
