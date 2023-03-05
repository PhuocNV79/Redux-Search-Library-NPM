import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux-core';
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
