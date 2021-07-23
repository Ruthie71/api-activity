// import React from "react";
// import {
//     makeStyles,
//     Card,
//     CardContent,
//     Button,
//     Typography,
//     Grid,
// } from "@material-ui/core";
// import { useHistory } from "react-router-dom";

// const useStyles = makeStyles({
//     container: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexWrap: "wrap",
//         marginBottom: 60,
//     },
//     image: {
//         width: "100%",
//     },
//     card: {
//         width: "300px",
//     },
// });

const Activites = ({ activites }) => {
    // const history = useHistory();
    // const classes = useStyles();
    // console.log(activities);
    return (
        <div>
            Activites Name Address Coords Picture Time Cat SubCat Region
            Duration
        </div>

        // <Grid item xs={12} className={classes.container}>
        //     <Card
        //         key={activity.id}
        //         variant="outlined"
        //         className={classes.card}
        //     >
        //         <CardContent>
        //             <img src={activity.image_url} className={classes.image} />
        //             <Typography variant="h6">{activity.name}</Typography>
        //             <Typography variant="body1">{activityt.subcategory}</Typography>
        //             <Typography variant="body1">{restaurant.duration}</Typography>
        //             <Typography variant="body1">
        //                 {activity.description}
        //             </Typography>
        //             <Button
        //                 variant="contained"
        //                 color="secondary"
        //                 onClick={() =>
        //                     history.push(`/activities/${activity.id}`)
        //                 }
        //             >
        //                 Show
        //             </Button>
        //         </CardContent>
        //     </Card>
        // </Grid>
    );
};

export default Activites;
