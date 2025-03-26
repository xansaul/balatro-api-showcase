export interface JokerResponse {
    page:        number;
    limit:       number;
    total_count: number;
    data:        Datum[];
}

export interface Datum {
    ID:                 string;
    number:             number;
    joker:              string;
    joker_image:        string;
    effect:             string;
    cost:               string;
    rarity:             Rarity;
    joker_type:         JokerType;
    activation:         Activation;
    unlock_requirement: UnlockRequirement;
}

export enum Activation {
    Indep = "Indep.",
    OnScored = "On Scored",
}

export enum JokerType {
    M = "+m",
}

export enum Rarity {
    Common = "Common",
}

export enum UnlockRequirement {
    AvailableFromStart = "Available from start.",
}
