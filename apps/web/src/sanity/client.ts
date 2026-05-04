import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "qi05z7k4",
    dataset: "production",
    apiVersion: "2025-07-09",
    useCdn: false,
});