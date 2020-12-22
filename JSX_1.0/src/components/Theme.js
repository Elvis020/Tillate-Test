import { createMuiTheme } from "@material-ui/core/styles";

// Editing default theme in material-ui
export default createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 56,
    },
  },
  palette: {
    background: {
      default: "rgba(0,0,0,.9)",
    },
  },
});
