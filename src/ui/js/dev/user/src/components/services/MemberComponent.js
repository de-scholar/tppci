/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllApplications } from '../../actions/getDataFromDb';
import { applicationTableHead, applicationTableBody } from '../table';

class MemberComponent extends Component {
  constructor(props) {
    super(props);
    this.props = {
      dataFromDb: PropTypes.object.isRequired,
      getAllApplications: PropTypes.func.isRequired,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const { dataFromDb } = nextProps;
      if (dataFromDb) {
        const returnedapps = document.getElementById('returned-apps');
        const { gottenApplications } = dataFromDb;
        const tbl = document.createElement('table');
        const div = document.createElement('div');
        applicationTableHead(div, tbl);
        gottenApplications.map((app) => applicationTableBody(div, app, tbl, returnedapps));
      }
    }
  }

  handleGetAllApps = () => {
    this.props.getAllApplications();
  }

  render() {
    return (
      <Row className="width-98">
        <div className="col-md-2">
          <h5>
            Application status
          </h5>
          <div>
            <button
              className="btn btn-block btn-dark"
              type="button"
              onClick={this.handleGetAllApps}
            >
              <span className="text-22">
                All applications
              </span>
            </button>
          </div>
          <div>
            <button
              className="btn btn-block btn-danger"
              type="button"
            >
              <span className="text-22">
                Unreplied apllications
              </span>
            </button>
          </div>
          <div>
            <button
              className="btn btn-block btn-warning"
              type="button"
            >
              <span className="text-22">
                Unconfirmed applications
              </span>

            </button>
          </div>
          <div>
            <button
              className="btn btn-block btn-info"
              type="button"
            >
              <span className="text-22">Replied applications</span>
            </button>
          </div>
          <div>
            <button
              className="btn btn-block btn-success"
              type="button"
            >
              <span className="text-22">Confirmed applications</span>

            </button>
          </div>
        </div>
        <div className="col-md-10" id="returned-apps" />
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  dataFromDb: state.myReducers,
});

export default connect(mapStateToProps, { getAllApplications })(MemberComponent);
