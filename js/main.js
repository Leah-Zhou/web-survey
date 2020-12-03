 const titleArray = [
   'identity',
   'post-code',
   'gender',
   'language',
   'age',
   'ethnic',
   'citizen',
   'education',
   'employment',
   'income-source',
   'income',
   'service',
   'literacy'
 ]

 const questionsText =[
   `How do you identify yourself?”`,
   `What is the postal code where you live?`,
   `What gender do you identify with?`,
   `What is your main language?`,
   `How old are you?`,
   `What is your ethnicity?`,
   `What is your citizenship status?`,
   `What is the highest level of education you have completed?`,
   `Are you currently employed?`,
   `What is your source of income?`,
   `What is your annual income?`,
   `What services would be helpful to you?`,
   `Choose which of these would be helpful to you`,
 ]
 const questionsArray =[
   {title:`Identity`,
     content:`  <fieldset>
     <section class="two-column background-style">
     <div class="option">
       <input type="radio" id="deaf" name="identity" value="deaf">
       <label for="deaf">Deaf</label>
     </div>
     <div class="option">
       <input type="radio" id="deafened" name="identity" value="deafened">
       <label for="deafened">Deafened</label>
     </div>
     <div class="option">
       <input type="radio" id="hard-hearing" name="identity" value="hard of hearing">
       <label for="hard-hearing">Hard of hearing</label>
     </div>
     <div class="option">
       <input type="radio" id="blind" name="identity" value="deaf/blind">
       <label for="blind">Deaf blind</label>
     </div>
   </section>       
   
   </fieldset>
   <div class="submit-skip" id="btn-submit-skip">
   <input type="button" value="skip" class="op-btn btn-skip adjust-padding" id="skip-identity">
   <input type="submit" value="submit" class="op-btn btn-submit" id="submit-identity">
   </div>
   `
   },

   {
     title:`Postal Code`,
     content:`<div class="post-code-area background-style">
     <input type="text" name="code" id="post-code" placeholder="Type in your postal code">
   </div>
   <div class="submit-skip" id="btn-submit-skip">
   <input type="button" value="skip" class="op-btn btn-skip adjust-padding" id="skip-code">
  <input type="submit" value="submit" class="op-btn btn-submit" id="submit-code">
   </div>`,
   },

   {
     title:`Gender`,
     content:`
     <fieldset>
     <section class="two-column background-style">
       <div class="option">
         <input type="radio" id="male" name="gender" value="male">
         <label for="male">Male</label>
       </div>
       <div class="option">
         <input type="radio" id="female" name="gender" value="female">
         <label for="female">Female</label>
       </div>
       <div class="option">
         <input type="radio" id="third" name="gender" value="non-binary/third gender">
         <label for="third">Non-binary/third gender</label>
       </div>
       <div class="option">
         <input type="radio" id="no" name="gender" value="prefer not to say">
         <label for="no">Prefer not to say</label>
       </div>
       <div> 
       <input type="text" name="gender" placeholder="Prefer to self-describe" id="self-describe" class="input-style">
     </div>
     </section>      
    </fieldset>
    <div class="submit-skip" id="btn-submit-skip">
      <input type="button" value="skip" class="op-btn btn-skip adjust-padding" id="skip-gender">
      <input type="submit" value="submit" class="op-btn btn-submit" id="submit-gender">
      </div>
      `,
    },

   {
     title:`Language`,
     content:`  <fieldset>
     <section class="three-columns background-style">
       <div class="option">
         <input type="checkbox" id="asl" value="ASL">
         <label for="asl">ASL</label>
       </div>
       <div class="option">
         <input type="checkbox" id="written" value="written">
         <label for="written">Written English</label>
       </div>
       <div class="option">
         <input type="checkbox" id="lsq" value="LSQ">
         <label for="lsq">LSQ</label>
       </div>
       <div class="option">
         <input type="checkbox" id="indigenous" value="indigenous">
         <label for="indigenous">Indigenous</label>
       </div>
       <div class="option">
         <input type="checkbox" id="spoken-french" value="spoken French">
         <label for="spoken-french">Spoken French</label>
       </div>
       <div class="option">
         <input type="checkbox" id="written-french" value="written French">
         <label for="written-french">Written French</label>
       </div>
       <div class="option">
         <input type="checkbox" id="spoken-english" value="spoken English">
         <label for="spoken-english">Spoken English</label>
       </div>
       <div> 
         <input type="text" placeholder="other languages" id="other-language" class="input-style">
       </div>
     </section>       
    </fieldset>
    <div class="submit-skip" id="btn-submit-skip">
    <input type="button" value="skip" class="op-btn btn-skip adjust-padding" id="skip-language">
    <input type="submit" value="submit" class="op-btn btn-submit" id="submit-language">
    </div>`,
   },

   {
     title:`Age`,
     content:`
     <fieldset>
     <section class="age-options background-style">
       <div class="option small-margin">
         <input type="radio" id="under-sixteen" name="age" value="under 16">
         <label for="under-sixteen">under 16</label>
       </div>
       <div class="option small-margin">
         <input type="radio" id="sixteen" name="age" value="16-17">
         <label for="sixteen">16-17</label>
       </div>
       <div class="option small-margin">
         <input type="radio" id="eighteen" name="age" value="18-29">
         <label for="eighteen">18-29</label>
       </div>
       <div class="option small-margin">
         <input type="radio" id="thirty" name="age" value="30-44">
         <label for="thirty">30-44</label>
       </div>
       <div class="option small-margin">
         <input type="radio"  id="forty" name="age" value="45-54">
         <label for="forty">45-54</label>
       </div>
       <div class="option small-margin" >
         <input type="radio" id="fifty" name="age" value="55-65">
         <label for="fifty">55-65</label>
       </div>
       <div class="option small-margin">
         <input type="radio" id="sixty" name="age" value="60 or older">
         <label for="sixty">65 or older</label>
       </div>
     </section>       
    </fieldset>
    <div class="submit-skip" id="btn-submit-skip">
    <input type="button" value="skip" class="op-btn btn-skip adjust-padding" id="skip-age">
    <input type="submit" value="submit" class="op-btn btn-submit" id="submit-age">
    </div>`,
   },

   {
    title:`Ethnic Origin`,
    content:`
    <section class="select-area">
    <select class="scroll-select" size="1" id="op-for-ethnic">
        <option name="ethnic" value="first nations">First Nations</option>
        <option name="ethnic" value="Métis">Métis</option>
        <option name="ethnic" value="Inuk ">Inuk</option>
        <option name="ethnic" value="Caucasian/White">Caucasian/White</option>
        <option name="ethnic" value="Francophone">Francophone</option>
        <option name="ethnic" value="Chinese">Chinese</option>
        <option name="ethnic" value="black">Black</option>
        <option name="ethnic" value="Filipino">Filipino</option>
        <option name="ethnic" value="Latin American">Latin American</option>
        <option name="ethnic" value="South Asian">South Asian </option>
        <option name="ethnic" value="Southeast Asian">Southeast Asian </option>
        <option name="ethnic" value="West Asian ">West Asian</option>
        <option name="ethnic" value="Korean">Korean</option>
        <option name="ethnic" value="Japanese">Japanese</option>
    </select>
    <div >
    <label for="other-ethnic" class="white-text">Please type your ethnic origin if it is not in the list</label>
      <input type="text" placeholder="your ethnic origin" class="other-ethnicty" id="other-ethnic">
    </div>
  </section>
  <div class="submit-skip" id="btn-submit-skip">
  <input type="button" value="skip" class="op-btn btn-skip adjust-padding" id="skip-ethnic">
  <input type="submit" value="submit" class="op-btn btn-submit" id="submit-ethnic">
  </div>`,
  },
  {
    title:`Citizen`,
    content:`
    <fieldset>
    <section class="two-column background-style">
      <div class="option">
        <input type="radio" id="canadian" value="canadian" name="citizen">
        <label for="canadian">Canadian Citizen</label>
      </div>
      <div class="option">
        <input type="radio" id="resident" name="citizen" value="Permanent resident/Landed immigrant">
        <label for="resident">Permanent resident/Landed immigrant</label>
      </div>
      <div class="option">
        <input type="radio" id="refugee" name="citizen" value="refugee claimant">
        <label for="refugee">Refugee Claimant</label>
      </div>
      <div> 
        <input type="text" placeholder="other citizenship" id="other-citizenship" class="input-style">
      </div>
    </section>       
   </fieldset>
   <div class="submit-skip" id="btn-submit-skip">
   <input type="button" value="skip" class="op-btn btn-skip adjust-padding" id="skip-citizen">
   <input type="submit" value="submit" class="op-btn btn-submit" id="submit-citizen">
   </div>`,
  },

  {
    title:`Education`,
    content:`
    <fieldset>
    <section class="education-option background-style">
      <div class="option dimiss-bg edu-selector" id="edu-a" onmouseover="noSchool();" onmouseout="resetBubble();">
        <input type="radio" id="no-school" name="education" value="No schooling completed">
        <label for="no-school" class="edu-button">
          <span class="op-text">No schooling completed</span>
        </label>
      </div>
      <div class="option dimiss-bg edu-selector" onmouseover="grade0to8();" onmouseout="resetBubble();">
        <input type="radio" id="primary" name="education" value="0 to 8">
        <label for="primary" class="edu-button">
          <span class="op-text">grade 0 to 8</span>
        </label>
      </div>
      <div class="option dimiss-bg edu-selector" onmouseover="unHighschool();" onmouseout="resetBubble();">
        <input type="radio" id="undergrad-highschool" name="education" value="Some high school, no diploma">
        <label for="undergrad-highschool" class="edu-button">
          <span class="op-text">Some high school, no diploma</span>
        </label>
      </div>
      <div class="option dimiss-bg edu-selector" onmouseover="highschool();" onmouseout="resetBubble();">
        <input type="radio" id="grad-highschool" name="education" value="High school graduate, diploma or the equivalent">
        <label for="grad-highschool" class="edu-button">
          <span class="op-text">High school graduate, diploma or the equivalent</span>
        </label>
      </div>
      <div class="option dimiss-bg edu-selector" onmouseover="unCollege();" onmouseout="resetBubble();">
        <input type="radio" id="undergrad-college" name="education" value="Some college credit, no degree">
        <label for="undergrad-college" class="edu-button">
          <span class="op-text">Some college credit, no degree</span>
        </label>
      </div>
      <div class="option dimiss-bg edu-selector" onmouseover="training();" onmouseout="resetBubble();">
        <input type="radio" id="training" name="education" value="Trade/technical/vocational training">
        <label for="training" class="edu-button">
          <span class="op-text">Trade/technical/vocational training</span>
        </label>
      </div>
      <div class="option dimiss-bg edu-selector" onmouseover="associate();" onmouseout="resetBubble();">
        <input type="radio" id="associate-degree" name="education" value="associate degree">
        <label for="associate-degree" class="edu-button">
          <span class="op-text">Associate degree</span>
        </label>
      </div>
      <div class="option dimiss-bg edu-selector" onmouseover="bachelor();" onmouseout="resetBubble();">
        <input type="radio" id="bachelor" name="education" value="Bachelor’s degree">
        <label for="bachelor" class="edu-button">
          <span class="op-text">Bachelor’s degree</span>
        </label>
      </div>
      <div class="option dimiss-bg edu-selector" onmouseover="master();" onmouseout="resetBubble();">
        <input type="radio" id="master" name="education" value="Master’s degree">
        <label for="master" class="edu-button">
          <span class="op-text">Master’s degree</span>
        </label>
      </div>
      <div class="option dimiss-bg edu-selector" onmouseover="professional();" onmouseout="resetBubble();">
        <input type="radio" id="professional" name="education" value="Professional degree">
        <label for="professional" class="edu-button">
          <span class="op-text">Professional degree</span>
        </label>
      </div>
      <div class="option dimiss-bg edu-selector" onmouseover="doctorate();" onmouseout="resetBubble();">
        <input type="radio" id="doctorate" name="education" value="Doctorate degree">
        <label for="doctorate" class="edu-button">
          <span class="op-text">Doctorate degree</span>
        </label>
      </div>
      <div id="bubble-container" class="bubble-container">
        <div id="talk-bubble" class="talk-bubble tri-right border top-right-in">
          <div class="talktext">
            <p id="edu-options"></p>
          </div>
        </div>
      </div>
    </section> 
   </fieldset>
   <div class="submit-skip" id="btn-submit-skip">
   <input type="button" value="skip" class="op-btn btn-skip adjust-padding" id="skip-education">
   <input type="submit" value="submit" class="op-btn btn-submit" id="submit-education">
   </div>`,
  },

  {
    title:`Employment`,
    content:`
    <section class="background-style grid-content">
    <select class="scroll-select" size="1" id="op-employment">
        <option value="Employed for wages">Employed for wages</option>
        <option value="Full time">Full time</option>
        <option value="Part time">Part time</option>
        <option value="Self-employed">Self-employed</option>
        <option value="No work experience">No work experience</option>
        <option value="Out of work and looking for work">Out of work and looking for work</option>
        <option value="Out of work, but not currently looking for work">Out of work, but not currently looking for work</option>
        <option value="Homemaker">Homemaker</option>
        <option value="Student">Student</option>
        <option value="Military">Military</option>
        <option value="Retired">Retired</option>
        <option value="Unable to work">Unable to work</option>
        <option value="Volunteer">Volunteer</option>
    </select>
  </section>
  <div class="submit-skip" id="btn-submit-skip">
  <input type="button" value="skip" class="op-btn btn-skip adjust-padding" id="skip-employment">
  <input type="submit" value="submit" class="op-btn btn-submit" id="submit-employment">
  </div>`,
  },

  {
    title:`Income Source`,
    content:`
    <fieldset>
    <section class="two-column background-style">
      <div class="option">
        <input type="radio" id="employment" value="employment" name="source">
        <label for="employment">Employment</label>
      </div>
      <div class="option">
        <input type="radio" id="odsp" name="source" value="ODSP">
        <label for="odsp">ODSP</label>
      </div>
      <div class="option">
        <input type="radio" id="ontario-works" name="source" value="Ontario Works">
        <label for="ontario-works">Ontario Works</label>
      </div>
      <div> 
        <input type="text" placeholder="other" id="other-source" class="input-style">
      </div>
    </section>      
   </fieldset>
   <div class="submit-skip" id="btn-submit-skip">
   <input type="button" value="skip" class="op-btn btn-skip adjust-padding" id="skip-source">
   <input type="submit" value="submit" class="op-btn btn-submit" id="submit-source">
   </div>`,
  },

  {
    title:`Income`,
    content:`
    <fieldset>
    <section class="income-area background-style">
      <div class="op-income">
        <input type="radio" id="income-one" name="income" value="Less than $20,000">
        <label for="income-one">
          <div class="rect rect-one"></div>
          <span class="income-num">Less than $20,000</span>
        </label>
      </div>
      <div class="op-income">
        <input type="radio" id="income-two" name="income" value="$20,000 to $34,999">
        <label for="income-two">
          <div class="rect rect-two"></div>
          <span class="income-num">$20,000 to $34,999</span>
        </label>
      </div>            
      <div class="op-income">
        <input type="radio" id="income-three" name="income" value="$35,000 to $49,999">
        <label for="income-three">
          <div class="rect rect-three"></div>
          <span class="income-num">$35,000 to $49,999</span>
        </label>
      </div>            
      <div class="op-income">
        <input type="radio" id="income-four" name="income" value="$50,000 to $74,999">
        <label for="income-four">
          <div class="rect rect-four"></div>
          <span class="income-num">$50,000 to $74,999</span>
        </label>
      </div>  
      <div class="op-income">
        <input type="radio" id="income-five" name="income" value="$75,000 to $99,999">
        <label for="income-five">
          <div class="rect rect-five"></div>
          <span class="income-num">$75,000 to $99,999</span>
        </label>
      </div>
      <div class="op-income">
          <input type="radio" id="income-six" name="income" value="Over $100,000">
          <label for="income-six">
            <div class="rect rect-six"></div>
            <span class="income-num">Over $100,000</span>
          </label>
        </div>                         
    </section>       
   </fieldset>
   <div class="submit-skip" id="btn-submit-skip">
   <input type="button" value="skip" class="op-btn btn-skip adjust-padding" id="skip-income">
   <input type="submit" value="submit" class="op-btn btn-submit" id="submit-income">
   </div>`,
  },

  {
    title:`Needed Service`,
    content:`
    <fieldset>
    <section class="three-columns background-style">
      <div class="option">
        <input type="checkbox" name= "service" id="literacy-courses" class="hide-item" value="Literacy Courses">
        <label for="literacy-courses">Literacy Courses </label>
      </div>
      <div class="option">
        <input type="checkbox" name= "service" id="employment-service" class="hide-item" value="Employment Services">
        <label for="employment-service">Employment Services</label>
      </div>
      <div class="option">
        <input type="checkbox" name= "service" id="health-service" class="hide-item" value="Health Services">
        <label for="health-service">Health Services</label>
      </div>
      <div class="option">
        <input type="checkbox" name= "service" id="accessibility" class="hide-item" value="Accessibility Services">
        <label for="accessibility">Accessibility Services </label>
      </div>
      <div class="option">
        <input type="checkbox" name= "service" id="advocacy" class="hide-item" value="Advocacy">
        <label for="advocacy">Advocacy</label>
      </div>
      <div class="option">
        <input type="checkbox" name ="service" id="house-support" class="hide-item" value="Housing supports">
        <label for="house-support">Housing supports</label>
      </div>
      <div class="option">
        <input type="checkbox" name= "service" id="income-support" class="hide-item" value="Income supports">
        <label for="income-support">Income supports</label>
      </div>
      <div class="option">
          <input type="checkbox" name= "service" id="mental-health" class="hide-item" value="Mental Health Services">
          <label for="mental-health">Mental Health Services</label>
        </div>            
      <div> 
        <input type="text" name="service-others" placeholder="other services" id="other-service" class="input-style">
      </div>
    </section>       
   </fieldset>
   <div class="submit-skip" id="btn-submit-skip">
   <input type="button" value="skip" class="op-btn btn-skip adjust-padding" id="skip-service">
   <input type="submit" value="submit" class="op-btn btn-submit" id="submit-service">
   </div>`,
  },

  {
    title:`Literacy`,
    content:`
    <fieldset>
    <section class="three-columns background-style">
      <div class="option">
        <input type="checkbox" id="grammar" value="English grammar">
        <label for="grammar">English grammar</label>
      </div>
      <div class="option">
        <input type="checkbox" id="vocabulary" value="English vocabulary">
        <label for="vocabulary">English vocabulary</label>
      </div>
      <div class="option">
        <input type="checkbox" id="sentence-structure" value="English sentence structure">
        <label for="sentence-structure">English sentence structure</label>
      </div>
      <div class="option">
        <input type="checkbox" id="fill-form" value="How to fill out a form">
        <label for="fill-form">How to fill out a form</label>
      </div>
      <div class="option">
        <input type="checkbox" id="math" value="math">
        <label for="math">Math</label>
      </div>
      <div class="option">
        <input type="checkbox" id="asl" value="ASL">
        <label for="asl">ASL</label>
      </div>
      <div> 
        <input type="text" placeholder="other literacy" id="other-literacy" class="input-style">
      </div>
    </section>       
   </fieldset>
   <div class="submit-skip" id="btn-submit-skip">
   <input type="button" value="skip" class="op-btn btn-skip adjust-padding" id="skip-literacy">
   <input type="submit" value="submit" class="op-btn btn-submit" id="submit-literacy">
   </div>`,
  },

 ]


