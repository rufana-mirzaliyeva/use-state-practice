import './Course.css';

import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg'

const courseMap = {
    Angular,
    Bootstrap,
    Ccsharp,
    KompleWeb
}
function Course ({courseName}) {
    console.log(courseName);
    return ( 
        <div>
            <img className = 'course-img'src = {courseMap[courseName]} alt ='course'/>
        </div>
     );
}

export default Course ;