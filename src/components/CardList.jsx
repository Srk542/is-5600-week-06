import React, { useState, useEffect } from "react";
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [products, setProducts] = useState(data.slice(0, limit));

  const filterTags = (tagQuery) => {
    if (!tagQuery) {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter(product =>
      product.tags.some(tag =>
        tag.title.toLowerCase().includes(tagQuery.toLowerCase())
      )
    );

    setFilteredData(filtered);
    setOffset(0);
  };

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />
      <div className="mt2 mb2">
        {products.length === 0 ? (
          <p>No products match your search.</p>
        ) : (
          products.map((product) => (
            <Card key={product.id} {...product} />
          ))
        )}
      </div>
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => setOffset(offset - limit)}
          disabled={offset === 0}
        />
        <Button
          text="Next"
          handleClick={() => setOffset(offset + limit)}
          disabled={offset + limit >= filteredData.length}
        />
      </div>
    </div>
  );
};

export default CardList;