let userInput =[{title:`Identity`,page:`identity`, img:`img/blue_icons_SVG/ident.svg`,answer:``,typeAnswer:``, number:`1`,},
  {title:`Post code`, page:`post-code`, img:`img/blue_icons_SVG/post_code.svg`, answer:``,typeAnswer:``,number:`2`,},
  {title:`Gender`,page:`gender`, img:`img/blue_icons_SVG/gender.svg`, answer:``,typeAnswer:``, number:`1`},
  {title:`Language`,page:`language`, img:`img/blue_icons_SVG/language.svg`,answer:``,typeAnswer:``,number:`2`},
  {title:`Age`, page:`age`,  img:`img/blue_icons_SVG/age.svg`,answer:``,typeAnswer:``,number:`1`},
  {title:`Ethnic Origin`, page:`ethnic`, img:`img/blue_icons_SVG/ethnic_origin.svg`, answer:``,typeAnswer:``,number:`2`},
  {title:`Citizenship`, page:`citizen`,  img:`img/blue_icons_SVG/citizenship.svg`, answer:``,typeAnswer:``,number:`1`},
  {title:`Education`, page:`education`, img:`img/blue_icons_SVG/education.svg`,answer:``,typeAnswer:``,number:`2`},
  {title:`Employment`,  page:`employment`, img:`img/blue_icons_SVG/employement.svg`,answer:``,typeAnswer:``,number:`1`},
  {title:`Income Source`, page:`income-source`,  img:`img/blue_icons_SVG/income_source.svg`,answer:``,typeAnswer:``,number:`2`},
  {title:`Income`,  page:`income`, img:`img/blue_icons_SVG/income.svg`,answer:``,typeAnswer:``,number:`1`},
  {title:`Needed Service`,  page:`service`, img:`img/blue_icons_SVG/needed_service.svg`,answer:``,typeAnswer:``,number:`2`},
  {title:`Literacy`,  page:`literacy`, img:`img/blue_icons_SVG/literacy.svg`,answer:``,typeAnswer:``,number:`1`},

  ]



