import type { Datum, JokerResponse } from "@/interfaces/joker-response";

export const getJokers = async (
  limit: number = 10,
  page: number = 1
): Promise<Datum[]> => {
  try {
    const responseJokers = await fetch(
      `${
        import.meta.env.PUBLIC_BACKEND_URL
      }/api/jokers?limit=${limit}&page=${page}`
    );
    const { data }: JokerResponse = await responseJokers.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
