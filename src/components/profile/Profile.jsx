const Profile = props => {
    // console.log(name);
  return (
    <div>
      <div>
        <img src={props.image} alt="User avatar" />
        <p>{props.name}</p>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{props.statsFollowers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{props.statsViews}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{props.statsLikes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
