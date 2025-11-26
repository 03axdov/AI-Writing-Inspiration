import { useEffect, useState } from "react";
import "../css/InspirationElement.css"

function InspirationElement() {

    const [isPlayingSound, setIsPlayingSound] = useState(false)

    return <div className="inspiration-element">
        <button className="button sound-button">
            
            {!isPlayingSound && <>
                <i class="fa-solid fa-play"></i>
                <p className="sound-button-text">Play</p>
            </>}
        </button>
        <div className="inspiration-header"></div>
        <div className="inspiration-header"></div>
        <div className="inspiration-header"></div>
    </div>;
}

export default InspirationElement;
