import { FaArrowUp } from "react-icons/fa6"
import './ToTopButton.css'


 const ToTopButton = () =>{
    return (

        <button className="to-top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <FaArrowUp size={24}/>
        </button>
    )
}

export default ToTopButton;