const getLocalStorage=()=>{
  const str=localStorage.getItem(`option`);
  const arr= JSON.parse(str);
  console.log(arr)
  return arr;
}

const setLocalStorage=()=>{
  const str = JSON.stringify(userAnswer);
  console.log(str);
  localStorage.setItem(`option`,str)
}

let userAnswer =userInput||getLocalStorage();
let $questionText = document.getElementById(`question-text`);


// check mark function

const checkMark =(i)=>{
  if(userAnswer[i].answer!=``){
    document.getElementsByClassName(`checked-icon`)[i].classList.add(`show`);
    document.getElementsByClassName(`btn-round`)[i].style.backgroundColor=`rgb(15,121,190)`;
  }else{return}
}

// toggle thanks page funciton 
 function hideThanks (){
  document.querySelector(`.main-thanks`).classList.add(`hide-item`);
  document.getElementById(`mobile-content`).classList.remove(`hide-item`);
 }
// hide video and question section on page
 function hideContent(){
  document.querySelector(`.main-thanks`).classList.remove(`hide-item`);
  document.getElementById(`mobile-content`).classList.add(`hid-item`); 
}
  
// hide away review page*****************************************************************
function hideReview (){
  document.querySelector(`.all-answer`).classList.add(`hide-item`)
}

// selected option check mark ************************************************************

