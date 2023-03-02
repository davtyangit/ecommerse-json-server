import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { CloseIcon } from "../../../../assets/svgs/CloseIcon"
import { Get_Products_byCategory, Remove_Product } from "../../../../redux/productsSlice"
import "./ProductItem.css"

export const ProductItem = ({ item }) => {
    const dispatch = useDispatch()

    const RemoveProduct = (id, category) => {
        dispatch(Remove_Product(id))
        dispatch(Get_Products_byCategory(category))
        toast.success("Successfully removed!")
    }

    return (
        <div key={item.id} className="product">
            <img src={item.imageUrl} />
            <div className='text_content'>
                <span>{item.artikul}</span>
                <span>{item.price}cent</span>
                <div className='remove_btn' onClick={() => RemoveProduct(item.id, item.category)}>
                    <CloseIcon color="white" />
                </div>
            </div>
        </div>
    )
}
