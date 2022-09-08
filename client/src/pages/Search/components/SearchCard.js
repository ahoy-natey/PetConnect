import React from 'react'


export default function SearchCard(props) {
    //TODO: Styled by the artist that is Haley
    return (
        <div className='SearchCard'>
            <p>Name: {props.pet.name}</p>
            <p>Age: {props.pet.age}</p>
            <p>Breed: {props.pet.breed}</p>
            <p>Size: {props.pet.size}</p>
            <p>Sex: {props.pet.sex}</p>
            <p>Color: {props.pet.color}</p>
            <p>For Sale?: {props.pet.for_sale}</p>
            <p>Description: {props.pet.description}</p>
            <img src={props.pet.media[0].url} width="100px" height="100px"></img>
        </div>
    )
};


// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";


// export default function SearchCards(props) {

//     return (
//   <div className="search-card">
//         <Grid 
//         item
//         container
//         direction="row"
//         alignItems="center"
//         justifyContent="center"
//         md={4}
//       >
//         <Typography>          
//         <h6> Name: {props.pet.name}</h6>
//         <h6>Age: {props.pet.age}</h6>
//         <h6>Size: {props.pet.size} </h6>
//         </Typography>
//       </Grid>
//       </div>
//     )
// };