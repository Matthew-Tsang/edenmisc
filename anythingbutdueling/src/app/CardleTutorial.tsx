import { Dialog, Paper, Typography, useTheme } from "@mui/material";

type TutorialProps = {
    open: boolean,
    handleClose: (close: boolean) => void
}

export default function CardleTutorial(props: TutorialProps) {

    const theme = useTheme();

    return(
        <Dialog
        open={props.open}
        onClose={() => props.handleClose(false)}
        fullWidth
        maxWidth="lg"
        >
          <Paper elevation={3} sx={{
            height: "80vh",
            width: "lg",
            backgroundImage: "url(/purple-circle-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 100vh",
            backgroundPosition: "center center",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "top",
            display: "block"
          }}>
          <Typography variant="h2" color="white" sx={{marginTop: "15px", textShadow: theme.shadowing.shadowOutline, fontFamily: "JosefinSans"}}>How to Play</Typography>
          <Typography variant="h4" color="white" sx={{textShadow: theme.shadowing.shadowOutline, fontFamily: "JosefinSans"}}>Guess the spell in 5 tries!</Typography>
          <Typography variant="h5" color="white" sx={{marginTop: "20px", textShadow: theme.shadowing.shadowOutline, fontFamily: "JosefinSans"}}>
            The color of each aspect of the spell will indicate how close your guess was to the spell.
          </Typography>
          <Typography variant="h5" color="white" display="block" sx={{marginTop: "25px", textShadow: theme.shadowing.shadowOutline, whiteSpace: 'pre-line', lineHeight: "35px", fontFamily: "JosefinSans"}}>
            {`Green means that the spell also has this aspect.\n`}
            {`Red means that the spell does not have this aspect.\n`}
            {`Yellow means that the spell has an aspect that is close to this aspect.\n`}
            {`For Damage and Mana Cost, being "close" means your guess was only 1 off.\n`}
            {`For Brands, Effects, and Traits, being "close" means your guess was in the same subcategory of that aspect.\n`}
            {`For finding out which Brands, Effects, and Traits belong in what subcategories, feel free to check the index.`}
          </Typography>
          </Paper>
      </Dialog>
    )
}