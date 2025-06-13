import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

export default function CategoryIndex(props: { open: boolean; page: boolean; handlePage: (flip: boolean) => void }) {
    const displayVal = props.open ? "inline-block" : "none";
    const displayPage = props.page ? "" : "none";
    const displayPage2 = props.page ? "none" : "";

    return (
        <Box sx={{ borderWidth: "4px", display: displayVal, backgroundColor: "rgba(0,0,0,0.3)", height: "100%", width: "100%", borderRadius: "14px", borderColor: "white", alignContent: "center", justifyContent: "center", verticalAlign: "middle" }}>
            <Box sx={{ height: "95%", marginTop: "3px", verticalAlign: "middle", display: displayPage }}>
                <Typography sx={{ fontSize: "1vw", marginLeft: "15px" }}>
                    <Box component="span" fontWeight="bold" color="#FCC44B">
                        Status:
                    </Box>
                    {" [Poison, Frost, Root, Mark, Remove Status]\n"}
                </Typography>
                <Typography sx={{ fontSize: "1vw", marginLeft: "15px" }}>
                    <Box component="span" fontWeight="bold" color="#FCC44B">
                        Displacement:
                    </Box>
                    {" [Push, Pull, Teleport, Drag, Lower, Lift, Knockback]\n"}
                </Typography>
                <Typography sx={{ fontSize: "1vw", marginLeft: "15px" }}>
                    <Box component="span" fontWeight="bold" color="#FCC44B">
                        Tile:
                    </Box>
                    {" [Break, Crack, Flame]\n"}
                </Typography>
                <Typography sx={{ fontSize: "1vw", marginLeft: "15px" }}>
                    <Box component="span" fontWeight="bold" color="#FCC44B">
                        Mana:
                    </Box>
                    {" [Mana, Max Mana]\n"}
                </Typography>
                <Tooltip title="Next Page">
                    <IconButton sx={{ position: "absolute", top: "70%", right: "0%", color: "white", zIndex: "1" }} onClick={() => props.handlePage(!props.page)}>
                        <KeyboardDoubleArrowRightIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box sx={{ height: "95%", marginTop: "3px", verticalAlign: "middle", display: displayPage2 }}>
                <Typography sx={{ fontSize: "1vw", marginLeft: "15px" }}>
                    <Box component="span" fontWeight="bold" color="#FCC44B">
                        Strike:
                    </Box>
                    {" [Melee]"}
                    <Box component="span" fontWeight="bold" color="#FCC44B" sx={{ marginLeft: "2.8%" }}>
                        Shot:
                    </Box>
                    {" [Missile, Laser]\n"}
                </Typography>
                <Typography sx={{ fontSize: "1vw", marginLeft: "15px" }}>
                    {" "}
                    <Box component="span" fontWeight="bold" color="#FCC44B">
                        Missile:
                    </Box>
                    {" [Shot]"}
                    <Box component="span" fontWeight="bold" color="#FCC44B" sx={{ marginLeft: "3.7%" }}>
                        Melee:
                    </Box>
                    {" [Step, Strike]\n"}
                </Typography>
                <Typography sx={{ fontSize: "1vw", marginLeft: "15px" }}>
                    {" "}
                    <Box component="span" fontWeight="bold" color="#FCC44B">
                        Step:
                    </Box>
                    {" [Melee]"}
                    <Box component="span" fontWeight="bold" color="#FCC44B" sx={{ marginLeft: "5%" }}>
                        Laser:
                    </Box>
                    {" Laser: [Shot, Wave] \n"}
                </Typography>
                <Typography sx={{ fontSize: "1vw", marginLeft: "15px" }}>
                    {" "}
                    <Box component="span" fontWeight="bold" color="#FCC44B">
                        Wave:
                    </Box>
                    {" [Laser]"}
                    <Box component="span" fontWeight="bold" color="#FCC44B" sx={{ marginLeft: "4%" }}>
                        Utility:
                    </Box>
                    {" [Nothing]\n"}
                </Typography>
                <Tooltip title="Prev Page">
                    <IconButton sx={{ position: "absolute", top: "70%", right: "0%", color: "white", zIndex: "1" }} onClick={() => props.handlePage(!props.page)}>
                        <KeyboardDoubleArrowLeftIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    );
}
