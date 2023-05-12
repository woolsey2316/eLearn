import { configureStore } from '@reduxjs/toolkit'

import { activityApi } from '../features/activity/activity-slice-api'
import { authApi } from '../features/auth/auth-slice-api';
import { courseApi } from '../features/course/course-slice-api';
import { dashboardApi } from '../features/dashboard/dashboard-slice-api';
import { examApi } from '../features/exam/exam-slice-api';
import { instructorApi } from '../features/instructor/instructor-slice-api';
import { resultsApi } from '../features/results/results-slice-api';
import { taskApi } from '../features/task/task-slice-api';
import { userApi } from '../features/user/user-api';
import userReducer from '../features/user/user-slice';
import { alertReducer } from '../reducers/alert.reducer';

const store = configureStore({
  reducer: {
    [activityApi.reducerPath]: activityApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [examApi.reducerPath]: examApi.reducer,
    [instructorApi.reducerPath]: instructorApi.reducer,
    [resultsApi.reducerPath]: resultsApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
    userState: userReducer,
    alert: alertReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      activityApi.middleware,
      authApi.middleware,
      userApi.middleware,
      courseApi.middleware,
      dashboardApi.middleware,
      examApi.middleware,
      instructorApi.middleware,
      resultsApi.middleware,
      taskApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
