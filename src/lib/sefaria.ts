import { SearchResponse } from "./api/sefariaTypes";

const searchURL = 'https://www.sefaria.org/api/search-wrapper';

export const search = async (query: string) => {
  if(!query.length) {
    return Promise.reject('No search term provided');
  }

  const data = {
    query,
    type: 'text',
    filters: ['Reference/Dictionary/Jastrow'],
    filter_fields: ['path'],
    source_proj: true,
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
