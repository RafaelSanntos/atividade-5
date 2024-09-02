import axios from 'axios';

const API_URL = 'https://api.mymemory.translated.net/get';

export const fetchTranslatedText = async (text, sourceLang, targetLang) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: text,
        langpair: `${sourceLang}|${targetLang}`,
      },
    });
    return response.data.responseData.translatedText;
  } catch (error) {
    throw new Error("Failed to fetch translation.");
  }
};
