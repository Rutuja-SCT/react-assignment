import { Button } from '@mui/material'
import Add from "@mui/icons-material/Add";
import React from 'react'

const AddProduct = () => {
  return (
    <Button
    variant="contained"
    startIcon={<Add />}
    sx={{
      backgroundColor: "#555", // Button background color
      color: "white",
      borderRadius: "20px",
      textTransform: "none",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#777",
      },
    }}
  >
    Add product
  </Button>
  )
}

export default AddProduct
