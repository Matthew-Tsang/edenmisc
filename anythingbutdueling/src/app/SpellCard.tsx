import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { Guess } from "./PseuoAPI/Gameplay";

export default function SpellCard(props: { correctSpell: string; currentSpell: Guess }) {
    // const cardObject = hanasFunction(props.correctSpell, props.currentSpell);
    const theme = useTheme();

    let spellFontSize = "clamp(1rem, 7.8vw, 36px)";
    if (props.currentSpell.name === "Bouncing Blade") spellFontSize = "clamp(1rem, 7.37vw, 34px)";
    if (props.currentSpell.name === "Dimension Sword") spellFontSize = "clamp(1rem, 6.5vw, 30px)";

    return (
        <Grid container position="relative">
            <Grid sx={{ marginTop: "-25px", position: "relative" }}>
                <Box sx={{ position: "relative" }}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "5.2%",
                            left: "5.6%",
                            width: "22.4%",
                            height: "16%",
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "clamp(1rem, 13vw, 3.7rem)",
                                // color: "rgb(0, 255, 68)",
                                color: `${props.currentSpell.mana.hex}`,
                                fontFamily: "JosefinSans",
                            }}
                        >
                            {props.currentSpell.mana.string}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "8.5%",
                            left: "37%",
                            width: "60.53%",
                            height: "6.4%",
                            display: "flex",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: `${spellFontSize}`,
                                fontFamily: "JosefinSans",
                            }}
                        >
                            {props.currentSpell.name}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "13.8%",
                            left: "23.5%",
                            height: "38.4%",
                            width: "53.8%",
                        }}
                    >
                        <Image src={`/Spells/${props.currentSpell.spellID}.png`} alt={`${props.currentSpell.name} spell icon`} fill={true} />
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            opacity: "15%",
                        }}
                    >
                        <Image src={`/brands/${props.currentSpell.brand.string}.png`} alt="current spell" width={446} height={625} />
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                        }}
                    >
                        <Image src={`/border-spell.png`} alt="current spell" width={446} height={625} />
                    </Box>
                    <Image src="/spellcardshadow.png" alt="current spell" width={446} height={625} />
                    <Box sx={{ position: "absolute", top: "82.5%", left: "70.6%", display: "flex", justifyContent: "center", textAlign: "center", width: "22.4%", height: "16%" }}>
                        <Typography
                            sx={{
                                fontSize: "clamp(1rem, 10.83vw, 50px)",
                                color: `${props.currentSpell.damage.hex}`,
                                fontFamily: "JosefinSans",
                            }}
                        >
                            {props.currentSpell.damage.string}
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            position: "absolute",
                            fontSize: "clamp(1rem, 10.4vw, 48px)",
                            top: "82.5%",
                            left: "12.3%",
                            color: `${props.currentSpell.brand.hex}`,
                            fontFamily: "UbuntuRegular",
                        }}
                    >
                        {props.currentSpell.brand.string === "Default" ? "" : props.currentSpell.brand.string}
                    </Typography>
                </Box>
            </Grid>
            <div className="grid gap-0">
                <div className="relative">
                    <Box
                        sx={{
                            position: "absolute",
                            top: "55px",
                            left: "0px",
                            width: "280px",
                            height: "55px",
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "30px",
                                fontFamily: "UbuntuBold",
                                color: `${props.currentSpell.effects[0].hex}`,
                            }}
                        >
                            {props.currentSpell.effects[0].string}
                        </Typography>
                    </Box>
                    <Image src="/effectbox.png" alt="current spell" width={290} height={64} />
                </div>
                <div className="relative">
                    <Box
                        sx={{
                            position: "absolute",
                            top: "55px",
                            left: "0px",
                            width: "280px",
                            height: "55px",
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "30px",
                                fontFamily: "UbuntuBold",
                                color: `${props.currentSpell.effects[1].hex}`,
                            }}
                        >
                            {props.currentSpell.effects[1].string}
                        </Typography>
                    </Box>
                    <Image src="/effectbox.png" alt="current spell" width={290} height={64} />
                </div>
                <div className="relative">
                    <Box
                        sx={{
                            position: "absolute",
                            top: "55px",
                            width: "280px",
                            height: "55px",
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "30px",
                                fontFamily: "UbuntuBold",
                                color: `${props.currentSpell.effects[2].hex}`,
                            }}
                        >
                            {props.currentSpell.effects[2].string}
                        </Typography>
                    </Box>
                    <Image src="/effectbox.png" alt="current spell" width={290} height={64} />
                </div>
                <Box
                    sx={{
                        borderWidth: "4.5px",
                        borderRadius: "14px",
                        width: "290px",
                        height: "220px",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "block",
                        marginTop: "-2px",
                        borderColor: "rgba(0,0,0,0.2)",
                        backgroundColor: "rgba(0,0,0,0.3)",
                        textAlign: "center",
                        verticalAlign: "middle",
                    }}
                >
                    <Typography sx={{ fontSize: "25px", marginTop: "20%", color: `${props.currentSpell.traits[0].hex}` }}>{props.currentSpell.traits[0].string}</Typography>
                    <Typography sx={{ fontSize: "25px", marginTop: "10%", color: `${props.currentSpell.traits[1].hex}` }}>{props.currentSpell.traits[1].string}</Typography>
                </Box>
            </div>
        </Grid>
    );
}
