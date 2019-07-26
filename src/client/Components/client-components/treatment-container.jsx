import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

const wayToImage = '../../../../docs/tooth.png';

const useStyle = theme => ({
});

function TabPanel(props) {
  const {
    children, value, index
  } = props;

  return (
    <Typography hidden={value !== index}>
      {children}
    </Typography>
  );
}


const ListTreatments = (props) => {
  const { treatments, value } = props;

  return (
    <Paper>
      {treatments.length > 0
        ? treatments[value].listProcedure.map(procedure => (
          <Grid container justify="space-between">
            <Typography>
              {procedure.name}
            </Typography>
            <Typography style={{ backgroundColor: '#DCDCDC' }}>
              {procedure.cost}
              {'$'}
            </Typography>
          </Grid>
        ))
        : <Typography>ASD</Typography>
      }

    </Paper>
  );
};

class Treatments extends Component {
  constructor(props) {
    super(props);

    this.imageElement = React.createRef();
    this.tabElement = React.createRef();

    this.state = {
      value: 0,
      widthImage: 0,
      widthTab: window.innerWidth / 8
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const widthImage = this.imageElement.current.clientWidth;
    this.state.widthImage = widthImage;

    const widthTab = this.tabElement.current.clientWidth / 8;
    this.state.widthTab = widthTab;
  }

  componentDidUpdate() {
    const widthImage = this.imageElement.current.clientWidth;
    this.state.widthImage = widthImage;

    const widthTab = this.tabElement.current.clientWidth / 9;
    this.state.widthTab = widthTab;
  }

  handleChange(event, selectValue) {
    this.setState({ value: selectValue });
  }

  render() {
    const { treatments, classes } = this.props;
    const { value, widthImage, widthTab } = this.state;

    return (
      <Grid ref={this.tabElement}>
        <Tabs
          // variant="fullWidth"
          value={value}
          onChange={this.handleChange}
        >
          <Tab label="Diagnosis" style={{ minWidth: `${widthTab}px`, paddingLeft: '0px', paddingRight: '0px' }} />
          <Tab label="Restoration" style={{ minWidth: `${widthTab}px`, paddingLeft: '0px', paddingRight: '0px' }} />
          <Tab label="Root canal" style={{ minWidth: `${widthTab}px`, paddingLeft: '0px', paddingRight: '0px' }} />
          <Tab label="Hygiene" style={{ minWidth: `${widthTab}px`, paddingLeft: '0px', paddingRight: '0px' }} />
          <Tab label="Whitening" style={{ minWidth: `${widthTab}px`, paddingLeft: '0px', paddingRight: '0px' }} />
          <Tab label="Prosthetics" style={{ minWidth: `${widthTab}px`, paddingLeft: '0px', paddingRight: '0px' }} />
          <Tab label="Implantation" style={{ minWidth: `${widthTab}px`, paddingLeft: '0px', paddingRight: '0px' }} />
          <Tab label="Orthodontics" style={{ minWidth: `${widthTab}px`, paddingLeft: '0px', paddingRight: '0px' }} />
          <Tab label="Surgery" style={{ minWidth: `${widthTab}px`, paddingLeft: '0px', paddingRight: '0px' }} />
        </Tabs>

        <Grid container direction="row">
          <Grid item xs={7}>
            <Paper ref={this.imageElement}>
              <img src={wayToImage} alt="fancy unicorn" style={{ width: `${widthImage}px` }} />
            </Paper>
          </Grid>

          <Grid item xs={5}>
            <TabPanel value={value} index={0}>
              <ListTreatments treatments={treatments} value={value} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ListTreatments treatments={treatments} value={value} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ListTreatments treatments={treatments} value={value} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ListTreatments treatments={treatments} value={value} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <ListTreatments treatments={treatments} value={value} />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <ListTreatments treatments={treatments} value={value} />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <ListTreatments treatments={treatments} value={value} />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <ListTreatments treatments={treatments} value={value} />
            </TabPanel>
            <TabPanel value={value} index={8}>
              <ListTreatments treatments={treatments} value={value} />
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyle)(Treatments);
