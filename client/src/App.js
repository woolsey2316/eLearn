import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// midOne html + css template file provided
import "./midone-assets/dist/css/app.css";
import "./index.css";

import { history } from "./helpers/history";

import { RegisterPage } from "./components/RegisterPage";
import { LoginPage } from "./components/LoginPage";
import { Dashboard } from "./pages/HomePage";
import { AdminDashboard } from "./pages/AdminDashboard";
import { CreateExam } from "./pages/CreateExam";
import { ChangePassword, UpdateProfile } from "./pages/profile";
import { Profile } from "./pages";
import { ExamResults } from "./pages/ExamResults";
import { ExamPage } from "./pages/Exam";
import { ExamList } from "./pages/ExamList";
import { Courses } from "./pages/Course";
import { MyCourses } from "./pages/MyCourses";
import { CourseRegister } from "./pages/CourseRegister";
import { PageNotFound } from "./pages/NotFound";

import { SideMenu } from "./components";

import { LogoutModal } from "./components";

import { PrivateRoute } from "./components";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    console.log("open modal request");
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const sideMenu = <SideMenu permissions={true} open={openModal} />;
  return (
    <BrowserRouter history={history}>
      <LogoutModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <Switch>
        <PrivateRoute exact path="/dashboard">
          <Dashboard openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/dashboard">
          <AdminDashboard openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/home">
          <AdminDashboard openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/create_exam">
          <CreateExam openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/my_courses">
          <MyCourses openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/dashboard">
          <Dashboard openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/">
          <Dashboard openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/profile">
          <Profile openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/courses">
          <Courses openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/courses/CourseRegister">
          <CourseRegister openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/profile/change_password">
          <ChangePassword openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/Profile/update_profile">
          <UpdateProfile openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/grades">
          <ExamResults openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/exams/:exam_id">
          <ExamPage />
        </PrivateRoute>
        <PrivateRoute exact path="/student/exam_list">
          <ExamList openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <Route exact path="/signup" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
