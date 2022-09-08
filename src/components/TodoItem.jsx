import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeTodo, toggleTodoComplete, changeTodo } from "../store/todoSlice"
import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import DeleteIcon from "@mui/icons-material/Delete"
import BorderColorIcon from "@mui/icons-material/BorderColor"
import { TextField } from "@mui/material"
import SaveIcon from "@mui/icons-material/Save"

function TodoItem({ id, text, completed, date }) {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState(text)
  const label = { inputProps: { "aria-label": "Checkbox demo" } }

  return (
    <li>
      {edit ? (
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            id="outlined-basic"
            label="Change todo"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <SaveIcon
            sx={{ fontSize: 50, cursor: "pointer" }}
            onClick={() => {
              dispatch(changeTodo({ id, value }))
              setEdit(false)
            }}
          />
        </Stack>
      ) : (
        <Stack direction="row" alignItems="center" spacing={1}>
          <Checkbox
            {...label}
            checked={completed}
            onChange={() => dispatch(toggleTodoComplete({ id }))}
            color="success"
          />
          <Typography
            component="span"
            variant="subtitle1"
            sx={{ color: "black", fontSize: 30 }}
          >
            {text}
          </Typography>
          <DeleteIcon
            onClick={() => dispatch(removeTodo({ id }))}
            sx={{ fontSize: 30, cursor: "pointer" }}
          />
          <BorderColorIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setEdit(true)}
          />
          <Typography
            component="span"
            variant="subtitle1"
            sx={{ color: "black" }}
          >
            {date}
          </Typography>
        </Stack>
      )}
    </li>
  )
}

export default TodoItem
