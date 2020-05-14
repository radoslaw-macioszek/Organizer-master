import React from 'react';
import DetailsTemplate from '../templates/DetailsTemplate';

///////////////////////////////////////////////////////////////////////////

// to co wyswietla sie po kliknieciu w dany item

/////////////////////////////////////////////////////////////////

// props match - pozwala na sprawdzenie path, url, paramsow itp od react routera
// dzieki zawarciu wszystkich sciezek w routes i match mozemy utworzyc logike,
// np. ${match.path === routes.twitter}

class DetailsPage extends React.Component {
  state = {
    pageType: null,
  };

  render() {
    const dummyArticle = {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'hello_roman',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    };

    return (
      <DetailsTemplate
        title={dummyArticle.title}
        content={dummyArticle.content}
        twitterName={dummyArticle.twitterName}
        articleUrl={dummyArticle.articleUrl}
        created={dummyArticle.created}
      />
    );
  }
}

export default DetailsPage;
