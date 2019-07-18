import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography, Paper } from '@material-ui/core';
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis, } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { withStyles } from '@material-ui/core/styles';
import { analyticsVisitFetchData } from '../Actions/itemAnalytics';
import { URL_ANALYTICS_VISIT } from './const';

class AnalyticsVisit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_ANALYTICS_VISIT);

    const height = this.paperElement.clientHeight - 20;
    this.setState({ height });
  }

  render() {
    const { hasErrored, isLoading, classes } = this.props;

    if (hasErrored) {
      return (
        <Paper className={classes.centerBoard}>
          <Typography>Sorry! There was an error loading the items</Typography>
        </Paper>
      );
    }


    if (isLoading) {
      return (
        <Paper className={classes.centerBoard}>
          <Typography>Loading…</Typography>
        </Paper>
      );
    }

    // eslint-disable-next-line react/prop-types
    const { items } = this.props;
    return (
      // eslint-disable-next-line no-return-assign
      <Paper className={classes.centerBoard} ref={paperElement => this.paperElement = paperElement}>
        <Chart
          // eslint-disable-next-line react/destructuring-assignment
          height={this.state.height}
          data={items || []}
        >
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries valueField="num" argumentField="name" />
          <Animation />
        </Chart>

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

const AnalyticsVisits = withStyles(useStyles)(AnalyticsVisit);

AnalyticsVisit.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.itemsAnalytics.itemsAnalyticsVisit,
  hasErrored: state.itemsAnalytics.hasErrored,
  isLoading: state.itemsAnalytics.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(analyticsVisitFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsVisits);
