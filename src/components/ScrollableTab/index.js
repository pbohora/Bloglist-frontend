import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    color: "#05a0e7",
    "& > span": {
      maxWidth: 60,
      width: "100%",
      backgroundColor: "#05a0e7",
    },
  },
})((props) => (
  <Tabs
    variant="scrollable"
    {...props}
    TabIndicatorProps={{ children: <span /> }}
  />
));

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "black",
    fontWeight: "bolder",
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
    "&$selected": {
      color: "#05a0e7",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(1),
  },
}));

const ScrollableTab = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div>
        <StyledTabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Technology" />
          <StyledTab label="Sports" />
          <StyledTab label="Science" />
          <StyledTab label="Leadership" />
          <StyledTab label="Fashion" />
        </StyledTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
};

export default ScrollableTab;
