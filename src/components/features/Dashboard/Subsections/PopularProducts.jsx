import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
} from "@mui/material";
import { ProductsData } from "../../../../utils/data";

const PopularProducts = () => {
  return (
    <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            Popular products
          </Typography>
          <List>
            {ProductsData.map((product) => (
              <ListItem key={product.id}>
                <ListItemAvatar>
                  <Avatar src={product.image} variant="rounded" />
                </ListItemAvatar>
                <ListItemText
                  primary={product.name}
                  secondary={
                    <Typography variant="subtitle2">
                      <strong>{product.price}</strong>
                    </Typography>
                  }
                />
                <Chip
                  label={product.status}
                  color={
                    product.status === "Active"
                      ? "success"
                      : product.status === "Pending"
                      ? "warning"
                      : "error"
                  }
                  size="small"
                />
              </ListItem>
            ))}
          </List>
          <Button variant="outlined" fullWidth>
            All products
          </Button>
        </CardContent>
      </Card>
  )
}

export default PopularProducts
