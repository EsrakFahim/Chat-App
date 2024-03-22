import styled from '@emotion/styled';
import { InputBase, alpha, useTheme } from '@mui/material';
import { FunnelSimple, MagnifyingGlass } from 'phosphor-react';
import React from 'react';


const Search = styled("div")(({ theme }) => ({
      position: 'relative',
      borderRadius: 20,
      background: alpha(theme.palette.primary.main,0.1),
      margin: theme.spacing(1,0),
      width: "100%"
}));

const SearchIconContainer = styled("div")(({ theme }) => ({
      padding: theme.spacing(2, 1),
      position: 'absolute',
      height: '100%',
      pointerEvent: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
}));

const SearchInputBar = styled(InputBase)(({ theme }) => ({
      "& .MuiInputBase-input": {
            padding: theme.spacing(1, 0, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(2)})`,
            width: '100%'
      }
}));

const SearchBar = () => {
      const theme = useTheme()
      console.log(theme)
      return (
            <>
                  <Search 
                        
                  >
                        <SearchIconContainer>
                              <MagnifyingGlass color={`${theme.palette.primary.main}`} />
                        </SearchIconContainer>
                        <SearchInputBar
                              inputProps={{ "aria-label": "search" }}
                              placeholder="Search"
                              sx={{color: theme.palette.mode === "light" ? '#333' : '#f2f2f2'}}
                        />
                        <FunnelSimple color={`${theme.palette.primary.main}`}  />
                  </Search>
            </>
      );
};

export default SearchBar;