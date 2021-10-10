import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.png";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "60%",
    margin: "auto",
    marginTop: "20px",
  },
  alert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  image: {
    backgroundImage: "url(https://wallpapercave.com/wp/wp2120714.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "90%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  btnGroup: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  formControl: {
    marginTop: theme.spacing(1),
    width: "90%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectLpackage = (props) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <br />
          <Typography component="h1" variant="h4">
            <b>Select Package</b>
          </Typography>

          <br />
          <br />

          <div style={{ paddingLeft: "30px" }}>
            <Grid
              item
              xs={12}
              sm={120}
              md={32}
              component={Paper}
              elevation={10}
              square
            >
              <br />
              <Typography
                component="h6"
                variant="h6"
                style={{ paddingLeft: "105px" }}
              >
                Luxury
              </Typography>
              <br />

              <img
                style={{ paddingLeft: "70px" }}
                src={img3}
                alt=""
                width={200}
                height={120}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.sub}
                href="/llpayment"
              >
                Select
              </Button>
            </Grid>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div style={{ paddingLeft: "30px" }}>
            <Grid
              item
              xs={12}
              sm={120}
              md={52}
              component={Paper}
              elevation={10}
              square
            >
              <br />
              <Typography
                component="h6"
                variant="h6"
                style={{ paddingLeft: "85px" }}
              >
                Semi Luxury
              </Typography>
              <br />

              <img
                style={{ paddingLeft: "70px" }}
                src={img4}
                alt=""
                width={200}
                height={120}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                href="/lspayment"
                className={classes.sub}
              >
                Select
              </Button>
            </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default SelectLpackage;
