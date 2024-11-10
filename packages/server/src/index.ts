import express, { Request, Response } from "express";
import { MeetupPage } from "./pages/meetup";
import { getDestination } from "./services/meetup-svc";
import { connect } from "./services/mongo";
import climbers from './routes/climber';

connect("CragCrew");

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

// Middleware:
app.use(express.json());
app.use(express.static(staticDir));
app.use('/api/climbers', climbers);

// Define a type for route parameters
interface MeetupParams {
    meetupId: string;
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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
