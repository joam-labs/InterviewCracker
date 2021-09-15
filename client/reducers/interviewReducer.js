import * as types from '../constants/actionTypes';

// [{company: 'Amazon'},{},{}]
// object = {
//   elem1.company: elem1,
//   elem2.company: elem2
// }

// axios.get()
//   .then(array => {
//     const stateObj = {Amazon: }
//     for(let role of array) {
//       stateObj[role.company] = array[role]
//     }
//   })

// const whatStateWillLookLikeAfterABunchOfEntriesAnnieStyledVariable = {
      // user: [
      //         // {
      //         //   company: Codesmith,
      //         //   team: bitches,
      //         //   role: jr btch,
      //         //   cards: [{}, {}, {}], // --> fetch to/from database
      //         // },
      //         // {
      //           //   company: DataDog,
      //           //   team: dogs,
      //           //   role: jr dog,
      //   //   phoneCard: {interviewDate, interviewContact, responded, accepted: boolean},
      //   //   techCard: {interviewDate, interviewContact, responded, accepted: boolean},
      //   //   finalCard: {interviewDate, interviewContact, responded, accepted: boolean}
      //   // },
      // ],
  //     user: {
  //       Amazon: {
  //         company: Amazon,
  //         team: 'Payments',
  //         role: 'SW eng',
  //         id: 0001,
  //         cards: [{}, {}, {}],
  //       },
  //       Google: {},
  //       Facebook: {}
  //     },
  //     feed: [{},{},{},{}]
  // };
  
  const initialState = {
    user: {},
    feed: []
  };


  const interviewReducer = (state = initialState, action) => {
    //<button onClick = {(()=> dispatch({type: "DECREMENT"})))}> DECREMENT </button>
    let newCompany;
    let newCard;
    let user;
    switch (action.type) {
      case types.ADD_COMPANY:
        newCompany = action.payload
        user = { ...state.user }
        user[newCompany.company] = newCompany
        return {
          ...initialState,
          user
        };

      // user: {
      //   Amazon: {
      //     company: Amazon,
      //     team: 'Payments',
      //     role: 'SW eng',
      //     cards: [{}, {}, {}],
      //   },

      case types.ADD_CARD:
        // add card to the company that was already added by ADD_COMPANY
        newCard = action.payload
        // filter for the right company using action.companyName
        let company = newCard.company;
        user = {...state.user}
        user.company.push(newCard)
        return{
          ...initialState,
          user
        }

        
      default: 
        console.log('default state in the reducer hit')
        return initialState; 
    // case types.: 

//     default: {
//       return state;
//     }
//   }
  };
};

export default interviewReducer;
