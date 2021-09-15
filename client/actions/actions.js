
import * as type from '../constants/actionTypes';

export const addCardActionCreator = (companyName, cards) => ({
  type: types.ADD_CARD,
  payload: cards,
  companyName: companyName
});

export const addCompanyCreator = company => ({
  type: types.ADD_COMPANY,
  payload: company
});


//payload comes from component itself