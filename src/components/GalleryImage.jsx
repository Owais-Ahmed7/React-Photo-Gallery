import * as React from "react";
import Styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { motion } from "framer-motion";

export default function GalleryImage({ pictures }) {
    // console.log("gallery pictures >>>", pictures);
    return  <GalleryContainer> 
                    <Grid container spacing={5}>
                        {pictures?.map((image, index) => {
                            return <Grid key={index} item lg={4} md={4} sm={6} xs={12}> 
                                <motion.div whileHover={{opacity: 0.8}} layout > 
                                    <CardMedia
                                      component="img"
                                      alt={image.name}
                                      height="300"
                                      image={image.url}
                                      title={image.name}
                                    />
                                </motion.div>
                            </Grid>
                        }
                        )}
                    </Grid>
        </GalleryContainer>
}

const GalleryContainer = Styled.div`
    background-color: #F0E5CF;
    display: flex;
    margin: 50px 100px;
`;