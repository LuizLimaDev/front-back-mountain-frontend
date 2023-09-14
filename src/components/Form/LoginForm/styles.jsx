import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const HoverButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.SCNormalGreen
  },
}));