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
      <div className="error">Failed to load data. Please try again later.</div>
    );
  }

  if (empty) {
    return <div className="empty-state">No data available</div>;
  }

  return <>{children}</>;
}
