const FriendListItem = props => {
  return (
    <div>
      <img src={props.avatar} alt="Avatar" width="48" />
          <p>{props.name}</p>
          <p>{props.isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
export default FriendListItem
