import { useSelector } from '../store';

const Total = () => {
  const { total } = useSelector();
  return (
    <div className="shopping-cart-total">
      <span className="lighter-text">Total:</span>
      <span className="main-color-text">
        ${Intl.NumberFormat('en-US').format(total)}
      </span>
    </div>
  );
};

export default Total;
