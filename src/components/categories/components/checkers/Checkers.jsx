import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { Get_Categories_bygender } from "../../../../redux/categoriesSlice"
import { GenderButton } from "../../../gender-buttons/GenderButton"
import "./Checkers.css"

export const Checkers = ({ gender, setGender }) => {
    const dispatch = useDispatch()

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const findCategories = (gender) => {
        dispatch(Get_Categories_bygender(gender))
    }

    return (
        <div className="checkers">
            <div className="radios">
                <div className='choose_gender'>
                    <GenderButton
                        gender={gender}
                        onClick={() => {
                            findCategories("Female")
                        }}
                        onChange={handleGender}
                        htmlFor="Female"
                        title="Female"
                        id="Female"
                        value="Female"
                        type="radio"
                        name="gender"
                    />
                    <GenderButton
                        gender={gender}
                        onClick={() => {
                            findCategories("Male")
                        }}
                        onChange={handleGender}
                        htmlFor="Male"
                        title="Male"
                        id="Male"
                        value="Male"
                        type="radio"
                        name="gender"
                    />
                </div>
            </div>
        </div>
    )
}