const checkOptions =(item,i)=>{
  if(item.value ==userAnswer[i].answer&&userAnswer[i].typeAnswer==``){
    item.checked=true;
  }else{
    item.checked=false;
  }
}

const checkMultiOptions =(item,i)=>{
  let array = userAnswer[i].answer
  console.log(array)
  if(array.includes(item.value)){
    item.checked=true;
  }else{
    item.checked=false;
  }
}
// adjust content for open page
function adjustContent (){
  document.querySelector(`.main-content`).classList.add(`hide-item`);
  document.getElementById(`mobile-content`).classList.remove(`hide-from-welcome`);
  document.getElementById(`mobile-content`).style.display="grid";
  document.querySelector(`.title`).classList.remove(`hide-item`);
  document.querySelector(`.center-mobile`).classList.remove(`hide-from-welcome`);

  document.querySelector(`.video-identity`).classList.remove(`hide-item`);
  document.getElementById(`question-text`).classList.remove(`hide-item`);
  document.getElementById(`main-form`).classList.remove(`hide-item`);
}

// hide all main content in mobile version 
function hideMobileMain (){
  document.querySelector(`.main-content`).classList.add(`hide-item`);
  document.getElementById(`mobile-content`).classList.add(`hide-item`);
}
// submit btn function*****************************************************

