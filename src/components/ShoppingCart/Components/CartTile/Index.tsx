import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../Store/Slices/CardSlice';

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <>
      <div className="flex items-center p-5 justify-between mt-2 mb-2 rounded-xl border-2  border-orange-900">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            className="h-28 rounded-lg"
            alt={cartItem?.title}
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-black font-bold">{cartItem.title}</h1>
            <p className="text-black font-extrabold">€{cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-blue-700 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove From cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTile;
