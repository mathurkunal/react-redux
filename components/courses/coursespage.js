import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseactions';
import CourseList from './courselist';

class CoursesPage extends Component {
    constructor(props, context){
        super(props,context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    
    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }

    render() {
         
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} />
                <CourseList courses={this.props.courses} />

                     
            </div>
        );
    }
   
}
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps){
        return {
            courses: state.courses
        };
    }

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);