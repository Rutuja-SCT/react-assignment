import { ForkLeft } from '@mui/icons-material'
import { ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const SidebarSubItem = ({text}) => {
  return (
    <ListItem sx={{ display: "flex", alignItems: "end", justifyContent:"center"}}>
    <ListItemText
      primary={
        <Typography sx={{ display: "flex", alignItems: "end", justifyContent:"center",textAlign: "center",borderLeft: "2px solid gray",borderRadius:"50%",padding:0,marginTop:0,marginBottom:0 }}>
          {text}
        </Typography>
      }
    />
  </ListItem>
  )
}

export default SidebarSubItem
