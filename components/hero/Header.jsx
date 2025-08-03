'use client'

import * as React from 'react';
import { Box, Checkbox, Chip, Divider, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { grey } from '@mui/material/colors';
import { PiSwordBold } from "react-icons/pi";
import { TbTower } from "react-icons/tb";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 72;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const baseRoles = [
  'Fighter',
  'Assasins',
  'Mage',
  'Tank',
  'Marksman',
  'Support',
];

const roles = ['All', ...baseRoles];

const baseLanes = [
  'Jungler',
  'Mid',
  'Exp',
  'Gold',
  'Roam',
];

const lanes = ['All', ...baseLanes];

const ItemFilterChip = (props) => (
  <Chip size="small" color="primary" {...props} />
);

export default function Header() {

  const [roleSelected, setRoleSelected] = React.useState([]);
  const [laneSelected, setLaneSelected] = React.useState([]);

  const handleRoleChange = (event) => {
    const {
      target: { value },
    } = event;
  
    let selected = typeof value === 'string' ? value.split(',') : value;
  
    if (selected.includes("All")) {
      const allSelected = roleSelected.length === baseRoles.length;
      setRoleSelected(allSelected ? [] : baseRoles);
    } else {
      setRoleSelected(selected.filter((value) => value !== "All"));
    }
  };
  
  const handleLaneChange = (event) => {
    const {
      target: { value },
    } = event;

    let selected = typeof value === 'string' ? value.split(',') : value;

    if (selected.includes("All")) {
      const allSelected = laneSelected.length === baseLanes.length;
      setLaneSelected(allSelected ? [] : baseLanes);
    } else {
      setLaneSelected(selected.filter((value) => value !== "All"));
    }
  };

  const isAllSelected = roleSelected.length === baseRoles.length;
  const isAllLaneSelected = laneSelected.length === baseLanes.length;

  return (
    <Box>
      <FormControl
        sx={{ mr: 1, minWidth: 250 }}
        variant='outlined'
        size='small'>
        <InputLabel id="role-filter">Role</InputLabel>
        <Select
          sx={{height: 42}}
          labelId="role-filter"
          id="role-select-filter"
          multiple
          value={roleSelected}
          onChange={handleRoleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" 
              startAdornment={
                <InputAdornment position="start">
                  <PiSwordBold fontSize='large'/>
                </InputAdornment>
              }
          />}
          renderValue={(selected) =>
            isAllSelected ? (
              <ItemFilterChip label="All" />
            ) : (
              <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <ItemFilterChip key={value} label={value} />
                ))}
              </Box>
            )
          }
          MenuProps={MenuProps}
        >
          {roles.map((role) => {
            const isChecked = role === "All"
                ? isAllSelected
                : roleSelected.indexOf(role) > -1;

            return (
              <MenuItem key={role} value={role} sx={{ p: 0 }}>
                <Checkbox checked={isChecked} size="small" />
                {role}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl
        sx={{ width: 250 }}
        variant="outlined"
        size="small"
      >
        <InputLabel id="lane-filter">Lane</InputLabel>
        <Select
          sx={{height: 42}}
          labelId="lane-filter"
          id="lane-select-filter"
          multiple
          value={laneSelected}
          onChange={handleLaneChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" 
            startAdornment={
              <InputAdornment position="start">
                <TbTower fontSize='large'/>
              </InputAdornment>
            }
        />}
          renderValue={(selected) =>
            isAllLaneSelected ? (
              <ItemFilterChip label="All"/>
            ) : (
              <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <ItemFilterChip key={value} label={value}/>
                ))}
              </Box>
            )
          }
          MenuProps={MenuProps}
        >
          {lanes.map((item) => {
            const isChecked =
              item === "All"
                ? isAllLaneSelected
                : laneSelected.indexOf(item) > -1;

            return (
              <MenuItem key={item} value={item} sx={{ p: 0 }}>
                <Checkbox checked={isChecked} size="small" />
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Divider sx={{marginY: 2}} />
    </Box>
  )
  
}