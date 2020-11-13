import {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
} from "../../actions/action_constants";
import initialState from "../../store/store";

export const jobReducer = (state = initialState.job, action) => {
  switch (action.type) {
    case CHANGE_COMPANY:
      return { ...state, company: action.companyName };
    case CHANGE_SALLARY:
      return { ...state, sallary: +action.sallary };
    case UP_SALLARY:
      return { ...state, sallary: state.sallary + 1 };
    case LOW_SALLARY:
      return { ...state, sallary: state.sallary - 1 };
    default:
      return state;
  }
};
