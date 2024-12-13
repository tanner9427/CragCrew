import express, { Request, Response } from "express";
import { MeetupPage } from "./pages/meetup";
import { getDestination, getAllDestinations, addDestination } from "./services/meetup-svc";
import { connect } from "./services/mongo";
import climbers from './routes/climber';
import auth, { authenticateUser } from "./routes/auth";
import { LoginPage } from "./pages/auth";
import fs from "node:fs/promises";
import path from "path";

connect("CragCrew");

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

// Middleware:
app.use(express.json());
app.use(express.static(staticDir));
app.use('/api/climbers', authenticateUser, climbers);
app.use("/auth", auth);

// Define a type for route parameters
interface MeetupParams {
    meetupId: string;
}

interface DestinationParams {
    destinationId: string;
}

app.get(
    "/meetup/:meetupId",
    (req: Request<MeetupParams>, res: Response): void => {
        const { meetupId } = req.params;
        const data = getDestination(meetupId); // function to fetch meetup data by ID

        if (!data) {
            // If no meetup found, respond with a 404 status
            res.status(404).send("Meetup not found");
            return;
        }

        const page = new MeetupPage(data);
        res.set("Content-Type", "text/html").send(page.render());
    }
);

app.get("/login", (req: Request, res: Response) => {
    const page = new LoginPage();
    res.set("Content-Type", "text/html").send(page.render());
});

// API: Get all destinations
app.get("/api/destinations", authenticateUser, (req: Request, res: Response) => {
    const destinations = getAllDestinations(); // Function to get all destinations
    res.json(destinations);
});

// API: Get a destination by ID
app.get("/api/destinations/:destinationId", authenticateUser, (req: Request<DestinationParams>, res: Response) => {
    const { destinationId } = req.params;
    const destination = getDestination(destinationId); // Function to fetch destination by ID

    if (!destination) {
        res.status(404).send({ error: "Destination not found" });
        return;
    }

    res.json(destination);
});

// API: Add a new destination
app.post("/api/destinations", authenticateUser, (req: Request, res: Response) => {
    const newDestination = req.body;

    if (!newDestination.name || !newDestination.location) {
        res.status(400).send({ error: "Invalid destination data" });
        return;
    }

    const addedDestination = addDestination(newDestination); // Function to add a destination
    res.status(201).json(addedDestination);
});

app.use("/app", (req: Request, res: Response) => {
    const indexHtml = path.resolve(staticDir, "index.html");
    fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
        res.send(html)
    );
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
