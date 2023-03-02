import { Checkers } from "./components/checkers/Checkers"
import { CategoryItems } from "./components/category-items/CategoryItems"
import { AddCategory } from "./components/add-category/AddCategory"
import { useCategories } from "./useCategories"
import "./Categories.css"

export const Categories = () => {
    const { gender, setGender, categories, loading, showModal, open, close } = useCategories()

    return (
        <div className='categories'>
            <Checkers gender={gender} setGender={setGender} />
            <CategoryItems loading={loading} categories={categories} />
            <AddCategory showModal={showModal} open={open} close={close} />
        </div>
    )
}
