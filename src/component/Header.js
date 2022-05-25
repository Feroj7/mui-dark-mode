import React from "react";
import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../Context/ColorProvider";

const Header = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 4,
      }}
    >
      <Button onClick={toggleColorMode}>Change mode</Button>
    </Box>
  );
};

export default Header;
