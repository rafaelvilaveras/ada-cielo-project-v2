
const ItemContainer = ({child}) => {
    return ( 
        <>
          <div className="container">
            <div className="wrapper">
              {child}
            </div>
          </div>
        </>
     );
}
 
export default ItemContainer;