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
  Divider,
  Chip,
} from "@mui/material";
import { ChatBubbleOutline, FavoriteBorder, Link as LinkIcon } from "@mui/icons-material";
import { CommentsData } from "../../../../utils/data";


const Comments = () => {
  return (
         <Card sx={{ mb: 2 }}>
         <CardContent>
           <Typography variant="h6" fontWeight="bold">
             Comments
           </Typography>
           <List>
             {CommentsData.map((comment) => (
               <React.Fragment key={comment.id}>
                 <ListItem alignItems="flex-start">
                   <ListItemAvatar>
                     <Avatar src={comment.avatar} />
                   </ListItemAvatar>
                   <ListItemText
                     primary={
                       <Typography fontWeight="bold">{comment.name}</Typography>
                     }
                     secondary={
                       <>
                         <Typography variant="caption" color="textSecondary">
                           On <strong>{comment.product}</strong>
                         </Typography>
                         <Typography variant="body2">{comment.comment}</Typography>
                         <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                           <ChatBubbleOutline fontSize="small" />
                           <FavoriteBorder fontSize="small" />
                           <LinkIcon fontSize="small" />
                         </Box>
                       </>
                     }
                   />
                 </ListItem>
                 <Divider />
               </React.Fragment>
             ))}
           </List>
           <Button variant="outlined" fullWidth sx={{ mt: 1 }}>
             View all
           </Button>
         </CardContent>
       </Card>
  )
}

export default Comments
