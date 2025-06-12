import Image from "next/image";
import styles from "./styles.module.css";
import localFont from "next/font/local";
import { Grid, Icon, IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import CardleTutorial from "./CardleTutorial";
import SpellSelect from "./SpellSelect";
import GuessCounter from "./GuessCounter";
import SpellCard from "./SpellCard";
import { DailySpell, Guess, CompareSpell } from "./PseuoAPI/Gameplay";

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
                    <IconButton aria-label="index" size="small">
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
            </div>
            <div className={`flex flex-row justify-center items-center relative top-11`}>
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
                    <div className={`text-4xl absolute top-6 ${josefinSans.className}`}>Cardle</div>
                </Grid>
            </div>
            <Grid container spacing={0} sx={{ marginTop: "70px" }}>
                <Grid size={4.78} sx={{}}>
                    <SpellCard correctSpell={dailySpell} currentSpell={currentSpell}></SpellCard>
                </Grid>
                <Grid size={3} sx={{}}></Grid>
                <Grid size={2.62} sx={{ marginTop: "-125px" }}>
                    <GuessCounter guessCount={guessCount} guessMax={5}></GuessCounter>
                    <Grid sx={{ marginTop: "51px" }}>
                        <SpellSelect handleGuess={handleGuess}></SpellSelect>
                    </Grid>
                </Grid>
                <Grid size={1} sx={{}}></Grid>
            </Grid>
        </div>
    );
}
