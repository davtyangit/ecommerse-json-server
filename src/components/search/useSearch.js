import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Get_Products_forFemales, Search_Product } from '../../redux/productsSlice';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const SearchProduct = (query) => {
    dispatch(Search_Product(query));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (query === '') {
      dispatch(Get_Products_forFemales());
    }
  }, [query]);

  return {
    SearchProduct,
    setQuery,
    handleSubmit,
    query,
  };
};
