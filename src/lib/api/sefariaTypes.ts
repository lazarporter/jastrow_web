export interface SearchHit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: Source;
  highlight: Highlight;
}

export interface Source {
  ref: string;
  heRef: string;
  version: string;
  lang: string;
  version_priority: number;
  titleVariants: string[];
  categories: string[];
  order: string;
  path: string;
  pagesheetrank: number;
  comp_date: number;
  exact: string;
  naive_lemmatizer: string;
  hebrew_version_title: string;
}

export interface Highlight {
  exact: string[];
}
export type SearchResponse = {
  took: number;
  timed_out: boolean;
  _shards: {
    failed: number;
    skipped: number;
    successful: number;
    total: number;
  };
  hits: {
    max_score: number;
    total: number;
    hits: SearchHit[];
  };
};
