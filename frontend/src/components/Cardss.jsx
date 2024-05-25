import React from "react";
import { Card, CardHeader, CardBody, Typography} from "@material-tailwind/react";

const Cardss = (props) => {
    return(
        <Card className="mt-6 w-96 hover:cursor-pointer transform transition-transform hover:scale-105">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                    {props.title}
                </Typography>
                <Typography>
                    {props.desc}
                </Typography>
            </CardBody>
        </Card>
    );
}

export default Cardss;