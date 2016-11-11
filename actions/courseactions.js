import * as types from './actiontypes';
import courseApi from '../api/mockcourseapi';


export function loadCoursesSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS, courses: courses};
}

export function createCourseSuccess(course){
    return {type: types.CREATE_COURSE_SUCCESS, course: course};
}

export function updateCourseSuccess(course){
    return {type: types.UPDATE_COURSE_SUCCESS, course: course};
}


export function loadCourses(){
    return function (dispatch){
        //api Call here
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course){
    return function (dispatch) {
        return courseApi.saveCourse(course).then(course => {
            course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
        }).catch(error =>{
            throw(error);
        });

    };
}