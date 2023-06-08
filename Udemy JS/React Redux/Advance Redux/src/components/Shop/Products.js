import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'my First Book',
    description: 'The First Book Ever i Read'
  },
  {
    id: 'p2',
    price: 5,
    title: 'my Second Book',
    description: 'The second Book Ever i Read'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((params) => (
          < ProductItem
            key={params.id}
            id={params.id}
            title={params.title}
            price={params.price}
            description={params.description}
          />
        )
        )}

      </ul>
    </section>
  );
};

export default Products;
