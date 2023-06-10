import { createAsyncThunk } from "@reduxjs/toolkit";
import { stationsUrl } from "../../constants/api";
import { Station } from "../../typedef";

export const fetchStations = createAsyncThunk<Station[], string>('stations/fetch', (country: string) =>
   fetch(`${stationsUrl}/${country}`)
   .then((res) => res.json())
   .then((data: Station[]) => data.sort((a, b) => b.votes - a.votes))
)  