const Answer = {
    exact: "#7DE86A",
    close: "#FCC44B",
    far: "#FFFFFF", // #E6E7E8
};
const maxEffects = 3;
const maxTraits = 2;

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

const similarEffects = [
    ["Poison", "Frost", "Root", "Mark", "Remove Status"],
    ["Push", "Pull", "Teleport", "Drag", "Lower", "Lift", "Knockback"],
    ["Break", "Crack", "Flame"],
    ["Mana", "Max Mana"],
    //["Heal", "Shield", "Invincible"],
];

const traitReadable = {
    halfhit: "half hits",
    subspell: "has a Secondary spell",
    multidamage: "has multiple damages",
};

export { Answer, maxEffects, maxTraits, similarBrands, similarEffects, traitReadable };
