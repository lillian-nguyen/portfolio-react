import React from 'react';

const LocalDate = () => {
  const now = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-GB', options);

  return (
    <p className="date">{formattedDate}</p>
  );
};

export default LocalDate;