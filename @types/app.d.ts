type PaginationType = {
  page: number;
  limit: number;
};

type RelationType = {
  expand?: string;
  embed?: string;
};

type SortingType = {
  sort?: string;
  order?: string;
};

type SearchType = {
  q?: string;
};
