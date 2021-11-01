//Varients
const hamburgerVisual = document.querySelector('.hamburgerVisual');
const ham = document.querySelectorAll('.ham');
const ham1 = document.querySelector('.ham1');
const ham2 = document.querySelector('.ham2');
const ham3 = document.querySelector('.ham3');
const darkbackground = document.querySelector('.darkbackground');
const hamburgerItems = document.querySelector('.hamburgerItems');
const hamburgerItem = document.querySelector('.hamburgerItem');

const siteIntro = document.querySelector('.siteIntro');
const home = document.querySelector('.home');

const welcomeView = document.querySelector('.welcomeView');
const signInView = document.querySelector('.signInView');
const signUpView = document.querySelector('.signUpView');
const signInFormBack = document.querySelector('.signInFormBack');
const signUpFormBack = document.querySelector('.signUpFormBack');
const siteIntroBtn1 = document.querySelector('.siteIntroBtn1');
const siteIntroBtn2 = document.querySelector('.siteIntroBtn2');
const signInFormSubmit = document.querySelector('.signInFormSubmit');
const signUpFormSubmit = document.querySelector('.signUpFormSubmit');
const usernameInput = document.querySelector('.usernameInput');
const usernameInputSignUp = document.querySelector('.usernameInputSignUp');
const passwordInput = document.querySelector('.passwordInput');
const passwordInputSignUp = document.querySelector('.passwordInputSignUp');
const passwordInputSignUp2 = document.querySelector('.passwordInputSignUp2');
const breedSignUp = document.querySelector('.breedSignUp');
const dogNameSignUp = document.querySelector('.dogNameSignUp');
const ownersnameSignUp = document.querySelector('.ownersnameSignUp');
const citySignUp = document.querySelector('.citySignUp');
const countrySignUp = document.querySelector('.countrySignUp');

const usenameFailP = document.querySelector('.usenameFailP');
const usenameFailBtn = document.querySelector('.usenameFailBtn');


const footer = document.querySelector('.footer');

const events = document.querySelector('.events');
const people = document.querySelector('.people');
const profileSetting = document.querySelector('.profileSetting');
const eventBlock = document.querySelector('.eventBlock');
const peopleBlock = document.querySelector('.peopleBlock');
const profileSettingBlock = document.querySelector('.profileSettingBlock');
const profileCompactImg = document.querySelector('.profileCompactImg');

let mainProfilePic = document.querySelector('.profilePic');
let profileMainName = document.querySelector('.name');
let mainOwnerName = document.querySelector('.ownerName');
let mainLocation = document.querySelector('.location');

//Data

let inputValue = [];

const User = {};

let currentAccount = "";
let actualFriendList = [];


function Account(username, password, name, ownerName, breed, city, country, friendList, profileImage) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.ownerName = ownerName;
    this.breed = breed;
    this.city = city;
    this.country = country;
    this.friendList = friendList;
    this.profileImage = profileImage;
}

const Janna = new Account('Janna', '1234', 'Fenrir', 'Farane', 'Siberian Husky', 'Toronto', 'Canada', ['Maya1234', 'Maggie76'], 'https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1769&q=80' )
const Maya1234 = new Account('Maya1234', '123456','Maya', 'Farane', 'Siberian Husky','Toronto', 'Canada', ['Janna'], 'https://images.unsplash.com/photo-1561495376-dc9c7c5b8726?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80');
const Maggie76 = new Account('Magie76', '123456','Magie', 'Jane', 'Siberian Husky','Toronto', 'Canada', ['Maya1234'], 'https://images.unsplash.com/photo-1599692392256-2d084495fe15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80');

User.Janna = Janna;
User.Maya1234 = Maya1234;
User.Maggie76 = Maggie76;

// console.log(User)


//Event Listeners
hamburgerVisual.addEventListener('click', () => hamburgerandler());
hamburgerItem.addEventListener('click', () => closeHamburgerHandler())


