import React from 'react'
import { useDispatch } from 'react-redux'
import { Get_Products_byCategory } from '../../../../redux/productsSlice'
import { CustomButton } from '../../../button/CustomButton'

export const ModalChecker = ({ setPrivateCategory, privateCategory, categoryia }) => {
    const dispatch = useDispatch()

    const Continue = (category) => {
        if (category) {
            setPrivateCategory(true)
            if (privateCategory) {
                dispatch(Get_Products_byCategory(category))
                setPrivateCategory(false)
            }
        } else {
            setPrivateCategory(false)
            dispatch(Get_Products_byCategory(category))
        }
    }

    return (
        <div className='modal_wrapper'>
            <div className="modal">
                <div className="modal_header">
                    <b>Are you an adult?
                    </b>
                </div>

                <div style={{ display: 'flex' }}>
                    <CustomButton onClick={() => Continue(categoryia)} width="100%" children="Yes" />
                    <CustomButton onClick={() => setPrivateCategory(false)} width="100%" children="No" />
                </div>
            </div>
        </div >
    )
}
