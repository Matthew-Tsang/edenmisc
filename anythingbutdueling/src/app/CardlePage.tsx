import Image from "next/image";
import styles from "./styles.module.css";
import localFont from "next/font/local";
import { Box, Grid, Icon, IconButton, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CardleTutorial from "./CardleTutorial";
import SpellSelect from "./SpellSelect";
import GuessCounter from "./GuessCounter";
import SpellCard from "./SpellCard";
import { DailySpell, Guess, CompareSpell } from "./PseuoAPI/Gameplay";
import CategoryIndex from "./CategoryIndex";

const josefinSans = localFont({
    src: "../../public/fonts/JosefinSans-Regular.ttf",
});

// const ubuntuRegular = localFont({
//   src: "../../public/fonts/Ubuntu-Regular.ttf",
// })

// const ubuntuBold = localFont({
//   src: "../../public/fonts/Ubuntu-Bold.ttf",
// })

export default function CardlePage() {
    const [tutorialOpen, setTutorialOpen] = useState(false);
    const [indexOpen, setIndexOpen] = useState(false);
    const [indexPage, setIndexPage] = useState(true);
    const [guessCount, setGuessCount] = useState(0);
    const [dailySpell, setDailySpell] = useState("");
    const [currentSpell, setCurrentSpell] = useState(new Guess());

    useEffect(() => {
        setDailySpell(DailySpell());
    }, []);

    const handleGuess = (spell: string) => {
        setGuessCount(guessCount + 1);
        setCurrentSpell(CompareSpell(dailySpell, spell));
    };

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
            <CardleTutorial open={tutorialOpen} handleClose={setTutorialOpen} />
            <div className={`flex justify-end relative top-3 right-5`}>
                <Tooltip title="Index">
                    <IconButton aria-label="index" size="small" onClick={() => setIndexOpen(!indexOpen)}>
                        <Icon sx={{ fontSize: 40 }}>
                            <Image src="/tutorials-icon.png" alt="test" width={40} height={40} />
                        </Icon>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Help">
                    <IconButton aria-label="tutorial" size="small" onClick={() => setTutorialOpen(true)}>
                        <Icon sx={{ fontSize: 40 }}>
                            <Image src="/wonder.webp" alt="test" width={40} height={40} />
                        </Icon>
                    </IconButton>
                </Tooltip>
                <Box sx={{ position: "absolute", top: "50px", right: "-15px", height: "150px", width: { xs: "39%", md: "32%", laptop: "32%", desktop: "24%" } }}>
                    <CategoryIndex open={indexOpen} page={indexPage} handlePage={setIndexPage} />
                </Box>
            </div>
            {/* <div className={`flex flex-row justify-center items-center relative top-11`}>
                <Grid
                    container
                    sx={{
                        backgroundImage: "url('/in game button icon.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        width: "calc(75vw)",
                        height: "calc(30vh)",
                        maxWidth: "370px",
                        maxHeight: "102px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div className={`text-4xl relative bottom-2 ${josefinSans.className}`}>Cardle</div>
                </Grid>
            </div> */}
            <Box position="relative" sx={{ width: "100%", height: "102px", zIndex: "-1" }}>
                <Box position="absolute" sx={{ width: "clamp(0px, 55vw, 370px)", height: "102px", top: "45%", left: { xs: "5%", tablet: "9%", laptop: "calc(50% - clamp(0px, 55vw, 370px)*0.5)" } }}>
                    <Image src="/in game button icon.png" alt="Cardle title" height={102} width={370}></Image>
                </Box>
                <Box
                    position="absolute"
                    sx={{
                        width: "clamp(0px, 55vw, 370px)",
                        height: "12vw",
                        maxHeight: "82px",
                        top: "50%",
                        left: { xs: "5%", tablet: "9%", laptop: "calc(50% - clamp(0px, 55vw, 370px)*0.5)" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ fontSize: "clamp(0px, 7vw, 50px)", fontFamily: "JosefinSans" }}>Cardle</Typography>
                </Box>
            </Box>
            <Grid container spacing={0} sx={{ marginTop: "70px", position: "relative" }}>
                <Grid size={{ sm: 12, laptop: 7.8, desktop: 7.8 }} sx={{}}>
                    <SpellCard correctSpell={dailySpell} currentSpell={currentSpell}></SpellCard>
                </Grid>
                <Grid minHeight={100} size={{ xs: 12, desktop: 4.2 }} sx={{ paddingLeft: { xs: "10%", md: "20%", laptop: "25%", desktop: "0%" }, marginLeft: { xs: "0px" }, marginTop: { xs: "50px", desktop: "-123px" } }}>
                    <GuessCounter guessCount={guessCount} guessMax={5}></GuessCounter>
                    <Grid sx={{ marginLeft: { xs: "200px", desktop: "0px" }, marginTop: { xs: "-75px", desktop: "51px" } }}>
                        <SpellSelect disabled={guessCount >= 5} handleGuess={handleGuess}></SpellSelect>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
