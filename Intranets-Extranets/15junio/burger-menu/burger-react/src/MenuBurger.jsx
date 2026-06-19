import "./MenuBurger.css"
import icono from "./burgermenu.svg";
import { useState } from "react";

const data = ["personales", "academicos", "experiencia", "skills"];

export default function MenuBurger() {

    const [visible, setVisible] = useState(true);

    return (
        <>
            <div className="container-bm">
                <div>
                    <button onClick={() => setVisible(!visible)}> <img src={icono} width={100} /> </button>
                </div>

                {!visible &&
                    <ul>
                        {data.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                }
            </div>
        </>
    )
}

