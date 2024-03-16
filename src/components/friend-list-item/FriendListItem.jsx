import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = props => {
  return (
    <div className={css['friend-list-item']}>
      <img src={props.avatar} alt="Avatar" width="48" />
      <p>{props.name}</p>
      <p
        className={
          css[
            clsx(
              props.isOnline && 'online-green',
              !props.isOnline && 'offline-red'
            )
          ]
        }
      >
        {props.isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
