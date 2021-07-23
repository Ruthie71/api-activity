// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { Typography, Grid, makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//     container: {
//         marginTop: "-100px",
//     },
// });

const Activity = () => {
    // const [name, setName] = useState(null);
    // const { id } = useParams();
    // const classes = useStyles();

    // useEffect(() => {
    //     axios
    //         .get(
    //             `https://yelp-backend-crossover.herokuapp.com/restaurants/${id}`
    //         )
    //         .then((res) => {
    //             console.log(res.data);
    //             setName(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    return (
        // <div className={classes.container}>
        //     {/* {name && ( */}
        //     <Grid item align="center">
        <div>
            Activites Name Address Coords Picture Time Cat SubCat Region
            Duration
            {/* <Typography variant="h2">{name.name}</Typography>
                    {/* <img
                            src={name.image_url}
                            alt={name.name}
                            width="100%"
                            height="400px"
                            style={{ paddingBottom: 40 }}
                        /> */}
            {/* <Typography variant="subtitle1">
                        Address line 1: {name.tag}
                    </Typography>
                    <Typography variant="subtitle1">
                        Address line 2: {name.tag}
                    </Typography>
                    <Typography variant="h6">
                        {name.city.toUpperCase()}
                    </Typography>
                    <Typography variant="h6">
                        coords: {name.city.toUpperCase()}
                    </Typography>
                    <Typography variant="body1">
                        About: {name.description}
                    </Typography>
                    <Typography variant="h6">
                        Duration: {name.city.toUpperCase()}
                    </Typography> */}{" "}
            */
        </div>
    );
};

export default Activity;
