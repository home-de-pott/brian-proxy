import React from 'react';

const Via = props => {
  console.log('Via route');
  props.history.push('/products/' + props.match.params.id);
  return <p>One moment...</p>;
};

export default Via;
