function TransactionHistory(props) {
  const player = props.player;
  return (
    <div className="border border-1 rounded p-3 mt-3">
      <h3>History</h3>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Receiver</th>
          </tr>
        </thead>
        <tbody>
          {player.transactions && player.transactions.length > 0 ? (
            player.transactions.map((transaction) => {
              return (
                <tr>
                  <td>{transaction.amount}</td>
                  <td>{transaction.receiver}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
