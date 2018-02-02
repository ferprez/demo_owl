import green from "material-ui/colors/green";

export default {
  Container: {
    minHeight: "100vh",
    display: "flex"
  },
  HeaderStyle: {
    backgroundColor: green[500],
    height: 250,
    width: "100%",
    position: "absolute"
  },
  LogoStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  FormStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  CardStyle: {
    alignSelf: "center",
    margin: "auto",
    width: "400px",
    zIndex: 1
  },
  CardBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  ActionsStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  }
};
