const Answer = {
    exact: "#7DE86A",
    close: "#FCC44B",
    far: "#FFFFFF", // #E6E7E8
};
function HexAsEmote(hex: string): string {
    switch (hex) {
        case Answer.exact:
            return "🟩";
            break;
        case Answer.close:
            return "🟨";
            break;
        default:
            return "⬛";
            break;
    }
}

const similarBrands = {
    Default: [""],
    Shot: ["Missile", "Laser"],
    Missile: ["Shot"],
    Step: ["Melee"],
    Laser: ["Shot", "Wave"],
    Strike: ["Melee"],
    Melee: ["Step", "Strike"],
    Wave: ["Laser"],
    Utility: [""],
};

const maxEffects = 3;
const similarEffects = [
    ["Poison", "Frost", "Root", "Mark", "Remove Status"],
    ["Push", "Pull", "Teleport", "Drag", "Lower", "Lift", "Knockback"],
    ["Break", "Crack", "Flame"],
    ["Mana", "Max Mana"],
    //["Heal", "Shield", "Invincible"],
];

const maxTraits = 2;
const traitReadable = {
    halfhit: "half hits",
    subspell: "has a Secondary spell",
    multidamage: "has multiple damages",
};

export { Answer, HexAsEmote, maxEffects, maxTraits, similarBrands, similarEffects, traitReadable };