function openPage(page){
  let intVid = document.getElementById('intVid');
  let qVid = document.getElementById('qVid');
  let qVideo = document.getElementById('qVideo');

  if(page == 'identity'){
    expandPageTitle(page);
    hideReview ();
    adjustContent();
    document.getElementById(`title-name`).innerText = questionsArray[0].title;
    document.getElementById(`question-content`).innerHTML=``;
    document.getElementById(`question-content`).innerHTML=questionsArray[0].content;
    document.getElementById(`header-icon`).innerHTML = `<img src="img/icons/identy.svg" alt="icon-identity" width="40px">`
    $questionText.innerHTML= questionsText[0];
    hideThanks();

    intVid.style.display = "none";
    qVid.style.display = "block";
    qVideo.currentTime = 0;

    let a=document.getElementById(`deaf`)
    let b=document.getElementById(`deafened`)
    let c=document.getElementById(`hard-hearing`)
    let d=document.getElementById(`blind`)
    let selector=[a,b,c,d];
    selector.forEach(item=>checkOptions(item,0));
  
    let $skipIdentity = document.getElementById(`skip-identity`)
    let $submitIdentity = document.getElementById(`submit-identity`)

    $skipIdentity.addEventListener(`click`,event=>{
      event.preventDefault();
      openPage(`post-code`)
    })
   

    $submitIdentity.addEventListener(`click`,event=>{
       event.preventDefault();
      userAnswer[0].answer =document.getElementById(`main-form`).identity.value   
      console.log(userAnswer[0].answer);
      setLocalStorage();
      openPage("post-code");
      checkMark(0);
    })
  }
  else if(page=='post-code'){
    qVideo.currentTime = 33;
    expandPageTitle(page);
    hideReview ();
    adjustContent ()
    document.getElementById(`title-name`).innerText = questionsArray[1].title;
    document.getElementById(`question-content`).innerHTML=``;
    document.getElementById(`question-content`).innerHTML=questionsArray[1].content;
    document.getElementById(`header-icon`).innerHTML = `<img src="img/icons/p_code.svg" width="40px">`
    document.getElementById(`main-form`).code.value=userAnswer[1].answer ;

    $questionText.innerHTML= questionsText[1];
    hideThanks();

    let $skipCode = document.getElementById(`skip-code`)
    let $submitCode = document.getElementById(`submit-code`)

    $skipCode.addEventListener(`click`,event=>{
      event.preventDefault();
      openPage(`gender`)
    })
   

    $submitCode.addEventListener(`click`,event=>{
      event.preventDefault();
      userAnswer[1].answer =document.getElementById(`main-form`).code.value;
      console.log(userAnswer[1].answer);
       setLocalStorage();
       checkMark(1);
        openPage("gender");

    });

  }
  else if(page==`gender`){
    qVideo.currentTime = 48;
    expandPageTitle(page);
    hideReview ();
    adjustContent ();
    document.getElementById(`title-name`).innerText = questionsArray[2].title;
    document.getElementById(`question-content`).innerHTML=``;
    document.getElementById(`question-content`).innerHTML=questionsArray[2].content;
    document.getElementById(`header-icon`).innerHTML = `<img src="img/icons/gender.svg" alt="icon-gender" width="40px">`

    if(userAnswer[2].typeAnswer!=``){
      document.getElementById(`self-describe`).value=userAnswer[2].typeAnswer;
    }else{
      document.getElementById(`self-describe`).value=``;
    }


     $questionText.innerHTML= questionsText[2];
      hideThanks();

      //  persist check mark for potion
      let a = document.getElementById(`male`)
      let b = document.getElementById(`female`)
      let c = document.getElementById(`third`)
      let d = document.getElementById(`no`)
      let e= document.getElementById(`self-describe`)
      let selector=[a,b,c,d,e]
      selector.forEach(item=>checkOptions(item,2));

      let $skipGender = document.getElementById(`skip-gender`)
      let $submitGender = document.getElementById(`submit-gender`)

      $skipGender.addEventListener(`click`,event=>{
        event.preventDefault();
        openPage(`language`)
      })
     

       $submitGender.addEventListener(`click`,event=>{
         event.preventDefault();

         if(document.getElementById(`self-describe`).value ==``){
          userAnswer[2].answer =document.getElementById(`main-form`).gender.value;
          userAnswer[2].typeAnswer=``
         }else{
          userAnswer[2].answer =document.getElementById(`self-describe`).value;
          userAnswer[2].typeAnswer=document.getElementById(`self-describe`).value;
         }
      
         console.log(userAnswer[2].answer);
         setLocalStorage();
         checkMark(2);
        openPage(`language`);
        })  
    
      
  }
  else if(page==`language`){
    qVideo.currentTime = 77;
    expandPageTitle(page);
    hideReview ();
    adjustContent ();
    document.getElementById(`title-name`).innerText = questionsArray[3].title;
    document.getElementById(`question-content`).innerHTML=``;
    document.getElementById(`question-content`).innerHTML=questionsArray[3].content;
    document.getElementById(`header-icon`).innerHTML = `<img src="img/icons/language.svg" alt="icon-language" width="40px">`
    
    if(userAnswer[3].typeAnswer!=``){
      document.getElementById(`other-language`).value=userAnswer[3].typeAnswer
    }else{
      document.getElementById(`other-language`).value=``;
    }


       $questionText.innerHTML= questionsText[3];
       hideThanks();
       let a= document.getElementById(`asl`);
       let b= document.getElementById(`written`);
       let c= document.getElementById(`lsq`);
       let d= document.getElementById(`indigenous`);
       let e= document.getElementById(`spoken-french`);
       let f= document.getElementById(`written-french`);
       let g= document.getElementById(`spoken-english`);
       let h =document.getElementById(`other-language`);
       let options =[a,b,c,d,e,f,g,]

       options.forEach(item=>checkMultiOptions(item,3))

       let $skipLanguage = document.getElementById(`skip-language`)
       let $submitLanguage = document.getElementById(`submit-language`)

       $skipLanguage.addEventListener(`click`,event=>{
        event.preventDefault();
        openPage(`age`)
      })
      

       $submitLanguage.addEventListener(`click`,event=>{
         event.preventDefault();
         let result=[];
         options.forEach((item)=>{
           if(item.checked){
             result.push(item.value)
           }else{
             return;
           }
         })
         if(h!=``){
           result.push(h.value)
         }
         userAnswer[3].typeAnswer=h.value;
         userAnswer[3].answer =result;
         setLocalStorage();
         checkMark(3);
         openPage(`age`);
        })  
    
  }
  else if(page==`age`){
    qVideo.currentTime = 112;
    expandPageTitle(page);
    hideReview ();
    adjustContent ();
    document.getElementById(`title-name`).innerText = questionsArray[4].title;
    document.getElementById(`question-content`).innerHTML=``;
    document.getElementById(`question-content`).innerHTML=questionsArray[4].content;
    document.getElementById(`header-icon`).innerHTML = `<img src="img/icons/age.svg" alt="icon-age" width="40px">`


    $questionText.innerHTML= questionsText[4];
    hideThanks();

    let a =document.getElementById(`under-sixteen`)
    let b =document.getElementById(`sixteen`)
    let c =document.getElementById(`eighteen`)
    let d =document.getElementById(`thirty`)
    let e =document.getElementById(`forty`)
    let f =document.getElementById(`fifty`)
    let g =document.getElementById(`sixty`)
    let selector =[a,b,c,d,e,f,g]

    selector.forEach(item=>checkOptions(item,4))

    let $skipAge = document.getElementById(`skip-age`)
    let $submitAge = document.getElementById(`submit-age`)

    $skipAge.addEventListener(`click`,event=>{
     event.preventDefault();
     openPage(`ethnic`)
   })
  

   $submitAge.addEventListener(`click`,event=>{
     event.preventDefault();
     userAnswer[4].answer =document.getElementById(`main-form`).age.value;
     setLocalStorage();
     checkMark(4);
     openPage(`ethnic`);
   })

  }
  else if(page==`ethnic`){
    qVideo.currentTime = 144;
    expandPageTitle(page);
    hideReview ();
    adjustContent ();
    document.getElementById(`title-name`).innerText = questionsArray[5].title;
    document.getElementById(`question-content`).innerHTML=``;
    document.getElementById(`question-content`).innerHTML=questionsArray[5].content;
    document.getElementById(`header-icon`).innerHTML = `<img src="img/icons/etchnic_origin.svg" alt="icon-ethnic-origin" width="40px">`
    let choice =document.getElementById(`op-for-ethnic`);
    function checkSelection (i){
      for(let i=0; i<choice.options.length;i++){
        if(choice.options[i].value==userAnswer[5].answer){
          choice.options[i].selected=true;
        }else{false;}
      }
    }

    checkSelection();
    if(userAnswer[5].typeAnswer!=``){
      document.getElementById(`other-ethnic`).value = userAnswer[5].typeAnswer;
    }else{
      document.getElementById(`other-ethnic`).value=``;

    }


       $questionText.innerHTML= questionsText[5];
       hideThanks();

       let $skipEthnic= document.getElementById(`skip-ethnic`)
       let $submitEthnic = document.getElementById(`submit-ethnic`)

       $skipEthnic.addEventListener(`click`,event=>{
        event.preventDefault();
        openPage(`citizen`)
      })
  

       $submitEthnic.addEventListener(`click`,event=>{
         event.preventDefault();
         let inputEthnic = document.getElementById(`other-ethnic`).value;
         if(inputEthnic==``){
          let selector = document.getElementById(`op-for-ethnic`);
          let value = selector[selector.selectedIndex].value;
          userAnswer[5].answer =value;
         }else{
           userAnswer[5].answer = inputEthnic;
           userAnswer[5].typeAnswer=inputEthnic;
         }

         setLocalStorage();
         checkMark(5);
         openPage(`citizen`);
       })

  }
  else if(page==`citizen`){
    qVideo.currentTime = 227;
    expandPageTitle(page);
    hideReview ();
    adjustContent ();
    document.getElementById(`title-name`).innerText = questionsArray[6].title;
    document.getElementById(`question-content`).innerHTML=``;
    document.getElementById(`question-content`).innerHTML=questionsArray[6].content;
    document.getElementById(`header-icon`).innerHTML = `<img src="img/icons/citizenship.svg" alt="icon-citizenship" width="40px">`
    
    document.getElementById(`other-citizenship`).value=userAnswer[6].typeAnswer

     $questionText.innerHTML= questionsText[6];
     hideThanks();

     let a =document.getElementById(`canadian`)
     let b =document.getElementById(`resident`)
     let c =document.getElementById(`refugee`)
     let d =document.getElementById(`other-citizenship`)
     let selector =[a,b,c,d]

     selector.forEach(item=>checkOptions(item,6))

     let $skipCitizen = document.getElementById(`skip-citizen`)
     let $submitCitizen = document.getElementById(`submit-citizen`)

     $skipCitizen.addEventListener(`click`,event=>{
      event.preventDefault();
      openPage(`education`)
    })

// submit funciton ****************************************************************
     $submitCitizen.addEventListener(`click`,event=>{
       event.preventDefault();
       let inputCitizen = document.getElementById(`other-citizenship`).value;
       if(inputCitizen==``){
         userAnswer[6].answer=document.getElementById(`main-form`).citizen.value
       }else{
         userAnswer[6].answer=inputCitizen
         userAnswer[6].typeAnswer=inputCitizen;
       }
       setLocalStorage();
       checkMark(6);
       openPage(`education`);
     })

  }
  else if(page==`education`){
    qVideo.currentTime = 251;
    expandPageTitle(page);
    hideReview ();
    adjustContent ();
    document.getElementById(`title-name`).innerText = questionsArray[7].title;
    document.getElementById(`question-content`).innerHTML=``;
    document.getElementById(`question-content`).innerHTML=questionsArray[7].content;
    document.getElementById(`header-icon`).innerHTML = `<img src="img/icons/education2.svg" alt="icon-education" width="40px">`

    

     $questionText.innerHTML= questionsText[7];
     hideThanks();

     let a =document.getElementById(`no-school`)
     let b =document.getElementById(`primary`)
     let c =document.getElementById(`undergrad-highschool`)
     let d =document.getElementById(`grad-highschool`)
     let e =document.getElementById(`undergrad-college`)
     let f =document.getElementById(`training`)
     let g =document.getElementById(`associate-degree`)
     let h =document.getElementById(`bachelor`)
     let i =document.getElementById(`master`)
     let j =document.getElementById(`professional`)
     let k =document.getElementById(`doctorate`)
     let selector =[a,b,c,d,e,f,g,h,i,j,k]

     selector.forEach(item=>checkOptions(item,7))
// submit funciton ****************************************************************

    let $skipEducation= document.getElementById(`skip-education`)
    let $submitEducation = document.getElementById(`submit-education`)

    $skipEducation.addEventListener(`click`,event=>{
      event.preventDefault();
      openPage(`employment`)
    })


     $submitEducation.addEventListener(`click`,event=>{
        event.preventDefault();
        userAnswer[7].answer = document.getElementById(`main-form`).education.value;
       setLocalStorage();
       checkMark(7);
       openPage(`employment`);
     })
     
  }
  else if(page=='employment'){
    qVideo.currentTime = 320;
    expandPageTitle(page);
    hideReview ();
    adjustContent ();
    document.getElementById(`title-name`).innerText = questionsArray[8].title;
    document.getElementById(`question-content`).innerHTML=``;
    document.getElementById(`question-content`).innerHTML=questionsArray[8].content;
    document.getElementById(`header-icon`).innerHTML = `<img src="img/icons/employment.svg" alt="icon-employment" width="40px">`
    let choice =document.getElementById(`op-employment`);
    function checkSelection (i){
      for(let i=0; i<choice.options.length;i++){
        if(choice.options[i].value==userAnswer[8].answer){
          choice.options[i].selected=true;
        }else{false;}
      }
    }

     $questionText.innerHTML= questionsText[8];
     hideThanks();
     checkSelection();

    let $skipEmployment = document.getElementById(`skip-employment`)
    let $submitEmployment = document.getElementById(`submit-employment`)

    $skipEmployment.addEventListener(`click`,event=>{
      event.preventDefault();
      openPage(`income-source`)
    })


     $submitEmployment.addEventListener(`click`,event=>{
       event.preventDefault();
       let selector = document.getElementById(`op-employment`);
       let value = selector[selector.selectedIndex].value;
       userAnswer[8].answer = value;
       setLocalStorage();
       checkMark(8);
       openPage(`income-source`);
     })
  }
  else if(page=='income-source'){
    qVideo.currentTime = 376;
    expandPageTitle(page);
    hideReview ();
    adjustContent ();
    document.getElementById(`title-name`).innerText = questionsArray[9].title;
    document.getElementById(`question-content`).innerHTML=``;
    document.getElementById(`question-content`).innerHTML=questionsArray[9].content;
    document.getElementById(`header-icon`).innerHTML = `<img src="img/icons/income_source.svg" alt="icon-income-source" width="40px">`


     $questionText.innerHTML= questionsText[9];
     hideThanks();

     let a =document.getElementById(`employment`)
     let b =document.getElementById(`odsp`)
     let c =document.getElementById(`ontario-works`)
     let d =document.getElementById(`other-source`)
     let selector =[a,b,c,d]

     selector.forEach(item=>checkOptions(item,9))
    //  submit function ******************************************************
    let $skipSource= document.getElementById(`skip-source`)
    let $submitSource = document.getElementById(`submit-source`)

    $skipSource.addEventListener(`click`,event=>{
      event.preventDefault();
      openPage(`income`)
    })


     $submitSource.addEventListener(`click`,event=>{
       event.preventDefault();
       let inputSource = document.getElementById(`other-source`).value;
       if(inputSource==``){
         userAnswer[9].answer=document.getElementById(`main-form`).source.value;
       }else{
         userAnswer[9].answer =inputSource;
       }
       setLocalStorage();
       checkMark(9);
       openPage(`income`)
     })
  }
  else if(page=='income'){
    qVideo.currentTime = 406;
    expandPageTitle(page);
    hideReview ();
    adjustContent ();
    document.getElementById(`title-name`).innerText = questionsArray[10].title;
    document.getElementById(`question-content`).innerHTML=``;
    document.getElementById(`question-content`).innerHTML=questionsArray[10].content;
    document.getElementById(`header-icon`).innerHTML = `<img src="img/icons/income.svg" alt="icon-income" width="40px">`


     $questionText.innerHTML= questionsText[10];
     hideThanks();

     let a =document.getElementById(`income-one`)
     let b =document.getElementById(`income-two`)
     let c =document.getElementById(`income-three`)
     let d =document.getElementById(`income-four`)
     let e =document.getElementById(`income-five`)
     let f =document.getElementById(`income-six`)
     let selector =[a,b,c,d,e,f]

     selector.forEach(item=>checkOptions(item,10))
// submit funciton ****************************************************************
    let $skipIncome = document.getElementById(`skip-income`)
    let $submitIncome = document.getElementById(`submit-income`)
     $submitIncome.addEventListener(`click`,event=>{
       event.preventDefault();
       userAnswer[10].answer = document.getElementById(`main-form`).income.value;
       setLocalStorage();
       checkMark(10);
       openPage(`service`);
     })

     $skipIncome.addEventListener(`click`,event=>{
      event.preventDefault();
      openPage(`service`)
     })
  }
  else if(page=='service'){
    qVideo.currentTime = 447;
    expandPageTitle(page);
    hideReview ();
    adjustContent ();
    document.getElementById(`title-name`).innerText = questionsArray[11].title;
    document.getElementById(`question-content`).innerHTML=``;
    document.getElementById(`question-content`).innerHTML=questionsArray[11].content;
    document.getElementById(`header-icon`).innerHTML = `<img src="img/icons/needed_service.svg" alt="icon-needed-service" width="40px">`
    document.getElementById(`other-service`).value=userAnswer[11].typeAnswer;

     $questionText.innerHTML= questionsText[11];
     hideThanks();

     let optA = document.getElementById(`literacy-courses`);
     let optB = document.getElementById(`employment-service`);
     let optC = document.getElementById(`health-service`);
     let optD = document.getElementById(`accessibility`);
     let optE = document.getElementById(`advocacy`);
     let optF = document.getElementById(`house-support`);
     let optG = document.getElementById(`income-support`);
     let optH = document.getElementById(`mental-health`);
     let optI = document.getElementById(`other-service`)  
    let allOptions =[optA, optB, optC, optD, optE, optF, optG, optH];

    allOptions.forEach(item=>checkMultiOptions(item, 11))
    //submit funciton **********************************************************************  

    let $skipService = document.getElementById(`skip-service`)
    let $submitService = document.getElementById(`submit-service`)

    $skipService.addEventListener(`click`,event=>{
      event.preventDefault();
      openPage(`literacy`)
    })

     $submitService.addEventListener(`click`,event=>{
       event.preventDefault();
       let result =[];

        allOptions.forEach((opt)=>{
          if(opt.checked){
            result.push(opt.value);
         }else{return;
        }
        })

        if(optI !=``){
          result.push(optI.value);
          userAnswer[11].typeAnswer=optI.value;
        }else{return;
        }
        userAnswer[11].answer=result;
        setLocalStorage();
        checkMark(11);
        openPage(`literacy`);
       console.log(allOptions);
       console.log(result);
       
      
     })
  }
  else if(page=='literacy'){
    qVideo.currentTime = 511;
    expandPageTitle(page);
     hideReview();
     adjustContent ();
    document.getElementById(`title-name`).innerText = questionsArray[12].title;
    document.getElementById(`question-content`).innerHTML=``;
    document.getElementById(`question-content`).innerHTML=questionsArray[12].content;
    // document.querySelector(`.main-content`).classList.add(`hide-item`);
    // document.getElementById(`mobile-content`).classList.remove(`hide-video`)
    
    document.getElementById(`header-icon`).innerHTML = `<img src="img/icons/literacy.svg" alt="icon-literacy" width="40px">`
    document.getElementById(`other-literacy`).value= userAnswer[12].typeAnswer;


     $questionText.innerHTML= questionsText[12];
     hideThanks();

     let a = document.getElementById(`grammar`);
     let b = document.getElementById(`vocabulary`);
     let c = document.getElementById(`sentence-structure`);
     let d = document.getElementById(`fill-form`);
     let e = document.getElementById(`math`);
     let f = document.getElementById(`asl`);
     let g = document.getElementById(`other-literacy`);
     let options =[a,b,c,d,e,f,];

     options.forEach(item=>checkMultiOptions(item,12));

     let $skipLiteracy = document.getElementById(`skip-literacy`)
     let $submitLiteracy  = document.getElementById(`submit-literacy`)


    // skip btn in literacy *********************************************
     $skipLiteracy.addEventListener(`click`,event=>{
       event.preventDefault();
       document.querySelector(`.main-thanks`).classList.remove(`hide-item`);
       document.getElementById(`mobile-content`).classList.add(`hide-from-welcome`);
       document.getElementById(`mobile-content`).style.display="none";
       document.getElementById(`title-name`).innerText=``
       document.getElementById(`header-icon`).innerHTML =``

     })
    //  submit btn in literacy *********************************************
     $submitLiteracy.addEventListener(`click`,event=>{
       event.preventDefault();
       let selectResult =[];

       options.forEach((opt)=>{
        if(opt.checked){
          selectResult.push(opt.value);
       }else{return;
      }
      })
      if(g!=``){
        selectResult.push(g.value);
        userAnswer[12].typeAnswer=g.value;
      }else{return;
      }
      userAnswer[12].answer = selectResult;
      setLocalStorage();
      checkMark(12);
      document.getElementById(`mobile-content`).style.display="none";
      document.getElementById(`title-name`).innerText=``
      document.getElementById(`header-icon`).innerHTML =``
      hideContent();
      console.log(selectResult)
     })
  }
  getLocalStorage();
}
// delect button for review page
function delect(item){
  if(item==`identity`){
    userAnswer[0].answer=``
    setLocalStorage()
    show()
  }else if(item==`post-code`){
    userAnswer[1].answer=``
    setLocalStorage()
    show()
  }else if(item ==`gender`){
    userAnswer[2].answer=``
    setLocalStorage()
    show()
  }else if(item ==`language`){
    userAnswer[3].answer=``
    setLocalStorage()
    show()
  }else if(item ==`age`){
    userAnswer[4].answer=``
    setLocalStorage()
    show()
  }else if(item ==`ethnic`){
    userAnswer[5].answer=``
    setLocalStorage()
    show()
  }else if(item==`citizen`){
    userAnswer[6].answer=``
    setLocalStorage()
    show()
  }else if(item==`education`){
    userAnswer[7].answer=``
    setLocalStorage()
    show()
  }else if(item==`employment`){
    userAnswer[8].answer=``
    setLocalStorage()
    show()
  }else if(item==`income-source`){
    userAnswer[9].answer=``
    setLocalStorage()
    show()
  }else if(item==`income`){
    userAnswer[10].answer=``
    setLocalStorage()
    show()
  }else if(item==`service`){
    userAnswer[11].answer=``
    setLocalStorage()
    show()
  }else if(item==`literacy`){
    userAnswer[12].answer=``
    setLocalStorage()
    show()
  }
else if(page==`nothing`){
  document.getElementById(`.center-mobile`).classList.add(`hide-from-welcome`);
}
}


