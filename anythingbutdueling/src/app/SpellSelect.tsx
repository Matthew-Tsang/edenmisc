import { Autocomplete, FilterOptionsState, Grid, Icon, IconButton, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SPELL_LIST, SPELL_LIST_LOWER } from "./Spells";
import { matchSorter } from "match-sorter";
import { SetStateAction, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import Image from "next/image";

const StyledAutocomplete = styled(Autocomplete)({
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
        // Default transform is "translate(14px, 20px) scale(1)""
        // This lines up the label with the initial cursor position in the input
        // after changing its padding-left.
        color: "white",
        fontFamily: "UbuntuRegular",
        fontStyle: "italic",
        overflow: "visible",
        fontSize: "2.9rem",
        marginTop: "-4%",
        paddingBottom: "5%",
        marginLeft: "clamp(0rem, max(0.8rem, 1%), 0.8rem)",
        paddingRight: "5%",
        opacity: "0.7",
    },
    ".MuiInputLabel-outlined": {
        color: "white",
        fontSize: "32px",
        marginTop: "-10px",
    },
    "&.Mui-focused .MuiInputLabel-outlined": {
        color: "white",
        fontSize: "32px",
        marginTop: "-10px",
    },
    "& .MuiAutocomplete-inputRoot": {
        color: "white",
        height: "72px",
        fontFamily: "UbuntuRegular",
        overflow: "visible",
        fontSize: "32px",
        '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
            // Default left padding is 6px
            paddingLeft: 6,
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
            borderWidth: "4.5px",
            borderRadius: "14px",
        },
        "&:hover:not(.Mui-focused):not(.Mui-disabled) .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(254, 50, 102)",
            borderWidth: "4.5px",
            borderRadius: "14px",
        },
        ".MuiAutocomplete-clearIndicator": {
            color: "white",
        },
        "&:hover:not(.Mui-focused) .MuiAutocomplete-clearIndicator": {
            display: "none",
        },
        ".MuiAutocomplete-popupIndicator": {
            color: "white",
        },
        "& .MuiAutocomplete-noOptions": {
            display: "none",
        },
        "& .MuiAutocomplete-paper": {
            borderWidth: "20px",
        },
    },
});

export default function SpellSelect(props: { disabled: boolean; handleGuess: (name: string) => void }) {
    const [value, setValue] = useState("");
    const spells = SPELL_LIST;
    const borderColor = props.disabled ? "rgba(0,0,0,0.3)" : "white";

    const handleChange = (_e: Event, val: SetStateAction<string>) => setValue(val);
    const handleSubmit = () => {
        if (SPELL_LIST_LOWER.includes(value.toLowerCase())) {
            props.handleGuess(value);
            setValue("");
        }
    };

    return (
        <Grid container spacing={1} sx={{}}>
            {/*@ts-expect-error for some reason it's not expecting an argument even tho it takes it*/}
            <StyledAutocomplete<string>
                disabled={props.disabled}
                disablePortal
                options={spells}
                value={value}
                onInputChange={handleChange}
                sx={{
                    width: "320px",
                    "& + .MuiAutocomplete-popper .MuiAutocomplete-option:hover": {
                        backgroundColor: "rgba(254, 50, 102, 0.5)",
                    },
                    '& + .MuiAutocomplete-option[aria-selected="true"]': {
                        backgroundColor: "rgba(254, 50, 102, 0.5)",
                    },
                    "& + .MuiAutocomplete-popper": {
                        backgroundColor: "rgba(0,0,0,0.2)",
                        borderRadius: "14px",
                        borderTopRightRadius: "0px",
                        borderTopLeftRadius: "0px",
                        boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.6)",
                    },
                }}
                filterOptions={(options: string[], state: FilterOptionsState<string>) => {
                    if (state.inputValue.length > 0) {
                        return matchSorter(options, state.inputValue).slice(0, 9);
                    } else return [];
                }}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        handleSubmit();
                    }
                }}
                clearOnEscape
                freeSolo
                clearIcon={<ClearIcon sx={{ fontSize: "35px", marginTop: "-6px" }} />}
                renderInput={(params) => <TextField {...params} label="Enter a spell" variant="outlined" />}
                renderOption={(props, option: string, { inputValue }) => {
                    const { key, ...optionProps } = props;
                    const matches = match(option, inputValue, {
                        insideWords: true,
                    });
                    const parts = parse(option, matches);

                    return (
                        <li key={key} {...optionProps}>
                            <div>
                                {parts.map((part, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontWeight: part.highlight ? 700 : 400,
                                            color: "white",
                                        }}
                                    >
                                        {part.text}
                                    </span>
                                ))}
                            </div>
                        </li>
                    );
                }}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: "rgba(254, 50, 102, 0)",
                            marginTop: "-12px",
                        },
                        elevation: 0,
                    },
                    listbox: {
                        sx: {
                            borderRadius: "14px",
                            borderTopRightRadius: "0px",
                            borderTopLeftRadius: "0px",
                            borderTopStyle: "none",
                            boxSizing: "border-box",
                            paddingTop: "15px",
                            borderWidth: "4.5px",
                            borderColor: "rgb(254, 50, 102)",
                        },
                    },
                    popper: {
                        modifiers: [
                            {
                                name: "flip",
                                enabled: false,
                            },
                            {
                                name: "preventOverflow",
                                enabled: false,
                            },
                        ],
                    },
                }}
            />
            <IconButton
                sx={{
                    marginTop: "-2px",
                    height: "75px",
                    width: "75px",
                }}
                onClick={() => {
                    handleSubmit();
                }}
                disabled={props.disabled}
            >
                <Icon
                    sx={{
                        fontSize: 40,
                        borderWidth: "4.5px",
                        borderColor: `${borderColor}`,
                        borderRadius: "14px",
                        height: "75px",
                        width: "75px",
                    }}
                >
                    <Image src="/arrowUp.png" alt="submit" width={80} height={80} />
                </Icon>
            </IconButton>
        </Grid>
    );
}
