import axios from "axios";
import { BaseUrl } from "./SummaryApi";


export const Axios = axios.create({
    baseURL: BaseUrl,
});