// home page button
function homePage(){
  event.preventDefault();
  document.querySelector(`.center-welcome`).classList.remove(`hide-item`);
  document.querySelector(`.all-content`).classList.add(`hide-from-welcome`);
  document.querySelector(`.main-content`).classList.add(`hide-item`);
  document.querySelector(`.center-mobile`).classList.add(`hide-from-welcome`);
  document.querySelector(`.title`).classList.add(`hide-item`);
  openPage(`nothing`);

}



// start survey btn function ********************************************
document.querySelector(`.btn-start-survey`).addEventListener(`click`,event=>{
  event.preventDefault();

  document.querySelector(`.all-content`).classList.remove(`hide-from-welcome`);
  document.querySelector(`.center-welcome`).classList.add(`hide-item`);
  document.querySelector(`.main-content`).classList.remove(`hide-item`);

  
  
  if(screen.width>1000){
    openPage('identity');
    document.querySelector(`.title`).classList.remove(`hide-item`);
    document.querySelector(`.center-mobile`).classList.remove(`hide-from-welcome`);
  }else{
    document.querySelector(`.center-mobile`).classList.add(`hide-from-welcome`);
    document.querySelector(`.title`).classList.remove(`hide-item`);
    document.querySelector(`.video-identity`).classList.add(`hide-item`);
    document.getElementById(`question-text`).classList.add(`hide-item`);
    document.getElementById(`main-form`).classList.add(`hide-item`);
  }

})


