import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { useBeerListStore } from './stores/useBeerListStore';

export const App: React.FC = () => {
  const { currentPage, fetchBeers } = useBeerListStore();

  useEffect(() => {
    fetchBeers();
  }, [currentPage]);

  return (
    <div className="App">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
