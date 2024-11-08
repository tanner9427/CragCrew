// src/index.ts
import express, { Request, Response } from "express";
import { MeetupPage } from "./pages/meetup";
import { Meetup } from "./services/meetup-svc";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

app.get(
    "/meetup/:meetupId",
    (req, res) => {
        const { meetupId } = req.params;
        const data = Meetup(meetupId); // function to fetch meetup data by ID
        const page = new MeetupPage(data);

        res.set("Content-Type", "text/html").send(page.render());
    }
);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});