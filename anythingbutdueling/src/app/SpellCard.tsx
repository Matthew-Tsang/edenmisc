import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export default function SpellCard(props: any) {
    // const cardObject = hanasFunction(props.correctSpell, props.currentSpell);
    const theme = useTheme();

    let spellFontSize = "36px";
    if (props.currentSpell === "Bouncing Blade") spellFontSize = "34px";
    if (props.currentSpell === "Dimension Sword") spellFontSize = "30px";

    return (
        <Grid container>
            <Grid sx={{ marginTop: "-25px" }}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "230px",
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
                            color: "rgb(0, 255, 68)",
                            fontFamily: "JosefinSans",
                        }}
                    >
                        0
                    </Typography>
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        top: "250px",
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
                        {props.currentSpell}
                    </Typography>
                </Box>
                <Image src="/spellcardshadow.png" alt="current spell" width={446} height={625} />
                <Box sx={{ position: "absolute", top: "715px", left: "315px", display: "flex", justifyContent: "center", textAlign: "center", width: "100px", height: "100px" }}>
                    <Typography
                        sx={{
                            fontSize: "50px",
                            color: "rgb(255, 255, 255)",
                            fontFamily: "JosefinSans",
                        }}
                    >
                        12
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        position: "absolute",
                        fontSize: "48px",
                        top: "710px",
                        left: "55px",
                        color: "yellow",
                        fontFamily: "UbuntuRegular",
                    }}
                >
                    Missile
                </Typography>
            </Grid>
            <div className="grid gap-0">
                <div>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "275px",
                            left: "452px",
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
                            }}
                        >
                            Frost
                        </Typography>
                    </Box>
                    <Image src="/effectbox.png" alt="current spell" width={290} height={64} />
                </div>
                <div>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "395px",
                            left: "452px",
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
                                color: "yellow",
                            }}
                        >
                            Change Spell Stat
                        </Typography>
                    </Box>
                    <Image src="/effectbox.png" alt="current spell" width={290} height={64} />
                </div>
                <div>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "518px",
                            left: "452px",
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
                                color: "rgb(0, 255, 68)",
                            }}
                        >
                            Poison
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
                    <Typography sx={{ fontSize: "25px", marginTop: "20%" }}>{"has half hit"}</Typography>
                    <Typography sx={{ fontSize: "25px", marginTop: "10%", color: "rgb(0, 255, 68)" }}>has multiple damages</Typography>
                </Box>
            </div>
        </Grid>
    );
}
