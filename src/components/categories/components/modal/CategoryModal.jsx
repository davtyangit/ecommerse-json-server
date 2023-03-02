import { CloseIcon } from '../../../../assets/svgs/CloseIcon.jsx'
import { CustomInput } from '../../../input/CustomInput.jsx'
import { UploadImage } from '../../../../assets/svgs/UploadImage'
import { CustomButton } from '../../../button/CustomButton.jsx'
import { GenderButton } from '../../../gender-buttons/GenderButton.jsx'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Create_Category, Get_Categories, Get_Categories_bygender } from '../../../../redux/categoriesSlice'
import "./CategoryModal.css"

export const CategoryModal = ({ close }) => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState('');
    const [gender, setGender] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [myimage, setMyImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleCategory = (e) => setCategory(e.target.value);
    const handleGender = (e) => setGender(e.target.value);

    const uploadImage = (e) => {
        setMyImage(URL.createObjectURL(e.target.files[0]));
    };

    const onUploadImage = async (file) => {
        const URL = 'http://api.cloudinary.com/v1_1/dth7rq73s/image/upload';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ihkjlzgy');
        try {
            const res = await axios.post(URL, formData);
            setImageUrl(res.data.url);
            toast.info('Image succesfully uploaded!');
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

    const handleAdd = () => {
        if (category && gender && imageUrl) {
            const data = { category, gender, imageUrl };
            if (data) {
                dispatch(Create_Category(data));
                toast.success(`${category} дабавлен!`)
                close();
                setTimeout(() => {
                    dispatch(Get_Categories_bygender(gender));
                }, 100);
            } else {
                toast.error('Что-то поршел не так');
            }
        } else {
            toast.error('Все поля обязательно');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='modal_wrapper'>
            <div className="modal">
                <div className="modal_header">
                    <span>Add category</span>
                    <span className="close_icon" onClick={close}>
                        <CloseIcon color="black" />
                    </span>
                </div>

                <div className='addcat_checkers'>
                    <GenderButton htmlFor="Woman" title="Female" id="Woman" value="Female" type="radio" name="gender" onChange={handleGender} />
                    <GenderButton htmlFor="Man" title="Male" id="Man" value="Male" type="radio" name="gender" onChange={handleGender} />
                </div>

                <div className='modal_input'>
                    <CustomInput placeholder="Category" onChange={handleCategory} />
                </div>

                {
                    !myimage &&
                    <div className="upload-files-container">
                        <div className="drag-file-area">
                            <span className="material-icons-outlined upload-icon">
                                <UploadImage />
                            </span>
                            <label className="label">
                                <span className="browse-files">
                                    <input
                                        type="file"
                                        onChange={e => {
                                            onUploadImage(e.target.files[0])
                                            uploadImage(e)
                                        }} className="default-file-input" />
                                    <span className="browse-files-text">Add photo</span>
                                </span>
                            </label>
                        </div>
                    </div>
                }

                {myimage && (<img src={myimage} className="uploaded_image" />)}

                <CustomButton onClick={handleAdd} type="submit" width="100%" children="Add" />
            </div>
        </form >
    )
}
