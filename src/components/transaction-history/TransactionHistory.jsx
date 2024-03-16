import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction']}>
      <thead>
        <tr>
          <th className={css['trans-head-item']}>Type</th>
          <th className={css['trans-head-item']}>Amount</th>
          <th className={css['trans-head-item']}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr className={css['trans-body-item-tr']} key={item.id}>
              <td className={css['trans-body-item-td']}>{item.type}</td>
              <td className={css['trans-body-item-td']}>{item.amount}</td>
              <td className={css['trans-body-item-td']}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