siteIntroBtn1.addEventListener('click', () => {
    // it should go to a full page sign up form
    signUpHandler();
});
siteIntroBtn2.addEventListener('click', () => {
    // console.log('sign in btn')
    signInHandler();
});

signInFormBack.addEventListener('click', () => {
    signInBackHandler();
});

signUpFormBack.addEventListener('click', () => {
    signUpBackHandler();
});

signInFormSubmit.addEventListener('click', (e) => { 
    SignInFinal(e);
});

signUpFormSubmit.addEventListener('click', (e) => { 
    SignUpFinal(e);
});

siteIntro.addEventListener('keydown', (e) => { 
    if(e.keyCode === 13) { 
        SignInFinal(e);
    }
});

events.addEventListener('click', () => {
    goToEvents();
});

people.addEventListener('click', () => {
    goToPeople();
});

profileSetting.addEventListener('click', () => {
    goToProfileSetting();
});

profileCompactImg.addEventListener('click', () => {
    goToProfile();
});



//Functions

hamburgerandler = (e) => { 
    darkbackground.style.display = 'none' ? 'block' : 'none';
    hamburgerItems.style.transform = "translateX(500px)" ? "translateX(0)" : "translateX(500px)";
    ham1.classList.toggle('ham1Active');
    ham2.classList.toggle('ham2Active');
    ham3.classList.toggle('ham3Active');
}

closeHamburgerHandler = () => {
    hamburgerItems.style.transform = "translateX(0)" ? "translateX(500px)" : "translateX(0)";
    darkbackground.style.display = 'block' ? 'none' : 'block';
    ham1.classList.remove('ham1Active');
    ham2.classList.remove('ham2Active');
    ham3.classList.remove('ham3Active');
}

signInHandler = () => {
    welcomeView.style.display = 'none';
    signInView.style.display = 'block';
    footer.style.position = 'absolute';
}
signUpHandler = () => {
    welcomeView.style.display = 'none';
    signUpView.style.display = 'block';
    footer.style.position = 'relative';
}

signInBackHandler = () => { 
    welcomeView.style.display = 'block';
    signInView.style.display = 'none';
    footer.style.position = 'absolute';
}

signUpBackHandler = () => {
    welcomeView.style.display = 'block';
    signUpView.style.display = 'none';
    footer.style.position = 'absolute';
}

SignInFinal = (e) => {
    e.preventDefault();

    const usernameVal = usernameInput.value;
    const passwordVal = passwordInput.value;

    usernameVal === '' ? usernameInput.style.border = "4px solid #FE5F55" : usernameInput.style.border = "none";
    passwordVal === '' ? passwordInput.style.border = "4px solid #FE5F55" : passwordInput.style.border = "none";

    const userNameController = Object.keys(User).filter(el => el === usernameVal);

    if (userNameController.length !== 1) {

        usenameFailP.innerHTML = "This username doesn't exist";
        usenameFailP.style.display= 'block';
        usenameFailBtn.style.display= "inline-block";
        signInFormSubmit.style.display = 'none';

    } else if (userNameController.length === 1) { 

        if(User[usernameVal].password !== passwordVal) { 

            usenameFailP.innerHTML = "Forgot Password ?";
            usenameFailP.style.display= 'block';
            passwordInput.style.border = "4px solid #FE5F55";

        } else if (User[usernameVal].password === passwordVal) { 

            // console.log('usename accepted');
            siteIntro.style.display = 'none';
            home.style.display = 'block';
            footer.style.position= 'relative';
        }
    }

    currentAccount = usernameVal;
    console.log(Object.entries(User).filter(el => el[0] === currentAccount)[0][1].friendList);

    mainProfilePic.setAttribute('src', User[currentAccount].profileImage);
    profileMainName.innerHTML = User[currentAccount].name;
    mainOwnerName.innerHTML = User[currentAccount].ownerName;
    mainLocation.innerHTML = `${User[currentAccount].city} - ${User[currentAccount].country}`;

    footer.style.position = 'relative';
}

