import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Button } from 'react-bootstrap';

const ChannelListItem = (props) => {
  const { channel: selectedChannel, onClick, channel } = props;
  return (
    <Button bsSize="xsmall" bsStyle="primary" style={{backgroundColor:'#ff96e7'}} >
      <a className={classnames({ selected: channel === selectedChannel })}
         style={{ cursor: 'hand', color: 'white', backgroundColor:'#ff96e7'}}
         onClick={() => onClick(channel)}>
        <li style={{textAlign: 'left', cursor: 'pointer', marginLeft: '2em', backgroundColor:'#ff96e7'}}>
          <h5>{channel.name}</h5>
        </li>
      </a>
    </Button>
  );
}

ChannelListItem.propTypes = {
  channel: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ChannelListItem;
