import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Redirect = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/graficos/barras');
        }, '500');

    }, []);

    return ( 
        <h1>Esta página não existe!</h1>
    );
}
 
export default Redirect;