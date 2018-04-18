import React from 'react';

const NoConnection = () => {
  return (
    <div>
      <header className="col">
        <h1 className="typo-h1">No connection to Ethereum</h1>
      </header>
      <div className="row">
        <div className="col">
          <p className="typo-cl">
          Please use Parity, Metamask or a local node at <strong>http://localhost:8545</strong>.<br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default NoConnection;
