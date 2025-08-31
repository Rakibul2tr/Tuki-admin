import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "../features/number/numberSlice";
import authReducer from "../features/users/userSlice";
import packageReducer from "../features/package/packageSlice";
import uploadReducer from "../features/upload/uploadSlice";
import diamondReducer from "../features/daimond/daimondSlice";
import agencyReducer from "../features/agency/agencySlice";
import resellerReducer from "../features/reseller/resellerSlice";
import moderatorReducer from "../features/moderator/moderatorSlice";
import withdrawReducer from "../features/withdraw/withdrawSlice";
import giftReducer from "../features/gift/giftSlice";
import animationReducer from "../features/animation/animationSlice";
import notificationReducer from "../features/notification/notificationSlice";
import inboxReducer from "../features/inbox/inboxSlice";


export const store = configureStore({
  reducer: {
    auth:authReducer,
    // number: numberReducer,
    package: packageReducer,
    // upload: uploadReducer,
    diamond: diamondReducer,
    agency: agencyReducer,
    reseller: resellerReducer,
    moderator: moderatorReducer,
    withdraw: withdrawReducer,
    gift: giftReducer,
    animation: animationReducer,
    notification: notificationReducer,
    inbox: inboxReducer,
  },
});