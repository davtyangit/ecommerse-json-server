import { CloseIcon } from '../../../../assets/svgs/CloseIcon.jsx'
import { CustomInput } from '../../../input/CustomInput.jsx'
import { UploadImage } from '../../../../assets/svgs/UploadImage'
import { CustomButton } from '../../../button/CustomButton.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { GenderButton } from '../../../gender-buttons/GenderButton'
import { useState } from 'react'
import { Create_Products, Get_Products_byCategory } from '../../../../redux/productsSlice.jsx'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Loader } from '../../../loading/Loader.jsx'

export const ProductModal = ({ close }) => {
    const { categories, loading } = useSelector(state => state.categories)
    const dispatch = useDispatch()

    const [category, setCategory] = useState('');
    const [gender, setGender] = useState('');
    const [price, setPrice] = useState('');
    const [artikul, setArtikul] = useState('');

    const [imageUrl, setImageUrl] = useState('');
    const [myimage, setMyImage] = useState(null);

    const handleCategory = (e) => setCategory(e.target.value);
    const handleGender = (e) => setGender(e.target.value);
    const handlePrice = (e) => setPrice(e.target.value);
    const handleArtikul = (e) => setArtikul(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const uploadImage = (e) => setMyImage(URL.createObjectURL(e.target.files[0]));

    const onUploadImage = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ihkjlzgy');
        try {
            const res = await axios.post(
                'http://api.cloudinary.com/v1_1/dth7rq73s/image/upload',
                formData,
            );
            setImageUrl(res.data.url);
            toast.info('Image succesfully uploaded!!');
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

    const handleAdd = () => {
        if (category && gender && price && artikul && imageUrl) {
            const data = { category, gender, imageUrl, price, artikul };
            if (data) {
                dispatch(Create_Products(data));
                toast.success(`${category} added!`)
                close();
                setTimeout(() => {
                    dispatch(Get_Products_byCategory(category));
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
            <div className="modal product_modal">
                <div className="modal_header">
                    <span>Add product</span>
                    <span onClick={() => close()} className="close_icon">
                        <CloseIcon color="black" />
                    </span>
                </div>
                <div className='modal_body'>
                    <GenderButton htmlFor="Girl" title="Female" id="Girl" value="Girl" type="radio" name="gender" onChange={handleGender} />
                    <GenderButton htmlFor="Boy" title="Male" id="Boy" value="Boy" type="radio" name="gender" onChange={handleGender} />
                </div>
                <div className='modal_input'>
                    <select className='select' onChange={handleCategory} name="categories" id="categories-select">
                        <option value="">Select category</option>
                        {
                            loading ? <Loader /> : categories.map(({ category, id }) => {
                                return (
                                    <option key={id} value={category}>{category}</option>
                                )
                            })
                        }
                    </select>
                    <CustomInput placeholder="Name" onChange={handleArtikul} />
                    <CustomInput placeholder="Price" onChange={handlePrice} />
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

                {myimage && (<img src={myimage} style={{ width: "80%" }} />)}

                <div>
                    <CustomButton onClick={handleAdd} type="submit" width="100%" children="Add" />
                </div>
            </div>
        </form >
    )
}
