'use client'

import Image from "next/image";
import styles from "./styles.module.css";
import localFont from "next/font/local";
import { Grid, Icon, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import CardleTutorial from "./CardleTutorial";

const josefinSans = localFont({
  src: "../../public/fonts/JosefinSans-Regular.ttf",
})

// const ubuntuRegular = localFont({
//   src: "../../public/fonts/Ubuntu-Regular.ttf",
// })

// const ubuntuBold = localFont({
//   src: "../../public/fonts/Ubuntu-Bold.ttf",
// })

export default function CardlePage() {

  const [tutorialOpen, setTutorialOpen] = useState(false);

  return (
    <div>
    <div className={styles.bgWrap}>
      <Image
        src="/backdrop.png"
        alt="osfe backdrop"
        fill
        sizes="100vw"
        quality={100}
        style={{
          objectFit: "cover",
        }}
        />
      </div>
      <CardleTutorial
        open={tutorialOpen}
        handleClose={setTutorialOpen}
      />
      <div className={`flex justify-end relative top-3 right-5`}>
      <Tooltip title="Index">
      <IconButton aria-label="index" size="small">
        <Icon sx={{ fontSize: 40}}>
          <Image src="/tutorials-icon.png" alt="test" width={40} height={40}/> 
        </Icon>
      </IconButton>
      </Tooltip>
      <Tooltip title="Help">
      <IconButton aria-label="tutorial" size="small" onClick={() => setTutorialOpen(true)}>
        <Icon sx={{ fontSize: 40}}>
          <Image src="/wonder.webp" alt="test" width={40} height={40}/> 
        </Icon>
      </IconButton>
      </Tooltip>
      </div>
      <div className={`flex flex-row justify-center items-center relative top-7`}>
        <Grid container
          sx={{
            backgroundImage: "url('/in game button icon.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: 'calc(75vw)',
            height: 'calc(30vh)',
            maxWidth: '460px',
            maxHeight: '102px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className={`text-5xl relative top-1 ${josefinSans.className}`}>
            Cardle
          </div>
      </Grid>
      </div>
    </div>
  );
}
