"use server";

import { redirect } from "next/navigation";

export async function navigate(data: FormData) {
  redirect(`/posts/${data.get("id")}`);
}

export interface Anime {
  title: {
    romaji: string;
    english: string;
  };
  coverImage: {
    extraLarge: string;
  };
  rankings: [
    {
      rank: number;
      type: string;
      allTime: boolean;
    }
  ];
  nextAiringEpisode: {
    timeUntilAiring: number;
    episode: number;
    airingAt: number;
  };
  averageScore: number;
  studios: {
    edges: [
      {
        isMain: false;
        node: {
          name: string;
        };
      }
    ];
  };
  format: string;
  genres: string[];
  popularity: number;
  duration: number;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  season: string;
}

export interface Manga {
  title: {
    romaji: string;
    english: string;
  };
  coverImage: {
    extraLarge: string;
    color: string;
  };
  rankings: [
    {
      rank: number;
      type: string;
      allTime: boolean;
    }
  ];
  startDate: {
    year: number;
  };
  averageScore: number;
  studios: {
    edges: [
      {
        isMain: false;
        node: {
          name: string;
        };
      }
    ];
  };
  format: string;
  genres: string[];
  popularity: number;
  chapters: number;
  status:
    | "FINISHED"
    | "RELEASING"
    | "NOT_YET_RELEASED"
    | "CANCELLED"
    | "HIATUS";
  endDate: {
    year: number;
    month: number;
  };
}

export interface TrendingAnimeResponseData {
  data: {
    Page: {
      media: Anime[];
    };
  };
}

export interface TrendingMangaResponseData {
  data: {
    Page: {
      media: Manga[];
    };
  };
}

interface ErrorResponseData {
  errors: {
    message: string;
  }[];
}

const url = "https://graphql.anilist.co";
const queryStart = `
query {
  Page(page: 1, perPage: 6) {
    `;
const queryStart100 = `
query {
  Page(page: 1, perPage: 10) {
`;
const animeQuery = `
     {
      title {
        romaji
        english
      }
      coverImage {
        extraLarge
      }
      rankings {
        rank
        type
        allTime
      }
      nextAiringEpisode {
        timeUntilAiring
        episode
        airingAt
      }
      averageScore
      studios {
        edges {
          isMain
          node {
            name
          }
        }
      }
      format
      genres
      popularity
      duration
      startDate {
				year
        month
        day
      }
      season
    }
  }
}
`;

const mangaQuery = `
{
title {
  romaji
  english
}
coverImage {
  extraLarge
  color
}
rankings {
  rank
  type
  allTime
}
startDate {
  year
}
averageScore
format
genres
popularity
chapters
status
endDate {
  year
  month
}
}
}
}

`;

const optionsFormatter = (query: string): RequestInit => {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  };
  return options;
};

function handleResponse(
  response: Response
): Promise<TrendingAnimeResponseData> {
  return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json);
  });
}

function handleResponseManga(
  response: Response
): Promise<TrendingMangaResponseData> {
  return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json);
  });
}

function handleError(error: ErrorResponseData) {
  console.error(error);
}

export const TrendingAnimeFunction = async () => {
  const query =
    queryStart +
    "media(sort: TRENDING_DESC, type: ANIME, isAdult: false)" +
    animeQuery;
  const options = optionsFormatter(query);

  const data = await fetch(url, options)
    .then(handleResponse)
    .catch(handleError);
  return data;
};

export const TrendingMangaFunction = async () => {
  const query =
    queryStart +
    "media(sort: TRENDING_DESC, type: MANGA, isAdult: false)" +
    mangaQuery;
  const options = optionsFormatter(query);

  const data = await fetch(url, options)
    .then(handleResponseManga)
    .catch(handleError);
  return data;
};

export const PopularSeasonal = async () => {
  const query =
    queryStart +
    "media(season:WINTER, seasonYear:2024, sort:POPULARITY_DESC, type:ANIME, isAdult:false)" +
    animeQuery;
  const options = optionsFormatter(query);

  const data = await fetch(url, options)
    .then(handleResponse)
    .catch(handleError);
  return data;
};

export const NextSeason = async () => {
  const query =
    queryStart +
    "media(season:SPRING, seasonYear:2024, type:ANIME, isAdult:false, sort:POPULARITY_DESC)" +
    animeQuery;
  const options = optionsFormatter(query);

  const data = await fetch(url, options)
    .then(handleResponse)
    .catch(handleError);
  return data;
};

export const AllTime = async () => {
  const query =
    queryStart +
    "media(type:ANIME, isAdult:false, sort:POPULARITY_DESC)" +
    animeQuery;
  const options = optionsFormatter(query);

  const data = await fetch(url, options)
    .then(handleResponse)
    .catch(handleError);
  return data;
};

export const AllTimeManga = async () => {
  const query =
    queryStart +
    "media(type:MANGA, isAdult:false, sort:POPULARITY_DESC)" +
    mangaQuery;
  const options = optionsFormatter(query);

  const data = await fetch(url, options)
    .then(handleResponseManga)
    .catch(handleError);
  return data;
};

export const PopularManhwa = async () => {
  const query =
    queryStart +
    "media(sort: POPULARITY_DESC, type: MANGA, isAdult: false, countryOfOrigin:KR)" +
    mangaQuery;
  const options = optionsFormatter(query);

  const data = await fetch(url, options)
    .then(handleResponseManga)
    .catch(handleError);
  return data;
};

export const Top100 = async () => {
  const query =
    queryStart100 +
    "media(type:ANIME, isAdult:false, sort:SCORE_DESC, format:TV)" +
    animeQuery;
  const options = optionsFormatter(query);

  const data = await fetch(url, options)
    .then(handleResponse)
    .catch(handleError);
  return data;
};

export const Top100Manga = async () => {
  const query =
    queryStart100 +
    "media(type:MANGA, isAdult:false, sort:SCORE_DESC)" +
    mangaQuery;
  const options = optionsFormatter(query);

  const data = await fetch(url, options)
    .then(handleResponseManga)
    .catch(handleError);
  return data;
};
