import "./CustomButton.css"

export const CustomButton = ({ width, children, type, onClick }) => {
    return (
        <button className="custom_btn" type={type} onClick={onClick} style={{ width: width }}>
            {children}
        </button>
    )
}
