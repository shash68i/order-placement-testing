import { useState } from 'react';

const Sell = () => {
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with values', amount, price);
  };
  return (
    <div>
      <h2>Sell</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="input-fields"
            type="text"
            placeholder="Amount"
            onChange={handleChangeAmount}
            name="amount"
            value={amount}
          />
        </div>

        <div>
          <input
            className="input-fields"
            type="text"
            placeholder="Price"
            onChange={handleChangePrice}
            name="price"
            value={price}
          />
        </div>

        <button className="button-style">Sell</button>
      </form>
    </div>
  );
};

export default Sell;
