interface Malt {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

interface Hop {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  add: string;
  attribute: string;
}

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  image_url: string;
  description: string;
  abv: number;
  ibu: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  method: {
    mash_temp: Array<{
      temp: {
        value: number;
        unit: string;
      };
      duration: number;
    }>;
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    twist: string | null;
  };
  ingredients: {
    malt: Malt[];
    hops: Hop[];
    yeast: string;
  };
  food_pairing: string[];
}