// *Review page -print out answer function

function printOneAnswer(obj){

  let printAnswer=``;
  let printDelectBtn =``;
  let changeColor =``;

  if(obj.answer!=``){
    printAnswer =`<div style="color:black" id="with-answer">${obj.answer}</div>` 
    printDelectBtn=`<div onclick="delect(\`${obj.page}\`)"><img src="img/icons/delete_revisited.svg" alt="delect-icon" class="nav-icon add-margin"></div>`
  }else{
   printAnswer =`<div style="color:black"id="none-answer">None</div>`
   printDelectBtn=``
  }


    if (obj.number%2==0){
      changeColor=`rgb(211,211,211)`;
    }else{changeColor=`white`}
  return`
  <ul class="each-answer" style="background-color:${changeColor}">
  <li class="inline">
  <div class="inline-item">
    <div><img src="${obj.img}" alt="icon-identity" class="hide  nav-icon"></div>
    <div class="strong-text">${obj.title}</div>
  </div>
   ${printAnswer}
  </li>
  <li class="edit-delect">
    <div onclick ="openPage(\`${obj.page}\`)"><img src="img/icons/edit_revisited.svg" alt="edit-icon" class="nav-icon add-margin"></div>
    ${printDelectBtn}
  </li>
  </ul>`
}


