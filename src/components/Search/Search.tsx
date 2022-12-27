import TextField from '@mui/material/TextField/TextField';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { search } from '../../lib/sefaria';
interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchTerm(e.target.value)
    // debounce me: search(e.target.value);
};


  return (
    <Box sx={{
        padding: 2,
    }}>
      <TextField
        label="Type to search..."
        type="search"
        value={searchTerm}
        onChange={handleChange}
        sx={{width: '100%'}}
      />
    </Box>
  );
};
