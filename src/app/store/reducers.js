import { SET_CREATE_CAMPAIGN } from "./actions";

const initialState = {
  createCampaign: null,
  createCampaignMedia: "I am media",
  campaignDetails: null
}

export const campaignReducer = (state = initialState, actions) => {

  const { type, payload } = actions;

  switch (type) {
    case SET_CREATE_CAMPAIGN:
      state = {
        ...state
      }
      return state;

    default:
      return state;
  }

}