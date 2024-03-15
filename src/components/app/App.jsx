import './App.css';
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from '../profile/Profile';


const App = () => {
  // console.log(userData.username);
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        statsFollowers={userData.stats.followers}
        statsViews={userData.stats.views}
        statsLikes={userData.stats.likes}
      />
      {/* <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </>
  );
};

export default App;
