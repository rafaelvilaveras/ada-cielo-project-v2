import { Outlet } from "react-router-dom";
import ItemContainerStyles from "./style";

const ItemContainer = () => {
    return ( 
        <>
          <ItemContainerStyles>
            <div className="container">
                <Outlet/>
            </div>
          </ItemContainerStyles>
        </>
     );
}
 
export default ItemContainer;