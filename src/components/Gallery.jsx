import React, { useState } from "react";
import Styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import GalleryImage from "./GalleryImage";

export default function Header() {

    const types = ['image/png', 'image/jpeg', 'image/jpg'];
    const [uploadPicture, setUploadPicture] = useState("");
    const [error, setError] = useState(null);
    const [pictures, setPictures] = useState([]);

    function handleChange(e) {
      const selectedImage = e.target.files[0];
      console.log("Selected Images >>>", selectedImage);
      
      if (selectedImage && types.includes(selectedImage.type)) {
          setUploadPicture(selectedImage);
          setError('');
          setPictures(prevItem => {
            return [...prevItem, {
              name: selectedImage.name,
              url: URL.createObjectURL(new Blob([selectedImage], {type: selectedImage.type})),
            }]
          }) 
      } else {
          setUploadPicture(null);
          setError('Select a valid image file (png, jpeg, jpg)');
      }
    }
    return <GalleryContainer>
        {/* header */}
        <HeaderContent>
          <h1>Your Pictures</h1>
          <p>Visit yours photos, Upload new photos anytime you want.</p>
          <UploadForm>
            <input onChange={handleChange} accept="image/*" id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
                <IconButton color="secondary" aria-label="upload picture" component="span">
                  <AddIcon />
                </IconButton>
            </label>
          </UploadForm>
        </HeaderContent>

        {/* error output */}
        <ErrorContainer>
            {error && <div>{error}</div>}
        </ErrorContainer>

        {/* Gallery Uploaded Images */}
        <GalleryImage pictures={pictures} />
    </GalleryContainer>
}

const GalleryContainer = Styled.div`
    text-align: center;
`;

const HeaderContent = Styled.div``;

const UploadForm = Styled.div`
  > input {
    display: none;
  }

  > label > .MuiButtonBase-root {
    margin-top: 10px;
    color: #FFB319;
    border: 1px solid #FFB319;
  }
`;

const ErrorContainer = Styled.div``;