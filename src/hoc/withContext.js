import React from 'react';
import PageContext from '../context';

const withContext = (Component) => {
  return function contextComponent(props) {
    const currentDate = new Date().toLocaleDateString();
    const currentDay = currentDate.toString().slice(0, 2) * 1;
    const currentMonth = currentDate.toString().slice(3, 5);
    const currentYear = currentDate.toString().slice(6) * 1;
    const actualDate = `${currentDay}.${currentMonth}.${currentYear}`;

    return (
      <PageContext.Consumer>
        {(context) => <Component {...props} pageContext={context} actualDate={actualDate} />}
      </PageContext.Consumer>
    );
  };
};

export default withContext;
