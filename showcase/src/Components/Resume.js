import React, { Component } from 'react';
// import { Spring, config } from 'react-spring'
// const VisibilitySensor = require('react-visibility-sensor');


class Resume extends Component {

  constructor(props) {
    super(props);
    this.state = { width : "1%" };
  }

  onChangeHandler = () => {
    this.setState({ width: "0%" })
  };

  render() {
    if(this.props.data){
      var education_list = this.props.data.education[0].description.map(sentence => <li>{sentence}</li>);
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <ul>
          {education_list}
        </ul></div>
      });
      var work_list = this.props.data.work;
      console.log('work_list', work_list);
      // [0].description.map(sentence => <li>{sentence}</li>);
      var work = this.props.data.work.map(function(work, index){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <ul>{work_list[index].description.map(sentence => <li>{sentence}</li>)}</ul>
        </div>
      });
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li>
            <span style={{width: skills.level}} className={className}></span>
            <em>{skills.name}</em>
          </li>
        )
      });
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
           <p>{work}</p>
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">
				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
