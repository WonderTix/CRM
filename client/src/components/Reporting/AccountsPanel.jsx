import React from "react";
import {
  ButtonGroup,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField
} from "@mui/material";
import {
  accountFiltersTextField,
  accountFiltersSwitch,
} from "../../utils/arrays.jsx";

export default function AccountsPanel({ fetchData }) {
  const [username, setUsername] = React.useState("");
  const [isAdmin, setIsAdmin] = React.useState(false);

  const handleClick = () => {
    let filters = [];
    [
      ["username", username],
      ["is_superadmin", isAdmin],
    ].forEach((filter) => {
      if (filter[1] === "" || filter[1] === false) return;

      filters.push(
        `filters[${filter[0]}]${
          typeof filter[1] === "string" ? "[$contains]" : "[$eq]"
        }=${filter[1]}`
      );
    });

    fetchData(filters.join("&"));
  };

  const handleChange = (e) => {
    e.preventDefault();

    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "is_superadmin":
        setIsAdmin(e.target.checked);
        break;
      default:
        break;
    }
  };
  
  return (
    <div sx={{ display: "flex", flexDirection: "column" }}>
      {accountFiltersTextField.map((filter) => {
        return (
          <TextField
            key={filter.id}
            id={filter.id}
            label={filter.label}
            variant="outlined"
            size="small"
            sx={{ mb: 1 }}
            type={filter.type}
            onChange={handleChange}
          />
        );
      })}
      <FormGroup sx={{ ml: 1, mt: 1 }}>
        {accountFiltersSwitch.map((filter) => {
          return (
            <FormControlLabel
              key={filter.id}
              control={<Switch size="small" id={filter.id} />}
              label={filter.label}
              sx={{ mb: 1 }}
              onChange={handleChange}
            />
          );
        })}
      </FormGroup>
      <ButtonGroup fullWidth variant="contained" sx={{ mt: 1 }}>
        <Button onClick={handleClick}>Run</Button>
        <Button>Save</Button>
      </ButtonGroup>
    </div>
  );
}
