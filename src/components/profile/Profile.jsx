import css from './Profile.module.css';

const Profile = props => {
  return (
    <div className={css.profile}>
      <div className={css['profile-info']}>
        <img
          className={css['profile-image']}
          src={props.image}
          alt="User avatar"
        />
        <p>{props.name}</p>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
      </div>
      <ul className={css['profile-stats']}>
        <li className={css['profile-stats-item']}>
          <span>Followers</span>
          <span>{props.statsFollowers}</span>
        </li>
        <li className={css['profile-stats-item']}>
          <span>Views</span>
          <span>{props.statsViews}</span>
        </li>
        <li className={css['profile-stats-item']}>
          <span>Likes</span>
          <span>{props.statsLikes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
