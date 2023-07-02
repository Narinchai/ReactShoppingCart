import { MyCartContext } from "../management/context"

const HeaderClass=()=>{
    const {amount} = MyCartContext()
    return(

        <button className="button">
           <span>ตะกร้าสินค้า</span> 
           <span className="badge"> {amount}</span>
           
           </button>
    )
}
export default HeaderClass