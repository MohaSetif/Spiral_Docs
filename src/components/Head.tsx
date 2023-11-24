import { useEffect } from 'react'
import '../assets/css/head.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons';

function Head() {
  useEffect(() => {
    const handleCopy = () => {
      const input = document.querySelector(".copy-text input.text") as HTMLInputElement;
      if (input) {
        navigator.clipboard.writeText(input.value)
          .then(() => {
            const copyText = document.querySelector(".copy-text") as HTMLElement;
            copyText.classList.add("active");
            setTimeout(() => {
              copyText.classList.remove("active");
            }, 2500);
          })
          .catch(err => {
            console.error('Failed to copy: ', err);
          });
      }
    };

    const copyButton = document.querySelector(".copy-text button");
    if (copyButton) {
      copyButton.addEventListener("click", handleCopy);
    }

    return () => {
      if (copyButton) {
        copyButton.removeEventListener("click", handleCopy);
      }
    };
  }, []);

  return (
    <div className="Body_page">
      <div className="circle"></div>
      <div className="blur"></div>
      <div className="Head">
        <h1>The web stack that empowers your future projects</h1>
        <h4>Never miss the chance to start building interactive web apps without effort.</h4>
        <br />
        <div className="container">
          <div className="copy-text">
            <input type="text" className="text" value="npx @mohasetif/create-spiral-app" />
            <button><FontAwesomeIcon icon={faCopy} /></button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Head