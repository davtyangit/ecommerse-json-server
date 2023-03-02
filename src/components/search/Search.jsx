import React, { useEffect, useState } from 'react'
import { SearchIcon } from '../../assets/svgs/SearchIcon'
import { useDispatch } from 'react-redux'
import { Get_Products_forFemales, Search_Product } from '../../redux/productsSlice'
import "./Search.css"
import { useSearch } from './useSearch'

export const Search = () => {
    const { SearchProduct, setQuery, handleSubmit, query } = useSearch()

    return (
        <form onSubmit={handleSubmit} className='search_panel'>
            <input
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search'
                className='search-panel__input'
                type="text" />
            {
                query && <button onClick={() => SearchProduct(query)} className='search-panel__button'>
                    <SearchIcon />
                </button>
            }

        </form>
    )
}
