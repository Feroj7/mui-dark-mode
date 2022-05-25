import { Box } from "@mui/system";
import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      <Header></Header>
      <Main></Main>
    </Box>
  );
}

export default App;
