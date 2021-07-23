// import React, { useState, useEffect } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import axios from "axios";
// import { Typography, Card, Button } from "@material-ui/core";

const Region = () => {
    // const history = useHistory();
    // const { name } = useParams();
    // const [isRegion, setIsRegion] = useState(null);

    // useEffect(() => {
    //     axios
    //         .get(`https://yelp-backend-crossover.herokuapp.com/tags/${name}`)
    //         .then((res) => {
    //             console.log(res.data);
    //             setIsTag(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    return (
        <div>
            {" "}
            Region display buttons
            {/* {isRegion &&
                isRegion.map((tag) => {
                    return (
                        <Card
                            elevation={10}
                            style={{ width: 360, margin: "50px auto" }}
                            item
                            xs={12}
                            sm={6}
                            align="center"
                            key={region.id}
                        >
                            <Button
                                style={{
                                    marginBottom: "16px",
                                    marginTop: "16px",
                                    fontSize: "24px",
                                }}
                                color="secondary"
                                onClick={() =>
                                    history.push(`/activities/${region.id}`)
                                }
                                variant="h6"
                            >
                                {region.name}
                            </Button>
                            <Typography
                                style={{ marginBottom: "10px" }}
                                variant="body1"
                            >
                                {region.city.toUpperCase()}
                            </Typography>
                            <Typography
                                style={{ marginBottom: "10px" }}
                                variant="body1"
                            >
                                {tag.tag}
                            </Typography>
                            <Typography
                                style={{ marginBottom: "10px" }}
                                variant="body1"
                            >
                                {region.description}
                            </Typography>
                        </Card>
                    );
                })} */}
        </div>
    );
};

export default Region;
