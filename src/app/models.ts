export interface Game {
  id: number;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: string;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatforms>;
  publisher: Array<Publishers>;
  rating: Array<Rating>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailers>;
}

export interface APIResponse<T> {
  results: Array<T>;
}

interface Genre {
  name: string;
}

interface ParentPlatforms {
  platform: {
    slug: string;
    name: string;
  };
}

interface Publishers {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface Screenshots {
  image: string;
}

interface Trailers {
  data: {
    max: string;
  };
}
