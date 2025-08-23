import dynamic from 'next/dynamic';
import { DotLoader } from 'react-spinners';
import '../app/globals.css';

export const Loader = () => {
  return (
    <div className="loader">
      <DotLoader color="var(--color-primary)" />
    </div>
  );
};
export function lazyImport(factory) {
  return dynamic(factory, {
    loading: () => <Loader />,
  });
}
