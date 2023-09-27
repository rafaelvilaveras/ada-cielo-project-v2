import ItemContainerStyles from "./style";

const ItemContainer = ({child}) => {
    return ( 
        <>
          <ItemContainerStyles>
            <div className="container">
              <div className="wrapper">
                {child}
              </div>
            </div>
          </ItemContainerStyles>
        </>
     );
}
 
export default ItemContainer;