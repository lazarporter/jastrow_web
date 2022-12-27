const searchURL = 'https://www.sefaria.org/api/search-wrapper';

type SearchResponse = {
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
    hits: {
      highlight: {
        exact: string[];
      };
      _id: string;
      _index: 'text-a' | string;
      _score: number;
      _type: 'text' | string;
    }[];
  };
};
export const search = async (query: string = 'מאי') => {
  const data = {
    query,
    type: 'text',
    filters: ['Reference/Dictionary/Jastrow'],
    filter_fields: ['path'],
  };

  try {
    const res = await fetch(searchURL, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      referrerPolicy: 'no-referrer',
    });
    const json: SearchResponse = await res.json();
    return json;
  } catch (e) {
    console.error(e);
  }
};
