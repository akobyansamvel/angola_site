import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: Index,
});

function Index() {
    return (
        <div>
            <h1>разраз это хардбасс</h1>
        </div>
    )
}