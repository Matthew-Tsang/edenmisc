import CARDS from "./Cardle.json";
import pseudo from "./Pseudo.json";
import "./Dictionary";
import { Answer, maxEffects, maxTraits, similarBrands, similarEffects } from "./Dictionary";

type Cardtridge = {
    nameString: string;
    brand: string;
    manaString: string;
    variableMana: boolean;
    damageString: string;
    damage: number;
    variableDmg: boolean;
    effects: string[];
    traits: string[];
};

const EmptyCardtridge = {
    nameString: "",
    brand: "",
    manaString: "",
    variableMana: true,
    damageString: "",
    damage: 0,
    variableDmg: false,
    effects: [],
    traits: [],
};

class StringColor {
    string: string = "";
    hex: string = Answer.far;
}

export class Guess {
    name: string;
    brand: StringColor = new StringColor();
    damage: StringColor = new StringColor();
    mana: StringColor = new StringColor();

    effects: StringColor[] = [];
    fullEffectsCol = Answer.far;
    traits: StringColor[] = [];
    fullTraitsCol = Answer.far;

    constructor(c: Cardtridge = EmptyCardtridge) {
        for (let i = 0; i < maxEffects; i++) {
            this.effects.push(new StringColor());
        }
        for (let i = 0; i < maxTraits; i++) {
            this.traits.push(new StringColor());
        }

        this.name = c.nameString;
        this.brand.string = c.brand;
        this.damage.string = c.damageString;
        this.mana.string = c.manaString;

        for (let i = 0; i < c.effects.length && i < maxEffects; i++) {
            this.effects[i].string = c.effects[i];
        }
        for (let i = 0; i < c.traits.length && i < maxTraits; i++) {
            this.traits[i].string = c.traits[i];
        }
    }
}

/*const repeat = 29280;
// repeats rng every 80 years
function Pseudoseed() : number {
    let days: number = Math.floor(Date.now() / (1000 * 3600 * 24)) % repeat;
    // current day within a cycle of 80 years
    let pseudo: number = (days**2) % CARDS.length;
    
    return pseudo;
}
*/

export function DailySpell(): string {
    let days: number = Math.floor(Date.now() / (1000 * 3600 * 24)) % pseudo.length;
    let index: number = pseudo[days];
    return CARDS[index].nameString;
}

function FindSpell(s: string): Cardtridge | null {
    for (let i = 0; i < CARDS.length; i++) {
        let c = CARDS[i];
        if (c.nameString.toLowerCase() == s.toLocaleLowerCase()) {
            return c;
        }
    }

    return null;
}

export function CompareSpell(correct: string, guess: string): Guess {
    let correctCard = FindSpell(correct) as Cardtridge;
    let guessedCard = FindSpell(guess) as Cardtridge; // surely this works out
    let guessObj = new Guess(guessedCard);

    guessObj.mana.hex = GuessMana(correctCard, guessedCard);
    guessObj.damage.hex = GuessDamage(correctCard, guessedCard);
    guessObj.brand.hex = GuessBrand(correctCard, guessedCard);

    let correctEffects = 0;
    if (guessedCard.effects.length == 0) {
        // if both are "no effects"

        guessObj.fullEffectsCol = correctCard.effects.length == 0 ? Answer.exact : Answer.far;
        guessObj.effects[0].string = "No Effects";
        guessObj.effects[0].hex = guessObj.fullEffectsCol;
    } else {
        // if even 1 effect is off, break match
        // give partial if at least 1 effect is correct

        guessObj.fullEffectsCol = Answer.exact;
        guessObj.effects.forEach((e) => {
            e.hex = GuessEffect(correctCard, e.string);

            if (e.hex != Answer.exact) {
                guessObj.fullEffectsCol = Answer.far;
            } else {
                correctEffects++;
            }
        });

        if (guessObj.fullEffectsCol == Answer.far && correctEffects > 0) {
            guessObj.fullEffectsCol = Answer.close;
        }
    }

    let correctTraits = 0;
    if (guessedCard.traits.length == 0) {
        // if both are "no traits"
        guessObj.fullTraitsCol = correctCard.traits.length == 0 ? Answer.exact : Answer.far;
    } else {
        guessObj.fullTraitsCol = Answer.exact;
        guessObj.traits.forEach((t) => {
            t.hex = correctCard.traits.includes(t.string) ? Answer.exact : Answer.far;

            if (t.hex != Answer.exact) {
                guessObj.fullTraitsCol = Answer.far;
            } else {
                correctTraits++;
            }
        });

        if (guessObj.fullTraitsCol == Answer.far && correctTraits > 0) {
            guessObj.fullTraitsCol = Answer.close;
        }
    }

    return guessObj;
}

function GuessMana(c: Cardtridge, g: Cardtridge): string {
    if (c.manaString == g.manaString) {
        return Answer.exact;
    } else if (!c.variableMana && !g.variableMana && Math.abs(Number.parseInt(c.manaString) - Number.parseInt(g.manaString)) == 1) {
        return Answer.close;
    }

    return Answer.far;
}
function GuessDamage(c: Cardtridge, g: Cardtridge): string {
    if (c.damageString == g.damageString) {
        return Answer.exact;
    } else if (!c.variableDmg && !g.variableDmg && Math.abs(c.damage - g.damage) == 1) {
        return Answer.close;
    }

    return Answer.far;
}
function GuessBrand(c: Cardtridge, g: Cardtridge): string {
    if (c.brand == g.brand) {
        return Answer.exact;
    } else if (similarBrands[c.brand as keyof typeof similarBrands].includes(g.brand)) {
        return Answer.close;
    }

    return Answer.far;
}
function GuessEffect(c: Cardtridge, e: string): string {
    let sharePool = false;
    for (let pool in similarEffects) {
        if (pool.includes(e)) {
            // find pool with effect from guess

            for (let effect in c.effects) {
                if (pool.includes(effect)) {
                    // if any effect from correct share the pool
                    sharePool = true;
                    break;
                }
            }

            break;
        }
    }

    if (c.effects.includes(e)) {
        return Answer.exact;
    } else if (sharePool) {
        return Answer.close;
    }

    return Answer.far;
}
