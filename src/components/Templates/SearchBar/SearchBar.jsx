import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "4px",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#f9f9f9",
  },
  margin: "2rem 0",
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: "0",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `1em`,
    transition: theme.transitions.create("width"),
  },
}));

const SearchBar = ({ inputText, data, renderItem }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) =>
    `${item.firstName} ${item.lastName} ${item.name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ width: "100%" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={inputText}
          inputProps={{ "aria-label": inputText }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Search>

      {searchQuery && (
        <div>
          <h4 style={{ margin: "1rem 0" }}>Результаты поиска</h4>
          {filteredData.length > 0 ? (
            filteredData.map((item) => renderItem(item))
          ) : (
            <p style={{ marginBottom: "2rem" }}>Ничего не найдено :(</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
