import { PlusIcon } from '../../../../assets/svgs/PlusIcon'
import { CategoryModal } from '../modal/CategoryModal'
import "./AddCategory.css"

export const AddCategory = ({ showModal, open, close }) => {

    return (
        <div>
            <button className='plus_btn' onClick={open}>
                <PlusIcon width="20" height="20" />
            </button>

            {showModal && <CategoryModal close={close} />}
        </div>
    )
}
