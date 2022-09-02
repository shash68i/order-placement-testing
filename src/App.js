// import { WagmiConfig, createClient } from 'wagmi';
// import { getDefaultProvider } from 'ethers';

import './App.css';
import Buy from './Buy';
import Sell from './Sell';
// import { Profile } from './Profile';

// const client = createClient({
//   autoConnect: true,
//   provider: getDefaultProvider(),
// });

function App() {
  return (
    <>
      {/* <WagmiConfig client={client}>
        <Profile />
      </WagmiConfig> */}
      <div className="container">
        <Buy />
        <Sell />
      </div>
    </>
  );
}

export default App;
