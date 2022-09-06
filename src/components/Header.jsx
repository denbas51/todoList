import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

function Header() {
  return (
    <Box
      height={100}
      sx={{
        backgroundColor: "#2395b8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography component="h3" variant="h3" sx={{ color: "white" }}>
        My Todo List
      </Typography>
    </Box>
  )
}

export default Header
