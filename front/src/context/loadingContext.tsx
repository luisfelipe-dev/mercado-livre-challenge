import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

interface LoadingComponentProps {
  loading: boolean;
}

interface LoadingProviderProps {
  Component: React.FC<LoadingComponentProps>;
}

interface LoadingProviderData {
  loadingState: [boolean, Dispatch<SetStateAction<boolean>>];
  focus: boolean;
  focusState: [boolean, Dispatch<SetStateAction<boolean>>];
  valueSearch: string;
  ValueState: [string, Dispatch<SetStateAction<string>>];
  products: Array<string>;
  productsState: [string[], Dispatch<SetStateAction<string[]>>];
  suggestionsSearch: string[];
  setSuggestionsSearch: Dispatch<SetStateAction<string[]>>;
  breadcrumb: string[];
  setBreadcrumb: Dispatch<SetStateAction<string[]>>;
}

const LoadingContext = createContext({} as LoadingProviderData);

const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
  Component,
}) => {
  const loadingState = useState(false);
  const focusState = useState(false);
  const ValueState = useState<string>('');
  const productsState = useState<string[]>([]);
  const [suggestionsSearch, setSuggestionsSearch] = useState<string[]>([]);
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

  const [loading] = loadingState;
  const [focus] = focusState;
  const [valueSearch] = ValueState;
  const [products] = productsState;

  return (
    <LoadingContext.Provider
      value={{
        loadingState,
        focus,
        focusState,
        valueSearch,
        ValueState,
        suggestionsSearch,
        setSuggestionsSearch,
        products,
        productsState,
        breadcrumb,
        setBreadcrumb,
      }}
    >
      <Component loading={!!loading} />
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
