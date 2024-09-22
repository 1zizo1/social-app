import React, { useState, useRef } from 'react';
import { TextField, Button, Paper, Typography, IconButton, Container, Dialog } from '@mui/material';
import { styled } from '@mui/system';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';

const CreatePostContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1a191965', // Dark background
    color: '#ffffff', // White text
    gap: '0.8rem',
    borderRadius: '12px',
    boxShadow: theme.shadows[5],
    transition: 'background-color 0.3s ease', // Smooth transition
}));

const InputField = styled(TextField)(({ theme }) => ({
    width: '100%',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#616161', // Darker border
        },
        '&:hover fieldset': {
            borderColor: '#ffffff', // Lighten on hover
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ffffff', // Light border when focused
        },
    },
    '& input': {
        color: '#ffffff', // White text in input
    },
}));

const CreatePostButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

const ImagePreviewContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    maxWidth: '100%',
    // maxHeight: '100%',
    overflow: 'hidden', // Ensures the image stays inside the container
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
}));

const ImagePreview = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '8px',
    objectFit: 'fill', // Ensures the image fills the container nicely
}));

const HiddenInput = styled('input')({
    display: 'none',
});

const UploadButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
    },
}));

export default function CreatePost({ handleCreatePost }) {
    const [postContent, setPostContent] = useState('');
    const [image, setImage] = useState(null);
    const [openDialog, setOpenDialog] = useState(false); // State to handle dialog open/close
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Preview the selected image
        }
    };

    const handleImageRemove = () => {
        setImage(null); // Clear the image preview
        fileInputRef.current.value = ''; // Reset the file input
    };

    const handleSubmit = () => {
        if (postContent.trim()) {
            handleCreatePost({ content: postContent, image }); // Pass both content and image
            setPostContent(''); // Clear input after submission
            setImage(null); // Clear the image preview
        }
    };

    const handleImageClick = () => {
        setOpenDialog(true); // Open the dialog when the image is clicked
    };

    const handleCloseDialog = () => {
        setOpenDialog(false); // Close the dialog
    };

    return (
        <>
            <Typography variant="h6" sx={{ p: 2 }} color="white">
                Create a New Post
            </Typography>
            <Container>
                <CreatePostContainer>
                    <InputField
                        variant="outlined"
                        placeholder="What's on your mind?"
                        multiline
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                    <label htmlFor="upload-button">
                        <HiddenInput
                            accept="image/*"
                            id="upload-button"
                            type="file"
                            onChange={handleImageChange}
                            ref={fileInputRef} // Connect the ref to the input
                        />
                        <UploadButton component="span">
                            <AddPhotoAlternateIcon style={{ color: 'white' }} />
                        </UploadButton>
                    </label>
                    <CreatePostButton onClick={handleSubmit} variant="contained">
                        Post
                    </CreatePostButton>
                </CreatePostContainer>
            </Container>
            <Container maxWidth="sm" sx={{ pb: 2 }}>
                {image && (
                    <ImagePreviewContainer>
                        <ImagePreview src={image} alt="Preview" onClick={handleImageClick} style={{ cursor: 'pointer' }} />
                        <IconButton
                            onClick={handleImageRemove}
                            sx={{
                                position: 'absolute',
                                top: 5,
                                right: 5,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </ImagePreviewContainer>
                )}
            </Container>

            {/* Dialog for showing larger image preview */}
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md">
                <ImagePreview src={image} alt="Large Preview" style={{ maxWidth: '100%', height: 'auto' }} />
            </Dialog>
        </>
    );
}
