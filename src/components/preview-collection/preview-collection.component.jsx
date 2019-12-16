import React from 'react';
import styles from './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({ title, items }) => (
  <div className="collection__wrapper">
    <h1 className="collection__title"> { title } </h1>
    <div className="collection__preview">
      { /* Performance concern. WIll refactor later */ }
      { items
        .filter( (item, index) => index < 4 )
        .map( ( {id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
);

export default PreviewCollection;