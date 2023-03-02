import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Get_Categories } from '../../redux/categoriesSlice';

export const useCategories = () => {
  const [gender, setGender] = useState('');
  const { categories, loading } = useSelector((state) => state.categories);

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const open = () => setShowModal(true);
  const close = () => setShowModal(false);

  useEffect(() => {
    dispatch(Get_Categories());
  }, []);

  return {
    gender,
    setGender,
    categories,
    loading,
    showModal,
    open,
    close,
  };
};
