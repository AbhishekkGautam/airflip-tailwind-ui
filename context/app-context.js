'use client';

import { OPTIONS, PRICE_OPTIONS } from '@/enums/enums';
import { createContext, useContext, useEffect, useState } from 'react';

const initialState = {
  totalPrice: PRICE_OPTIONS.default,
  options: OPTIONS,
};

const AuthContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState(initialState);

  const { options } = appState;

  const calculatePrice = () => {
    const totalPrice = options.reduce((acc, item) => {
      const { sub_category } = item;
      const selectedSubCategory = sub_category.filter(
        subItem => subItem.selected
      );
      const price = selectedSubCategory.reduce((acc, subItem) => {
        const { price } = subItem;
        return acc + price;
      }, 0);
      return acc + price;
    }, 0);
    const _totaPrice = totalPrice + PRICE_OPTIONS.default;
    setAppState({ ...appState, totalPrice: _totaPrice });
  };

  useEffect(() => {
    calculatePrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const onChangeOptions = (category, selectedOption) => {
    const updatedOptions = appState.options?.map(item => {
      if (item.category === category) {
        const updatedSubCategory = item.sub_category?.map(subItem =>
          subItem.label === selectedOption.label
            ? { ...subItem, selected: true }
            : { ...subItem, selected: false }
        );
        return { ...item, sub_category: updatedSubCategory };
      }
      return item;
    });
    setAppState({ ...appState, options: updatedOptions });
  };

  return (
    <AuthContext.Provider
      value={{
        appState,
        onChangeOptions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAppContext = () => useContext(AuthContext);

export { AppProvider, useAppContext };