// display review page**********************************************************************
function show(){
  hideThanks();
  document.querySelector(`.all-answer`).classList.remove(`hide-item`)
  document.getElementById(`mobile-content`).classList.add(`hide-from-welcome`);
  document.getElementById(`title-name`).innerText=`Review Page`;
  document.getElementById(`header-icon`).innerHTML=``;
  document.querySelector(`.answer-section`).innerHTML = userAnswer.map(printOneAnswer).join(``);
}




// on click funtion for top review btn *********************************************
document.getElementById(`top-review`).addEventListener(`click`,event=>{
  event.preventDefault();
  show()
  hideMobileMain ()
  document.getElementById(`mobile-content`).style.display=`none`;
  // if(screen.width<1000){
  //   document.getElementById(`top-review`).classList.add(`hide-item`)
  // }  
})


// mouse event for the top review button**********************************************
function mouseOver(){
  document.getElementById(`top-review`).style.borderColor="white";
}
function mouseOut(){
  document.getElementById(`top-review`).style.borderColor="rgba(225,225,225,0.4)"
}




function expandPageTitle(page){
  titleArray.forEach(title => {
    document.getElementById(title + `-h3`).style.cssText = ""
  });
  document.getElementById(page + `-h3`).style.cssText = "opacity:1;max-width:150px;padding-right:1em;padding-left:1em;"
}



/* EDUCATION RADIO BUTTON INTERACTIONS */

const eduArray = [
  'no-school',
  'grade-0to8',
  'unhighschool',
  'highschool',
  'uncollege',
  'training',
  'associate',
  'bachelor',
  'master',
  'professional',
  'doctorate'
]

function resetClass(){
  eduArray.forEach(classname => {
    document.getElementById(`talk-bubble`).classList.remove(classname);
  });
}
function noSchool(){
  document.getElementById(`bubble-container`).style.left = "20%";
  document.getElementById(`edu-options`).textContent = "No schooling completed";
  resetClass();
  document.getElementById(`talk-bubble`).classList.add("no-school");
}

function grade0to8(){
  document.getElementById(`bubble-container`).style.left = "20%";
  document.getElementById(`edu-options`).textContent = "Grade 0 to 8";
  resetClass();
  document.getElementById(`talk-bubble`).classList.add("grade-0to8");
}

function unHighschool(){
  document.getElementById(`bubble-container`).style.left = "23%";
  document.getElementById(`edu-options`).textContent = "Some high school, no diploma";
  resetClass();
  document.getElementById(`talk-bubble`).classList.add("unhighschool");
}
function highschool(){
  document.getElementById(`bubble-container`).style.left = "40%";
  document.getElementById(`edu-options`).textContent = "High school graduate, diploma or the equivalent (for example: GED)";
  resetClass();
  document.getElementById(`talk-bubble`).classList.add("highschool");
}
function unCollege(){
  document.getElementById(`bubble-container`).style.left = "40%";
  document.getElementById(`edu-options`).textContent = "Some college credit, no degree";
  resetClass();
  document.getElementById(`talk-bubble`).classList.add("uncollege");
}
function training(){
  document.getElementById(`bubble-container`).style.left = "47%";
  document.getElementById(`edu-options`).textContent = "Trade/technical/vocational training";
  resetClass();
  document.getElementById(`talk-bubble`).classList.add("training");
}
function associate(){
  document.getElementById(`bubble-container`).style.left = "63%";
  document.getElementById(`edu-options`).textContent = "Associate degree";
  resetClass();
  document.getElementById(`talk-bubble`).classList.add("associate");
}
function bachelor(){
  document.getElementById(`bubble-container`).style.left = "74%";
  document.getElementById(`edu-options`).textContent = "Bachelor’s degree";
  resetClass();
  document.getElementById(`talk-bubble`).classList.add("bachelor");
}
function master(){
  document.getElementById(`bubble-container`).style.left = "84%";
  document.getElementById(`edu-options`).textContent = "Master's degree";
  resetClass();
  document.getElementById(`talk-bubble`).classList.add("master");
}
function professional(){
  document.getElementById(`bubble-container`).style.left = "80%";
  document.getElementById(`edu-options`).textContent = "Professional degree";
  resetClass();
  document.getElementById(`talk-bubble`).classList.add("professional");
}
function doctorate(){
  document.getElementById(`bubble-container`).style.left = "88%";
  document.getElementById(`edu-options`).textContent = "Doctorate degree";
  resetClass();
  document.getElementById(`talk-bubble`).classList.add("doctorate");
}

function resetBubble(){
  let selectedValue = document.getElementById(`main-form`).education.value;
  if (selectedValue =="No schooling completed"){
    noSchool();
  }
  else if (selectedValue == "Grade 0 to 8"){
    grade0to8();
  }
  else if (selectedValue == "Some high school, no diploma") {
    unHighschool();
  }
  else if (selectedValue == "High school graduate, diploma or the equivalent (for example: GED)") {
    highschool();
  }
  else if (selectedValue == "Some college credit, no degree") {
    unCollege();
  }
  else if (selectedValue == "Trade/technical/vocational training") {
    training();
  }
  else if (selectedValue == "Associate degree") {
    associate();
  }
  else if (selectedValue == "Bachelor’s degree") {
    bachelor();
  }
  else if (selectedValue == "Master's degree") {
    master();
  }
  else if (selectedValue == "Professional degree") {
    professional();
  }
  else if (selectedValue == "Doctorate degree") {
    doctorate();
  }
}