SignUpFinal = (e) => {
    usernameInputSignUp.value === '' ? usernameInputSignUp.style.border = "4px solid #FE5F55" : usernameInputSignUp.style.border = "none";
    (passwordInputSignUp.value === '' || passwordInputSignUp.value !== passwordInputSignUp2.value) ? passwordInputSignUp.style.border = "4px solid #FE5F55" : passwordInputSignUp.style.border = "none";
    (passwordInputSignUp2.value === '' || passwordInputSignUp2.value !== passwordInputSignUp.value) ? passwordInputSignUp2.style.border = "4px solid #FE5F55" : passwordInputSignUp2.style.border = "none";
    breedSignUp.value === '' ? breedSignUp.style.border = "4px solid #FE5F55" : breedSignUp.style.border = "none";
    dogNameSignUp.value === '' ? dogNameSignUp.style.border = "4px solid #FE5F55" : dogNameSignUp.style.border = "none";
    ownersnameSignUp.value === '' ? ownersnameSignUp.style.border = "4px solid #FE5F55" : ownersnameSignUp.style.border = "none";
    citySignUp.value === '' ? citySignUp.style.border = "4px solid #FE5F55" : citySignUp.style.border = "none";
    countrySignUp.value === '' ? countrySignUp.style.border = "4px solid #FE5F55" : countrySignUp.style.border = "none";


    const signUpCheckStatus = 
        usernameInputSignUp.value.length === 0 ? false : 
        passwordInputSignUp.value.length === 0 ? false : 
        passwordInputSignUp.value.length === 0 ? false : 
        (passwordInputSignUp2.value !== passwordInputSignUp.value) ? false : 
        breedSignUp.value.length === 0 ? false : 
        dogNameSignUp.value.length === 0 ? false : 
        ownersnameSignUp.value.length === 0 ? false : 
        citySignUp.value.length === 0 ? false : 
        countrySignUp.value.length === 0 ? false : true;


        if (signUpCheckStatus) { 
            User[usernameInputSignUp.value] = new Account(usernameInputSignUp.value, 
                passwordInputSignUp.value, 
                breedSignUp.value, 
                dogNameSignUp.value, 
                ownersnameSignUp.value, 
                citySignUp.value, 
                countrySignUp.value,
                [],
                'https://images.unsplash.com/photo-1565057430174-c0477ddad363?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1725&q=80');

                siteIntro.style.display = 'none';
                home.style.display = 'block';
                footer.style.position= 'relative';

                eventBlock.style.display = 'none';
                peopleBlock.style.display = 'none';
                profileSettingBlock.style.display = 'block';
            
                events.classList.contains('activityActive') ? events.classList.remove('activityActive') : null;
                people.classList.contains('activityActive') ? people.classList.remove('activityActive') : null;
                profileSetting.classList.contains('activityActive') ? null : profileSetting.classList.add('activityActive');
                profileCompactImg.style.border = "2px solid #577399";


                console.log(User);
                currentAccount = usernameInputSignUp.value;
                
            
                console.log(Object.entries(User).filter(el => el[0] === currentAccount)[0][1].friendList);
            
                mainProfilePic.setAttribute('src', User[currentAccount].profileImage);
                profileMainName.innerHTML = User[currentAccount].name;
                mainOwnerName.innerHTML = User[currentAccount].ownerName;
                mainLocation.innerHTML = `${User[currentAccount].city} - ${User[currentAccount].country}`;
            
                footer.style.position = 'relative';
        }

}

goToEvents = (e) => {
    eventBlock.style.display = 'block';
    peopleBlock.style.display = 'none';
    profileSettingBlock.style.display = 'none';

    events.classList.contains('activityActive') ? null : events.classList.add('activityActive');
    people.classList.contains('activityActive') ? people.classList.remove('activityActive') : null;
    profileSetting.classList.contains('activityActive') ? profileSetting.classList.remove('activityActive') : null;
    profileCompactImg.style.border = "2px solid #577399";
}

