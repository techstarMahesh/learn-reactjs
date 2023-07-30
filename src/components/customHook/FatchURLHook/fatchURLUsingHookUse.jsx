import React from 'react';
import { useFetch } from './useFetch';

export function MyComponent() {
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}
