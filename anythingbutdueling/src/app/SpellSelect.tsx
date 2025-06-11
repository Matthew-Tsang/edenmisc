import { Autocomplete, FilterOptionsState, Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SPELL_LIST, SPELL_LIST_LOWER } from "./Spells";
import { matchSorter } from 'match-sorter';
import { SetStateAction, useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

const StyledAutocomplete = styled(Autocomplete)({
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
        // Default transform is "translate(14px, 20px) scale(1)""
        // This lines up the label with the initial cursor position in the input
        // after changing its padding-left.
        transform: "translate(29px, 20px) scale(1);",
        color: "white",
        fontFamily: "UbuntuRegular",
        fontStyle: "italic",
        overflow: "visible",
        fontSize: "45px",
        marginTop: "-18px",
        opacity: "0.7"
    },
    ".MuiInputLabel-outlined": {
        color: "white",
        fontSize: "32px",
        marginTop: "-10px"
    },
    "&.Mui-focused .MuiInputLabel-outlined": {
        color: "white",
        fontSize: "32px",
        marginTop: "-10px"
    },
    "& .MuiAutocomplete-inputRoot": {
        color: "white",
        height: "72px",
        fontFamily: "UbuntuRegular",
        overflow: "visible",
        fontSize: "32px",
        '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
            // Default left padding is 6px
            paddingLeft: 6
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
            borderWidth: "4.5px",
            borderRadius: "14px"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(254, 50, 102)",
            borderWidth: "4.5px",
            borderRadius: "14px"
        },
        ".MuiAutocomplete-clearIndicator": {
            color: "white",
        },
        "&:hover:not(.Mui-focused) .MuiAutocomplete-clearIndicator": {
            display: "none",
        },
        ".MuiAutocomplete-popupIndicator": {
            color: "white"
        },
        "& .MuiAutocomplete-noOptions": {
            display: "none"
        },
        "& .MuiAutocomplete-paper": {
            borderWidth: "20px"
        },
    }
});


export default function SpellSelect(props: { handleGuess: () => void; }) {

    const [value, setValue] = useState("");
    const spells = SPELL_LIST;

    const handleChange = (_e: Event, val: SetStateAction<string>) => setValue(val);

    return (
        <Grid>
            {/*@ts-expect-error for some reason it's not expecting an argument even tho it takes it*/}
            <StyledAutocomplete<string>
                disablePortal
                options={spells}
                value={value}
                onInputChange={handleChange}
                sx={{
                    width: "320px",
                    '& + .MuiAutocomplete-popper .MuiAutocomplete-option:hover': {
                        backgroundColor: "rgba(254, 50, 102, 0.5)",
                    },
                    '& + .MuiAutocomplete-option[aria-selected="true"]': {
                        backgroundColor: "rgba(254, 50, 102, 0.5)",
                    },
                    '& + .MuiAutocomplete-popper': {
                        backgroundColor: "rgba(0,0,0,0.2)",
                        borderRadius: "14px",
                        borderTopRightRadius: "0px",
                        borderTopLeftRadius: "0px",
                        boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.6)"
                    }
                }}
                filterOptions={(options: string[], state: FilterOptionsState<string>) => {
                    if (state.inputValue.length > 0) {
                        return matchSorter(options, state.inputValue).slice(0, 10);
                    }
                    else
                        return [];
                }}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        if (SPELL_LIST_LOWER.includes(value.toLowerCase())) {
                            console.log(value);
                            props.handleGuess()
                            setValue("");
                        }
                        else {

                        }
                    }
                }}
                clearOnEscape
                freeSolo
                clearIcon={<ClearIcon sx={{ fontSize: "35px", marginTop: "-6px" }} />}
                renderInput={(params) => <TextField {...params} label="Enter a spell" variant="outlined" />}
                renderOption={(props, option: string, { inputValue }) => {
                    const { key, ...optionProps } = props;
                    const matches = match(option, inputValue, { insideWords: true });
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
                        elevation: 0
                    },
                    listbox:
                    {
                        sx: {
                            borderRadius: "14px",
                            borderTopRightRadius: "0px",
                            borderTopLeftRadius: "0px",
                            borderTopStyle: "none",
                            boxSizing: "border-box",
                            paddingTop: "15px",
                            borderWidth: "4.5px",
                            borderColor: "rgb(254, 50, 102)"
                        },
                    }
                }}
            />
        </Grid>
    )
}