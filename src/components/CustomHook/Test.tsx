import UseCustomHook, { Data } from './CustomHook';

const UseFetchHookTest = () => {
  const { data, error, pending } = UseCustomHook(
    'https://dummyjson.com/products',
    {},
  );

  const products = (data as Data)?.products;

  return (
    <>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending! Please wait...</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {products && products.length
        ? products.map((productItem: { title: string }) => (
            <p>{productItem.title}</p>
          ))
        : null}
    </>
  );
};

export default UseFetchHookTest;
