import { Box, Stack, Button } from "@mui/material";
import { boxStyles } from "./boxStyles";

const WelcomeCard = ({ beginAssessment }) => (
  <Box sx={boxStyles}>
    <Stack spacing={3}>
      <h2>Welcome</h2>
      <p>Click the button below to begin the assignment</p>
      <Button variant="contained" color="primary" onClick={beginAssessment}>
        Start
      </Button>
    </Stack>
  </Box>
);

export default WelcomeCard;
