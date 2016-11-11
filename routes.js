import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import HomePage from './components/home/homepage';
import ListPage from './components/list/listpage';
import CoursesPage from './components/courses/coursespage';
import ManageCoursePage from './components/courses/managecoursepage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="list" component={ListPage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={ManageCoursePage} />
        <Route path="course/:id" component={ManageCoursePage} />

    </Route>
);
