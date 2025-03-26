export interface TarotResponse {
    page:        number;
    limit:       number;
    total_count: number;
    data:        Datum[];
}

export interface Datum {
    ID:            string;
    tarot_image:   string;
    tarot_name:    string;
    description:   string;
    roman_numeral: string;
}
