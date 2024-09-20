import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Container, Paper, Divider } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import Image from 'next/image';
import avatarImg from "../../../assets/spooky-man.png";

export default function CardPost({ postsData }) {
  function handleImg(imgPath: string) {
    const keyword = imgPath?.split('/');
    const keyImg = keyword[keyword.length - 1];
    return keyImg === 'undefined' ? avatarImg : imgPath;
  }

  function timeAgo(timestamp: string): string {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - time.getTime()) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };

    for (const key in intervals) {
      const interval = Math.floor(diffInSeconds / intervals[key as keyof typeof intervals]);
      if (interval >= 1) {
        return interval === 1 ? `1 ${key} ago` : `${interval} ${key}s ago`;
      }
    }
    return "just now";
  }

  return (
    <Container sx={{ p: 5, mt: 4 }} maxWidth="sm">
      {postsData.length > 0 ? (
        postsData.map((post: any) => (
          <Card key={post._id} sx={{ p: 3, mb: 3, boxShadow: 3, borderRadius: '12px' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }}>
                  <Image src={handleImg(post?.user?.photo)} alt={post?.user?.name} width={40} height={40} />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={post?.user?.name}
              subheader={timeAgo(post?.createdAt)}
              sx={{ textAlign: 'left' }}
            />

            <CardMedia
              component="img"
              height="200"
              image={post?.image}
              alt="Post image"
              sx={{ borderRadius: '8px', objectFit: 'cover' }}
            />

            <CardContent>
              <Typography variant="body1" sx={{ color: 'text.primary', mb: 2 }}>
                {post?.description || 'No description available.'}
              </Typography>
              <Divider />
            </CardContent>

            <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
              <Box>
                <IconButton aria-label="add to favorites" sx={{ '&:hover': { color: red[500] } }}>
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" sx={{ '&:hover': { color: grey[700] } }}>
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="comment">
                  <CommentIcon />
                </IconButton>
              </Box>
            </CardActions>

            {post?.comments?.length > 0 && (
              <Box sx={{ mt: 2 }}>
                {post.comments.map((comment: any) => (
                  <Paper
                    key={comment?._id}
                    elevation={1}
                    sx={{
                      p: 2,
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: grey[100],
                      borderRadius: '12px',
                    }}
                  >
                    <Avatar sx={{ mr: 2 }}>
                      <Image src={handleImg(comment?.commentCreator?.photo)} alt={comment?.commentCreator?.name} width={30} height={30} />
                    </Avatar>

                    <Box>
                      <Typography variant="body2" color="text.primary">
                        {comment?.commentCreator?.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                        {comment?.content}
                      </Typography>
                      <Typography variant="caption" sx={{ color: grey[500], mt: 1 }}>
                        {timeAgo(comment?.createdAt)}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>
            )}
          </Card>
        ))
      ) : (
        <Typography variant="body1" color="text.secondary">
          No posts available.
        </Typography>
      )}
    </Container>
  );
}
