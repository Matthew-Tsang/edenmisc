import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { Guess } from "./PseuoAPI/Gameplay";

export default function SpellCard(props: { correctSpell: string; currentSpell: Guess }) {
    // const cardObject = hanasFunction(props.correctSpell, props.currentSpell);
    const theme = useTheme();

    let spellFontSize = "36px";
    if (props.currentSpell.name === "Bouncing Blade") spellFontSize = "34px";
    if (props.currentSpell.name === "Dimension Sword") spellFontSize = "30px";

    return (
        <Grid container position="relative">
            <Grid sx={{ marginTop: "-25px", position: "relative" }}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "33px",
                        left: "25px",
                        width: "100px",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "60px",
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
                        top: "53px",
                        left: "165px",
                        width: "270px",
                        height: "40px",
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
                        top: "86px",
                        left: "104px",
                        width: "240px",
                        height: "240px",
                    }}
                >
                    <Image src={`/Spells/${props.currentSpell.spellID}.png`} alt={`${props.currentSpell.name} spell icon`} width={256} height={256} />
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "446px",
                        height: "625px",
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
                        width: "446px",
                        height: "625px",
                    }}
                >
                    <Image src={`/border-spell.png`} alt="current spell" width={446} height={625} />
                </Box>
                <Image src="/spellcardshadow.png" alt="current spell" width={446} height={625} />
                <Box sx={{ position: "absolute", top: "495px", left: "315px", display: "flex", justifyContent: "center", textAlign: "center", width: "100px", height: "100px" }}>
                    <Typography
                        sx={{
                            fontSize: "50px",
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
                        fontSize: "48px",
                        top: "490px",
                        left: "55px",
                        color: `${props.currentSpell.brand.hex}`,
                        fontFamily: "UbuntuRegular",
                    }}
                >
                    {props.currentSpell.brand.string === "Default" ? "" : props.currentSpell.brand.string}
                </Typography>
            </Grid>
            <div className="grid gap-0">
                <div>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "55px",
                            left: "448px",
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
                <div>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "175px",
                            left: "448px",
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
                <div>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "298px",
                            left: "448px",
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
