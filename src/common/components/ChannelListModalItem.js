import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ChannelListModalItem = (props) => {
  const { channel: selectedChannel, onClick, channel } = props;
  return (
    <a className={classnames({ selected: channel === selectedChannel })}
       style={{ cursor: 'hand', color: 'black'}}
       onClick={() => onClick(channel)}>
      <li style={{cursor: 'pointer'}}>
        <h1>{channel.name}</h1>
      </li>
    </a>
  );
}

ChannelListModalItem.propTypes = {
  channel: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ChannelListModalItem;
