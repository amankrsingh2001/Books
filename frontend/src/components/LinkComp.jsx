import { Link } from "react-router-dom";




export default function LinkComp({title, link}){
        return  <>
                        <Link to={link}>
                        <p className="text-md hover:underline duration-200">{title}</p>
                        </Link>
        </>
}