import React, { useState } from 'react'

import { Card as CardMUI, Grid } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { useDropzone } from 'react-dropzone'

import Card from '../../components/card/Card';
import CardHeader from '../../components/card/CardHeader';

import './UploadImages.css'

const UploadImages = () => {
  const [images, setImages] = useState<Array<string>>([])
  const [current, setCurrent] = useState<number>(0);
  const nextSlide = () => setCurrent(current === images.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? images.length - 1 : current - 1);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImages([...images,
      ...acceptedFiles.map((image) => URL.createObjectURL(image) )
      ])
    }
  })

  const arrayImages = images.map((image, index) => (
    <div
      className={index === current ? 'slide active' : 'slide'}
      key={index}
    >
      {index === current && <img src={image} alt="preview" className="image" />}
    </div>
  ))

  return (
    <Grid container spacing={2}>
      <Card title="Drag and Drop" subtitle="Drop here all the images you want" />
      <Grid item sm={12} md={6} lg={6} >
        <CardMUI>
          <CardHeader
            title="Drag the images you want here"
            subtitle=""
          />
          <div {...getRootProps()} >
            <input {...getInputProps} style={{ backgroundColor: '#4f67ef', height: '150px', width: '100%' }} />
          </div>
        </CardMUI>
      </Grid>
      <Grid item sm={12} md={6} lg={6} >
        <CardMUI>
          <CardHeader
            title="Images"
            subtitle="Here you can see all your images"
          />
          <section className='slider'>
            <ArrowBackIosIcon className='left-arrow' onClick={prevSlide} />
            <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} />
            {arrayImages}
          </section>
        </CardMUI>
      </Grid>
    </Grid>
  )
}

export default UploadImages