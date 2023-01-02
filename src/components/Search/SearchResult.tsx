import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import { SearchResult as SearchResultType } from '../../lib/normalizers';

interface SearchResultProps {
  result: SearchResultType;
}

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => (
  <Card sx={{ marginBottom: 2 }}>
    <CardHeader title={result.title}/>
    <CardContent>{result.body.map(s => <Typography>{s}</Typography>)}</CardContent>
  </Card>
);
