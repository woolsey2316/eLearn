import React from 'react'
import { Switch, Route, Router } from "react-router-dom";

import { history } from "./helpers/history";

import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./pages/HomePage";
import { AdminDashboard } from "./pages/AdminDashboard";
import { CreateExam } from "./pages/CreateExam";
import { ChangePassword, UpdateProfile } from "./pages/profile";
import { Profile } from "./pages";
import { ExamResults } from "./pages/ExamResults";
import { ExamPage } from "./pages/Exam";
import { ExamList } from "./pages/ExamList";
import { Courses } from "./pages/Course";
import { CourseRegister } from "./pages/CourseRegister";
import { PageNotFound } from "./pages/NotFound";

import { LogoutModal } from "./components/modal";

import { PrivateRoute } from "./components";

import "./sass/app.scss";

function App() {
  return (
    <Router history={history}>
      <LogoutModal />
      <Switch>
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/dashboard">
          <AdminDashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/home">
          <AdminDashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/create_exam">
          <CreateExam />
        </PrivateRoute>
        <PrivateRoute exact path="/student/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/student/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/student/courses">
          <Courses />
        </PrivateRoute>
        <PrivateRoute exact path="/student/courses/CourseRegister">
          <CourseRegister />
        </PrivateRoute>
        <PrivateRoute exact path="/student/profile/change_password">
          <ChangePassword />
        </PrivateRoute>
        <PrivateRoute exact path="/student/Profile/update_profile">
          <UpdateProfile />
        </PrivateRoute>
        <PrivateRoute exact path="/student/grades">
          <ExamResults />
        </PrivateRoute>
        <PrivateRoute exact path="/student/exam_list">
          <ExamList />
        </PrivateRoute>
        <PrivateRoute exact path="/student/exams/:exam_id">
          <ExamPage />
        </PrivateRoute>
        <Route exact path="/signup" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
