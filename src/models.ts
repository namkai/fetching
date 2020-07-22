interface Height {
  imperial: string;
  metric: string;
}

interface Weight {
  imperial: string;
  metric: string;
}

export interface Breed {
  id: number;
  bred_for: string;
  breed_group: string;
  country_code: string;
  height: Height;
  life_span: string;
  name: string;
  origin: string;
  temperament: string;
  weight: Weight;
}
