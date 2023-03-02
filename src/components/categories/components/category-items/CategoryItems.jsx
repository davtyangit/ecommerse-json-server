import { Get_Products_byCategory } from "../../../../redux/productsSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { ModalChecker } from "../checker-old-modal/ModalChecker"
import AduldIcon from '../../../../assets/images/18plus.png'
import { Loader } from '../../../loading/Loader'
import "./CategoryItems.css"

export const CategoryItems = ({ categories, loading }) => {
    const [privateCategory, setPrivateCategory] = useState(false)
    const [categoryia, setCategoria] = useState()
    const dispatch = useDispatch()

    const GetProducts_ByCategory = (category) => {
        if (category === "Alchohol" || category === "Cigarettes") {
            setPrivateCategory(true)
            setCategoria(category)
        } else {
            setPrivateCategory(false)
            setCategoria(category)
            dispatch(Get_Products_byCategory(categoryia))
        }
    }

    return (
        <div className='categories_panel'>

            {privateCategory && <ModalChecker setPrivateCategory={setPrivateCategory} GetProducts_ByCategory={GetProducts_ByCategory} categoryia={categoryia} privateCategory={privateCategory} />}

            {
                loading ? <Loader /> : categories?.map(({ id, category, imageUrl, gender }) => {
                    return (
                        <div className="card dropup" key={id} onClick={() => {
                            GetProducts_ByCategory(category)
                        }}>

                            <ul className="payment-methods">
                                <li className="payment-method paypal">
                                    <img src={imageUrl} className="card_img" />
                                    <div className="categories_title">
                                        <p>{category}</p>
                                        {category === "Alchohol" || category === "Cigarettes" ? <img className="adult_sign" src={AduldIcon} /> : ''}
                                    </div>
                                    <input className="payment_methods" name="payment_methods" type="radio" id={id} />
                                    <label htmlFor={id}></label>
                                </li>
                            </ul>
                        </div >
                    )
                })
            }
        </div>
    )
}
