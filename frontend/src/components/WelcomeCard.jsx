import { Box, Stack, Button } from "@mui/material";

const WelcomeCard = ({ setCounter }) => (
  <Box flex sx={{ padding: 2, backgroundColor: '#FFFFFF', borderRadius: 1, width: '40%', fontSize: '1.1rem' }}>
    <Stack spacing={3}>
      <h1> Welcome to the assessment! </h1>
      <p> Click the button below to begin. </p>
      <Button variant="contained" color="primary" onClick={() => setCounter(0)}>
        Start
      </Button>
    </Stack>
  </Box>
);

export default WelcomeCard;