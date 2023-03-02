import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Get_Products_forFemales } from '../../redux/productsSlice';

export const useProducts = () => {
  const [isShow, setIsShow] = useState(false);
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const open = () => setIsShow(true);
  const close = () => setIsShow(false);

  useEffect(() => {
    dispatch(Get_Products_forFemales());
  }, []);

  return {
    isShow,
    products,
    loading,
    open,
    close,
  };
};
