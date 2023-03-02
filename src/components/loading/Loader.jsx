import Loading from '../../assets/images/loading.png'
import "./Loader.css"

export const Loader = ({ width, height }) => {
    return (
        <img className='loader_img' style={{ width: width, height: height }} width="80px" src={Loading} />
    )
}
