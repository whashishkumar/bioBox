'use client';
import './style.css';

export default function GlobalStateHandler({
  loading,
  error,
  empty,
  children,
  loaderComponent: Loader,
}) {
  if (loading) {
    return (
      <div className="loader">
        {Loader ? <Loader /> : <div>Loading...</div>}
      </div>
    );
  }

  if (error) {
    return (
      <p className="api-error">Failed to load data. Please try again later.</p>
    );
  }

  if (empty) {
    return <p className="empty-state">No data available</p>;
  }

  return <>{children}</>;
}
