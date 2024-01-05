'use client';
import { useAppContext } from '@/context/app-context';

const OptionsSelector = () => {
  // we can refactor this component further more based on data coming from an API using MAP array method using DRY.

  const {
    onChangeOptions,
    appState: { options },
  } = useAppContext();

  return (
    <div className="flex flex-col w-full">
      {options?.map((option, index) => {
        const { category, sub_category } = option;
        return (
          <div key={index}>
            <h1 className="mt-10 text-lg font-medium">{category}</h1>
            <div className="flex flex-col w-full space-y-4 mt-2">
              {sub_category?.map((item, index) => {
                const { label, description, price, selected } = item;
                return (
                  <div
                    key={index}
                    onClick={() => onChangeOptions(category, item)}
                    className={`flex justify-between items-center border ${
                      selected ? 'border-gray-700' : 'border-gray-300'
                    } rounded-md p-4 text-sm cursor-pointer`}
                  >
                    <div className="">
                      <h1 className="text-gray-900 font-medium">{label}</h1>
                      {description && (
                        <p className="text-gray-500 pt-2">{description}</p>
                      )}
                    </div>
                    {price && (
                      <div className="text-sm text-gray-900">+ ${price}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OptionsSelector;
