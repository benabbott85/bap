import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaSchool } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5"
function timeline(){
    return(
        <>
        <div className="break"></div>
        <h3 className="career">My Career and Education in Tech</h3>
        <VerticalTimeline className='time'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  background: '#219cee', color: '#fff', backgroundCover: 'cover' }}
    // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - present"
    iconStyle={{  color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Denver Website Designs</h4>
    {/* <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p> */}
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement> */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  background: '#000305', color: '#fff', backgroundCover: 'cover' }}
    date="March 2021 - May 2021"
    iconStyle={{ color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <div className="time">
    <h4 className="vertical-timeline-element-title ">Web Designer</h4>
    <h5 className="vertical-timeline-element-subtitle">Your Web Pro</h5>
    {/* <h6 className="vertical-timeline-element-subtitle">Contract</h6> */}
  </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  background: '#219cee', color: '#fff', backgroundCover: 'cover' }}
    date="July 2020 - December 2021"
    iconStyle={{ color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <h4 className="vertical-timeline-element-title">Senior Full Stack Web Development Tutor/Teaching Assistant</h4>
    <h5 className="vertical-timeline-element-subtitle">Trilogy Education Services</h5>
    {/* <p>
      User Experience, Visual Design
    </p> */}
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{  background: '#000305', color: '#fff', backgroundCover: 'cover' }}
    date="December 2019 - March 2020"
    iconStyle={{  color: '#fff' }}
    icon={<FaSchool />}
  >
    <h4 className="vertical-timeline-element-title">Full Stack Web Development Certificate</h4>
    <h5 className="vertical-timeline-element-subtitle">University of Denver</h5>
    {/* <p>
      Creative Direction, User Experience, Visual Design
    </p> */}
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{  background: '#219cee', color: '#fff', backgroundCover: 'cover' }}
    date="2006 - 2010"
    iconStyle={{ color: '#fff' }}
    icon={<FaSchool />}
  >
    <h4 className="vertical-timeline-element-title">Bachelor of Arts in Communication</h4>
    <h5 className="vertical-timeline-element-subtitle">University of Colorado at Boulder</h5>
    
  </VerticalTimelineElement>
  
</VerticalTimeline>
<div className="break"></div>
        </>
    )
}

export default timeline
