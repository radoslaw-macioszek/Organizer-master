import React, { useState } from 'react';
import styled from 'styled-components';

import { FaStar } from 'react-icons/fa';

// chowa radio buttony
const StyledInput = styled.input`
  display: none;

  cursor: pointer;
  transition: color 200ms;
`;

const Stars = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {/* utworzenie 5 czystych tablic i zmapowanie ich.  */}
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <StyledInput
              type="radio"
              name="rating"
              value={ratingValue}
              // dzieki temu kazda z kropek ma wartosc od 1 do 5
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={20}
              // dzieki temu sie zakresla na zielono - jezeli wartosc kropki jest <= to to mniejsze badz rowne jest zakreslane, czyli wszystkie.
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              //   albo hover, albo rating, jak sa obie, to jest grey. Najpierw Hover zeby sie pokazywal hover.
              onMouseEnter={() => setHover(ratingValue)}
              // oba sa tutaj, poniewaz radio button jest ukryty.
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Stars;
