import TextField from '@mui/material/TextField/TextField';
import { Box } from '@mui/system';
import React, { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { search } from '../../lib/sefaria';
import { normalizers, SearchResult as SearchResultType } from '../../lib/normalizers';
import { SearchResult } from './SearchResult';

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  const [results, setResults] = useState<SearchResultType[]>([]);
  
  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.value.length) {
      try {
        search(e.target.value).then(normalizers.searchResults).then(setResults);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getDebouncedResults = useMemo(() => debounce(handleChange, 300), []);

  useEffect(() => getDebouncedResults.cancel);

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <TextField
        label="Type to search..."
        type="search"
        onChange={getDebouncedResults}
        sx={{ width: '100%' }}
      />
      {results.map(r => <SearchResult key={r.sourceRef} result={r} />)}
    </Box>
  );
};
