import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Radium from 'radium';
import ReactionBox from './ReactionBox';

const styles = {
  row: {
    marginTop: '12px'
  },
  box: {
    overflow: 'auto',
    ':hover': {
      background: '#E7F1ED'
    }
  }
};

class ChangeRow extends React.Component {
  nl2br = lines => lines.split('\n').map((line, i) => (
    <span key={i}>
      {i === 0 ? '' : <br />}
      {line}
    </span>
  ));

  render() {
    return (
      <Row className="show-grid" style={styles.row}>
        <div style={styles.box}>
          <Col md={6}>
            <div>
              {this.nl2br(this.props.change.revision)}
            </div>
          </Col>
          <Col md={6}>
            <div>
              {this.nl2br(this.props.change.original)}
            </div>
          </Col>
        <ReactionBox change={this.props.change} />
        </div>
      </Row>
    );
  }
}

ChangeRow.propTypes = {
  change: React.PropTypes.any.isRequired
};

export default Radium(ChangeRow);
