import { Box, Dialog, IconButton, Paper, Typography, useTheme } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Image from "next/image";

type TutorialProps = {
    open: boolean;
    handleClose: (close: boolean) => void;
};

export default function CardleTutorial(props: TutorialProps) {
    const theme = useTheme();

    return (
        <Dialog open={props.open} onClose={() => props.handleClose(false)} fullWidth maxWidth="lg">
            <Paper
                elevation={3}
                sx={{
                    height: "80vh",
                    width: "lg",
                    backgroundImage: "url(/purple-circle-bg.png)",
                    backgroundRepeat: "repeat",
                    backgroundSize: "auto 100vh",
                    backgroundPosition: "center center",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    verticalAlign: "top",
                    display: "inline-block",
                }}
            >
                <div className={`flex justify-end`}>
                    <IconButton onClick={() => props.handleClose(false)}>
                        <CloseOutlinedIcon style={{ color: "white", fontSize: "42px", stroke: "black", strokeWidth: "0.6px" }} />
                    </IconButton>
                </div>
                <Typography variant="h2" color="white" sx={{ marginTop: "-20px", textShadow: theme.shadowing.shadowOutline, fontFamily: "JosefinSans" }}>
                    How to Play
                </Typography>
                <Typography variant="h4" color="white" sx={{ marginTop: "3px", textShadow: theme.shadowing.shadowOutline, fontFamily: "JosefinSans" }}>
                    Guess the spell in 5 tries
                </Typography>
                <Typography variant="h5" color="white" sx={{ marginTop: "20px", textShadow: theme.shadowing.shadowOutline, fontFamily: "JosefinSans" }}>
                    The color of each aspect of the spell will indicate how close your guess was to the spell.
                </Typography>
                <Box
                    sx={{
                        marginTop: "25px",
                        marginLeft: "143px",
                        boxShadow: theme.shadowing.shadowOutlineBlur,
                        borderColor: "white",
                        width: "400px",
                        height: "343px",
                    }}
                >
                    <Image src="/tutorialbeam.png" alt="tutorial image" width={1000} height={500} />
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        top: "245px",
                        left: "550px",
                        width: "560px",
                    }}
                >
                    <Typography variant="h6" color="white" display="block" sx={{ marginTop: "10px", textShadow: theme.shadowing.shadowOutline, whiteSpace: "pre-line", lineHeight: "35px", fontFamily: "JosefinSans" }}>
                        {`Green means that this aspect is correct.\n`}
                        {`White means that this aspect is incorrect.\n`}
                        {`Yellow means that this aspect is "close".\n\n`}
                        {`A number being "close" means it was off by one.\n`}
                        {`A word being "close" means it was in the same category.\n`}
                        {`You can check these categories in the index.`}
                    </Typography>
                </Box>
            </Paper>
        </Dialog>
    );
}
