import React from 'react';
import PageContext from '../context';

const withContext = (Component) => {
  return function contextComponent(props) {
    const currentDate = new Date().toLocaleDateString();
    const currentDay = currentDate.toString().slice(0, 2) * 1;
    const currentMonth = currentDate.toString().slice(3, 5);
    const currentYear = currentDate.toString().slice(5, 10);

    const actualDate = `${currentDay < 10 ? '0' + currentDay : currentDay}.${
      currentMonth < 10 ? '0' + currentMonth : currentMonth
    }${currentYear}`;

    return (
      <PageContext.Consumer>
        {(context) => <Component {...props} pageContext={context} actualDate={actualDate} />}
      </PageContext.Consumer>
    );
  };
};

export default withContext;
