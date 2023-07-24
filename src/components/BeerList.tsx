import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBeerListStore } from '../stores/useBeerListStore';
import { Beer } from '../types/Beer';
import { BeerCard } from './BeerCard';

type Props = {
  beers: Beer[];
};

export const BeerList: React.FC<Props> = ({ beers }) => {
  const navigate = useNavigate();
  const { selectedBeers, toggleSelectingBeer } = useBeerListStore();

  const handleBeerClick = (beerId: number) => {
    navigate(`${beerId}`);
  };

  const handleBeerRightClick = (event: React.MouseEvent, beerId: number) => {
    event.preventDefault();
    toggleSelectingBeer(beerId);
  };

  return (
    <ul className="beer-list">
      {beers.map((beer) => (
        <li
          key={beer.id}
          onClick={() => handleBeerClick(beer.id)}
          onContextMenu={(e) => handleBeerRightClick(e, beer.id)}
          className={classNames('beer-item', { selected: selectedBeers.includes(beer.id) })}
        >
          <BeerCard beer={beer} />
        </li>
      ))}
    </ul>
  );
};
