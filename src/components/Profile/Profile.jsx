import PropTypes from 'prop-types';
import {
  ProfileClass,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './ProfileStyled';

export const Profile = (user) => {
  return (
    <ProfileClass>
      <Description>
        <Avatar src={user.user.avatar} alt="User avatar" />
        <Name>{user.user.username}</Name>
        <Tag>@{user.user.tag}</Tag>
        <Location>{user.user.location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{user.user.stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{user.user.stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{user.user.stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileClass>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};