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

type DropdownItemType = {
  title?: string;
  icon?: React.FC;
  href?: string;
  onClick?: () => void;
  component?: React.FC;
};
