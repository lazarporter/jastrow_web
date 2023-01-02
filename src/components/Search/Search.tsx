import TextField from '@mui/material/TextField/TextField';
import { Box } from '@mui/system';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { search } from '../../lib/sefaria';
interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  // const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if(e.target.value.length) {
      search(e.target.value);
    }
  };

  const getDebouncedResults = useMemo(() => debounce(handleChange, 1000), []);

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
        //value={searchTerm}
        onChange={getDebouncedResults}
        sx={{ width: '100%' }}
      />
    </Box>
  );
};
