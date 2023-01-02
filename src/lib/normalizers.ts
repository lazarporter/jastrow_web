import { SearchResponse } from './api/sefariaTypes';

const cleanHTML = (input: string) => {
  if (input.includes('<script') && input.includes('</script>')) {
    console.log('injection attempted, aborting normalization');
    return [];
  }
  const div = document.createElement('div');
  div.innerHTML = input.replaceAll(' ; ', ';\n').replaceAll('; ', ';\n');
  return div.textContent?.split('\n') || div.innerText?.split('\n') || [];
};

export interface SearchResult {
  title: string;
  sourceRef: string;
  body: string[];
}
const searchResults = (data: SearchResponse | undefined): SearchResult[] =>
  data?.hits?.hits?.map((hit) => ({
    title: hit._source.titleVariants[0] ?? hit._id,
    sourceRef: hit._source.ref,
    body: cleanHTML(hit._source.exact),
  })) ?? [];

export const normalizers = {
  searchResults,
};
