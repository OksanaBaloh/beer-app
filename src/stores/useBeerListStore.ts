import { create } from 'zustand';
import axios from 'axios';
import { Beer } from '../types/Beer';

interface BeerState {
  beers: Beer[];
  selectedBeers: number[];
  currentPage: number;
  fetchBeers: () => void;
  toggleSelectingBeer: (beerId: number) => void;
  deleteSelectedBeers: () => void;
}

export const useBeerListStore = create<BeerState>((set, get) => ({
  beers: [],
  selectedBeers: [],
  currentPage: 1,
  fetchBeers: async () => {
    try {
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers?page=${get().currentPage}`
      );
      const data = response.data as Beer[];
      if (get().currentPage === 1) {
        set({ beers: data });
      } else {
        set((state) => ({ beers: [...state.beers, ...data] }));
      }
    } catch (error) {
      console.error('Failed to fetch beers:', error);
    }
  },
  toggleSelectingBeer: (beerId) => {
    set((state) => {
      const isSelected = state.selectedBeers.includes(beerId);
      const updatedSelectedBeers = isSelected
        ? state.selectedBeers.filter((id) => id !== beerId)
        : [...state.selectedBeers, beerId];

      return { selectedBeers: updatedSelectedBeers };
    });
  },
  deleteSelectedBeers: () => {
    set((state) => {
      const updatedBeers = state.beers.filter((beer) => !state.selectedBeers.includes(beer.id));
      const currentPage = updatedBeers.length < 15 ? state.currentPage + 1 : state.currentPage;

      return {
        beers: updatedBeers,
        selectedBeers: [],
        currentPage
      };
    });
  }
}));
