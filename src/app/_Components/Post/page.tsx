import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Container } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment'
import Image from 'next/image';
export default function CardPost({postsData}) {
    console.log(postsData);
    

  return <>
  
  <Container sx={{p:5, mt:4}} maxWidth='sm'>
{postsData.length >0 ? postsData.map((post:any)=><Card key={post._id} sx={{p:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           <Image src={post?.user?.photo} alt='zoz' width={30} height={30} />

          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post?.user?.name}
        subheader={post?.createdAt}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="194"
        image={post?.image}
        alt="Paella dish"
      />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
       <IconButton aria-label="comment">
         <CommentIcon/>
       </IconButton>
      </CardActions>
{post?.comments?.map((comment)=><Box key={comment?._id} sx={{display:'flex',gap:'3',p:'1' ,my:'0.5rem'}}>
        <Avatar alt='user' src={comment?.commentCreator?.Photo}>
       
        </Avatar>
        <Typography variant="body1" color="initial" sx={{p:'1rem' ,display:'flex',alignItems:'center', justifyContent:'start',mx:2 ,backgroundColor:'#ccc',borderRadius:'2rem'}}>
        {comment?.content}
        </Typography>
     </Box>)}
    </Card>
) :''}

 
  </Container>
  </>
}
