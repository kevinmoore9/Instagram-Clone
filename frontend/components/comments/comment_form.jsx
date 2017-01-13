import React from 'react';
import { Link, withRouter } from 'react-router';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }

render () {

  return (
    <div className="comment-section">
      <p>This will Be teh Comments Section</p>
    </div>
  );
}
}

export default withRouter(CommentForm);
