import type { Datum, TarotResponse } from "@/interfaces/tarot-response";


export const getTarot = async (
  limit: number = 10,
  page: number = 1
): Promise<Datum[]> => {
  try {
    const tarotResponse = await fetch(
      `${
        import.meta.env.PUBLIC_BACKEND_URL
      }/api/tarot?limit=${limit}&page=${page}`
    );
    const { data }: TarotResponse = await tarotResponse.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
