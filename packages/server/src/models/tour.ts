// src/server/models/tour.ts

export interface Tour {
    id: number;
    name: string;
    location: string;
    difficulty: "easy" | "moderate" | "hard";
    description: string;
    date: string; // ISO format date
}

export function getTours(): Promise<Tour[]> {
    return fetch("/api/tours")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch tours: ${response.status}`);
            }
            return response.json();
        })
        .then((data: { tours: Tour[] }) => data.tours);
}