goToPeople = (e) => {
    eventBlock.style.display = 'none';
    peopleBlock.style.display = 'flex';
    profileSettingBlock.style.display = 'none';

    events.classList.contains('activityActive') ? events.classList.remove('activityActive') : null;
    people.classList.contains('activityActive') ? null : people.classList.add('activityActive');
    profileSetting.classList.contains('activityActive') ? profileSetting.classList.remove('activityActive') : null;
    profileCompactImg.style.border = "2px solid #577399";


    let friendlistCurrent = Object.entries(User).filter(el => el[0] === currentAccount)[0][1].friendList;
    // console.log(friendlistCurrent);
    // console.log(peopleBlock.length);
    // console.log(User[currentAccount].friendList.length);



    peopleBlock.innerHTML = '';


    if (friendlistCurrent.length === 0)  {
        const text = document.createElement('p');
        text.innerHTML = 'No friends in the list';
        text.style.margin = '40px auto';
        text.style.fontFamily = "'Ubuntu', sans-serif;";
        peopleBlock.appendChild(text);
    }


    friendlistCurrent.map(el => {
        const element = document.createElement('div');
        element.classList.add('person');
        peopleBlock.appendChild(element);
    
        const elementPic = document.createElement('img')
        elementPic.classList.add('personPic');
        elementPic.setAttribute('src', User[el].profileImage);
        element.appendChild(elementPic);
    
        const elementname = document.createElement('p');
        elementname.classList.add('personName');
        elementname.innerHTML = User[el].name;
        element.appendChild(elementname);

        const elementOwnerName = document.createElement('p');
        elementOwnerName.classList.add('personownersName');
        elementOwnerName.innerHTML = `(${User[el].ownerName})`;
        element.appendChild(elementOwnerName);

        const elementLocation = document.createElement('p');
        elementLocation.classList.add('personLocation');
        elementLocation.innerHTML = `${User[el].city} - ${User[el].country}`;
        element.appendChild(elementLocation);

        const elementConnectBtn = document.createElement('button');
        elementConnectBtn.classList.add('personBtn');
        elementConnectBtn.innerHTML = "Activities";
        element.appendChild(elementConnectBtn);

    })


}



goToProfileSetting = (e) => {
    eventBlock.style.display = 'none';
    peopleBlock.style.display = 'none';
    profileSettingBlock.style.display = 'block';

    events.classList.contains('activityActive') ? events.classList.remove('activityActive') : null;
    people.classList.contains('activityActive') ? people.classList.remove('activityActive') : null;
    profileSetting.classList.contains('activityActive') ? null : profileSetting.classList.add('activityActive');
    profileCompactImg.style.border = "2px solid #577399";

}
    

goToProfile = (e) => {
    eventBlock.style.display = 'none';
    peopleBlock.style.display = 'none';
    profileSettingBlock.style.display = 'none';

    events.classList.contains('activityActive') ? events.classList.remove('activityActive') : null;
    people.classList.contains('activityActive') ? people.classList.remove('activityActive') : null;
    profileSetting.classList.contains('activityActive') ? profileSetting.classList.remove('activityActive') : null;
    profileCompactImg.style.border = "2px solid #FE5F55";
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
  
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  
      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
  
  /**
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

    console.log(file);

    // User[currentAccount].profileImage = `${file.name}`;
    // mainProfilePic.setAttribute('src', User[currentAccount].profileImage);

    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;

    if (file.type.startsWith("image/")) {

      User[currentAccount].profileImage = file.name;
      
    
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
      
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
    // mainProfilePic.setAttribute('src', `URL("${User[currentAccount].profileImage}")`);
  }

  

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////