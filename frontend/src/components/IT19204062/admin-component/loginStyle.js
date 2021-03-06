import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: "30px 150px 30px 150px",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(234,239,234,0.94)",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },

  avatar: {
    margin: theme.spacing(1, 1, 1, 2),
    backgroundColor: "#3f51b5",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#3f51b5",
    color: "#ffffff",
  },

  Button: {
    border: "0px;",
    outline: "none",
    color: theme.palette.primary.main,
  },
}));