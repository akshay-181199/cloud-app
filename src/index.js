import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';


class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

const validId = RegExp((/^-?\d+\.?\d*$/));
const validname = RegExp((/^\p{L}+$/u));

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Header extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='wrapper'>
      <div className='form-wrapper'>
      <h2> Parper Submission Form </h2>
      <Body />
      </div>
      </div>
    );
  }
}
class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      skl: null,
      dept: null,
      title: null,
      name : null,
      plag:'',
      Designation: null,
      errors: {
        skl: '',
        dept:'',
         title:'',
         name: '',
         plag:'',
        Designation: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'skl':
        errors.skl =
          validname.test(value)
            ? ''
            : 'Enter a school name';
        break;
      case 'dept':
        errors.dept =
          validname.test(value)
            ? ''
            : 'please Enter department';
        break;
      case 'title':
        errors.dept =
        validname.test(value)
          ? ''
          : 'please Enter title';
        break;
      case 'name':
        errors.name =
            validname.test(value)
              ? ''
              : 'please Enter a name';
          break;
      case 'plag':
        errors.plag ='';    

      default:
        break;
    }

    this.setState({errors,   [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      alert('Valid Form');
      window.location.href("http:// www.google.com");
    }else{
      alert('Invalid Form');
    }
  }

  render(){
    const {errors} = this.state;
    return (

      <div>
        <span> Hi akshay_p@cb.amrita.edu, when you submit this form, the owner will be able to see your name and email address.</span> <br /> <br /> 
        <p class="redd">* Required</p>
      <form >
      
        <div className='skl' required>
         
         <label htmlFor="skl">1.  School/Center, campus</label>
          
           <h6> eg: Amrita School of Engineering,coimbatore  </h6> 
           
           <p class='redd'>*</p>       
          <input type='text' placeholder='enter your answer' name='skl' onChange={this.handleChange} Validate /> <br />
          {errors.skl.length > 0 &&
            <span class='error'>{errors.skl}</span>}
        </div>
        <br /> <br />
        <div className='dept'>
          <label htmlFor="dept">2. department</label>
          <h6>eg: computer science and engineering</h6>
          <p class='redd'>*</p>
          <input placeholder='enter your answer' type='text' name='dept' onChange={this.handleChange} noValidate />
          {errors.dept.length > 0 &&
            <span className='error'>{errors.dept}</span>}
        </div>
        <br /> <br />

        <div className='title'>
          <label htmlFor="title">3. Enter your Title in full</label>
          <p class='redd'>*</p>
          <input placeholder='enter your answer' type='text' name='title' onChange={this.handleChange} noValidate />
          {errors.title.length > 0 &&
            <span className='error'>{errors.title}</span>}
        </div>
        <br />
        <div className='name'>
          <label htmlFor="name">4. Enter your name in full</label>
          <p class='redd'>*</p>
          <textarea type='text' name='name' onChange={this.handleChange} noValidate />
          {errors.name.length > 0 &&
            <span className='error'>{errors.name}</span>}
        </div>
        <br />
        <div className='jname'>
          <label htmlFor="jname">5. Enter your journal name in full</label>
          <p class='redd'>*</p>
          <textarea type='text' name='jname' onChange={this.handleChange} noValidate />
          {errors.name.length > 0 &&
            <span className='error'>{errors.name}</span>}
        </div>
        <br />

        <div className='link'>
          <label htmlFor="link">6. enter the website link of the journal</label>
          <p class='redd'>*</p>
          <input placeholder='enter your answer' type='text' name='link' onChange={this.handleChange} noValidate />
         
        </div>
        <br />
        <div className='date'>
          <label htmlFor="date">7. enter the submission date</label>
          <p class='redd'>*</p>
          <input placeholder='enter your answer' type='date' name='date' onChange={this.handleChange} noValidate />
         
        </div>
        <br />
        <div className='plag'>
          <label htmlFor="plag">8. enter the plagiarism rate</label>
          <p class='redd'>*</p>
          <input placeholder='enter your answer 1-20' type='number' name='plag' onChange={this.handleChange} noValidate />
          {errors.plag.length >0  &&
            <span className='error'>{errors.plag}</span>}
        </div>
        <br />
        <div className='num'>
          <label htmlFor="num">9. number of Amrita citations</label>
          <p class='redd'>*</p>
          <input placeholder='enter a number' type='number' name='num' onChange={this.handleChange} noValidate />
          {errors.plag.length >0  &&
            <span className='error'>{errors.plag}</span>}
        </div>
        <br />
        <div className='chk'>
          <label htmlFor="chk">10.Have you submittes the Form already?</label>
          <p class='redd'>*</p>
          <input type="checkbox"/>Yes <br />
          <input type="checkbox"/>NO
        </div>
        <br />
        <div className='submit'>
          <button onclick={this.handleSubmit}>Add Record</button> &nbsp;&nbsp;
          <button>Exit</button>
        </div>
      </form>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
