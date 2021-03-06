import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import { analyticsHospitalFetchData } from '../../actions/item-analytics';
import { URL_ANALYTICS_HOSPITAL } from '../const';
import Loading from '../loading-indicator';
import Error from '../error-indicator';
import Chart from '../chart-component/spline-chart';

class AnalyticsHospital extends Component {
  constructor(props) {
    super(props);

    this.rootElement = React.createRef();

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_ANALYTICS_HOSPITAL);

    const height = this.rootElement.current.clientHeight - 20;
    this.setState({ height });
  }

  render() {
    const { hasErrored, isLoading, classes } = this.props;

    // eslint-disable-next-line react/prop-types
    const { items } = this.props;
    const { height } = this.state;
    return (
      // eslint-disable-next-line react/prop-types
      <Paper className={classes.centerBoard} ref={this.rootElement}>
        {isLoading && <Loading />}
        {hasErrored && <Error />}
        {!isLoading && (
          <Chart
            chartData={items}
            chartHeight={height}
            chartTitle="Hospital Survey"
          />
        )}
      </Paper>
    );
  }
}

const useStyles = theme => ({
  centerBoard: {
    height: '25vh',
    color: theme.palette.text.secondary,
  },
});

const AnalyticsHospitals = withStyles(useStyles)(AnalyticsHospital);

AnalyticsHospital.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.itemsAnalytics.itemsAnalyticsHospital,
  hasErrored: state.itemsAnalytics.hasErrored,
  isLoading: state.itemsAnalytics.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(analyticsHospitalFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsHospitals);
