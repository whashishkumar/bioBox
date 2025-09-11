'use client';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './features/landingPage/landingPageSlice';
import { Loader } from '@/utils/lazyImport';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { token, loading } = useSelector((state) => state.landingPage);

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!token && !hasFetched.current) {
      dispatch(loginUser());
      hasFetched.current = true;
    }
  }, [dispatch, token]);

  if (loading && !token) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default AuthProvider;
