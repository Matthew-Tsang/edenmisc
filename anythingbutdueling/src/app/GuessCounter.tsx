import { Box, Typography } from "@mui/material";

type GuessCounterProps = {
    guessMax: number;
    guessCount: number;
};

export default function GuessCounter(props: GuessCounterProps) {
    return (
        <Box
            sx={{
                borderWidth: "4.5px",
                borderRadius: "14px",
                width: "130px",
                height: "75px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginTop: "-2px",
            }}
        >
            <Typography sx={{ fontSize: "45px", fontFamily: "Arial" }}>{`${props.guessCount} / ${props.guessMax}`}</Typography>
        </Box>
    );
}
