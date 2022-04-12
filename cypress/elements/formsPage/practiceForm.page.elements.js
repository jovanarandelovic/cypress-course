export default class PracticeFormPage {

    headerTitle = 'div[class="main-header"]';
    labelHobbies = 'input[id*="hobbies-checkbox"]';
//cy.get(labelHobbies).contains('Sport'); 
    inputFirstName = 'input[id="firstName"]';
    inputLastName = 'input[id="lastName"]';
    inputEmail = 'input[id="userEmail"]';
    inputGender = 'input[name="gender"]';
    inputMobile = 'input[id="userNumber"]';
    // radioFemale = 'input[value="Female"]';
    // radioOther = 'input[value="Other"]';
    inputBirthday = 'input[id="dateOfBirthInput"]';
    calendarPreviousMonth = 'button[aria-label="Previous Month"]';
    calendarNextMonth = 'aria-label="Next Month"';
    selectMonth = 'select[class="react-datepicker__month-select"]';
    selectYear = 'select[class="react-datepicker__year-select"]';
    selectDay = 'div[class="react-datepicker__month"]'
    inputSubjects = 'div[id="subjectsContainer"]';
    inputUpload = 'input[id="uploadPicture"]';
    inputCurrentAddress = 'textarea[id="currentAddress"]';
    submitButton = 'button[id="submit"]';
    submitModal = 'div[class="modal-content"]';
    submitModalHeader = 'div[class="modal-header"]';
    submitModalTable = 'tbody';
}