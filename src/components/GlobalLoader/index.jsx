'use client';
import { Loader } from '@/utils/lazyImport';
import { useSelector } from 'react-redux';

const GlobalLoader = ({ children }) => {
  const { loading } = useSelector((state) => state.landingPage || {});

  console.log(loading, 'loading');

  // if (!loading) {
  //   return (
  //     <div>
  //       <Loader />
  //     </div>
  //   );
  // }

  return <>{children}</>;
};

export default GlobalLoader;
