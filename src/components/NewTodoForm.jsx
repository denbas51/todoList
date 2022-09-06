import { Button } from "@mui/material"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="New todo"
        variant="outlined"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ height: "56px" }}
        onClick={handleAction}
      >
        Add todo
      </Button>
    </Box>
  )
}

export default NewTodoForm
