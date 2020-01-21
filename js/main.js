
const header = document.querySelector(`header`);
const header_height = header.offsetHeight;

const navigation = document.querySelector(`nav`);
const navigation_items = navigation.children;

const alert_container = document.querySelector(".alert");

const traffic_nav = document.querySelector(`.traffic_nav`);
const traffic_nav_items = traffic_nav.children;

const notification_icon = document.querySelector(`.notification_icon`);
const notification_container = document.querySelector(`.notification_container`);
const bell_highlight = document.querySelector(`.notification_icon > img`);

const user_names = [ `Jess D'Souza`,
                      `Riri Yamzon`,
                      `Victoria Chambers`,
                      `Dale Byrd`,
                      `Dawn Wood`,
                      `Dan Oliver`,]
const message_user = document.querySelector(`.message_form`);
const search = document.querySelector(`.search_user`);
const message_text = document.querySelector(`.message_text`);
const autocomplete = document.querySelector(`.autocomplete`);

const email_setting = document.querySelector(`#settings_email`);
const privacy_setting = document.querySelector(`#settings_privacy`);
const timezone_setting = document.querySelector(`.select_menu`);
const setting_buttons = document.querySelector(`.setting_buttons`);

const traffic_labels = [ `16 - 22`,
                         `23 - 29`,
                         `30 - 5`,
                         `6 - 12`,
                         `13 - 19`,
                         `20 - 26`,
                         `27 - 3`,
                         `4 - 10`,
                         `11 - 17`,
                         `18 - 24`,
                         `25 - 31` ];

const traffic_data = [  750,
                        1250,
                        1000,
                        1500,
                        2000,
                        1500,
                        1750,
                        1250,
                        1750,
                        2250,
                        1750,
                        2250,];

const hourly_traffic_labels = [ `00:00`,
                                `01:00`,
                                `02:00`,
                                `03:00`,
                                `04:00`,
                                `05:00`,
                                `06:00`,
                                `07:00`,
                                `08:00`,
                                `09:00`,
                                `10:00`,
                                `11:00`,
                                `12:00`,
                                `13:00`,
                                `14:00`,
                                `15:00`,
                                `16:00`,
                                `17:00`,
                                `18:00`,
                                `19:00`,
                                `20:00`,
                                `21:00`,
                                `22:00`,
                                `23:00`];

const hourly_traffic_data = [ 10,
                              20,
                              15,
                              5,
                              30,
                              35,
                              20,
                              5,
                              15,
                              15,
                              25,
                              40,
                              45,
                              50,
                              30,
                              20,
                              15,
                              20,
                              15,
                              5,
                              10,
                              25,
                              35,
                              20,];

const monthly_traffic_labels = [ `Jan`,
                                 `Feb`,
                                 `Mar`,
                                 `Apr`,
                                 `May`,
                                 `Jun`,
                                 `Jul`,
                                 `Aug`,
                                 `Sep`,
                                 `Oct`,
                                 `Nov`,
                                 `Dec`];

const monthly_traffic_data = [ 2000,
                               1000,
                               700,
                               3000,
                               4000,
                               2500,
                               3000,
                               3500,
                               1000,
                               700,
                               2000,
                               2500];

const daily_traffic_labels = [ `Sun`,
                                `Mon`,
                                `Tue`,
                                `Wed`,
                                `Thu`,
                                `Fri`,
                                `Sat`]

const daily_traffic_data = [  75,
                              100,
                              175,
                              125,
                              225,
                              200,
                              100]

const mobile_users_labels = [ `Phones`,
                              `Tablets`,
                              `Desktop`,]

const mobile_users_data = [ 500,
                            500,
                            2500,]

// Below function adds alert notifications to the web page 

const alert_message = (message) => {

let alert = document.createElement(`div`);
alert.setAttribute(`class`, `alert_message`);

let alert_content = document.createElement(`p`);
alert_content.innerHTML = `<strong>Alert: </strong>${message}`;
alert.appendChild(alert_content);

let alert_exit = document.createElement(`button`);
alert_exit.innerHTML =  `<i class="fas fa-times"></i>`;
alert.appendChild(alert_exit);

alert_container.appendChild(alert);

let notification = document.createElement(`div`);
notification.setAttribute(`class`, `notification_item`);

let notification_content = document.createElement(`p`);
notification_content.innerHTML = `${message}`;
notification.appendChild(notification_content);

let notification_exit = document.createElement(`button`);
notification_exit.innerHTML = `<i class="fas fa-times"></i>`;
notification.appendChild(notification_exit);

notification_container.appendChild(notification);

}

alert_message(`This is test alert 1 This is test alert 1 This is test alert 1 This is test alert 1 This is test alert 1` );
alert_message(`This is test alert 2 This is test alert 2 This is test alert 2 This is test alert 2 This is test alert 2`);

// Below function  makes the green circle icon interactive

const bell_check = ()=> {
  let notification_children = notification_container.children.length;
  if ( notification_children === 0) {
    bell_highlight.style.display = `none`;
  } else {
    bell_highlight.style.display = `initial`;
  }
}

bell_check();


// Below function generates an autocomplete list of users based on defined usernames

const autocomplete_list = ()=> {
  for ( i = 0 ; i < user_names.length ; i++ ) {
    let search_item = document.createElement(`div`);
    search_item.setAttribute(`class`, `search_item`);
    search_item.textContent = user_names[i];
    autocomplete.appendChild(search_item);
  }
}

autocomplete_list();

// Below function filters the autocomplete list based on the search input value

const filter = ()=> {
  let search_input = search.value.toLowerCase();
  let search_items = autocomplete.children;
  for ( i = 0 ; i < user_names.length ; i++ ) {
    let current_item = search_items[i].textContent;
    if (current_item.toLowerCase().indexOf(search_input) === -1 ) {
      search_items[i].style.display = `none`;
    } else {
      search_items[i].style.display = ``;
    }
  }
}

// Below function checks if the selected username is available in the defined array

const username_check = ()=> {
  let user_available = false;
  for ( i = 0 ; i < user_names.length ; i++ ) {
    if (search.value.toLowerCase() === user_names[i].toLowerCase()) {
      user_available = true;
    } 
  }
  return user_available;
}

// Below function stores selected settings in local storage

let email_current_setting;
let privacy_current_setting;
let timezone_current_setting;

const save_settings = ()=> {
  email_current_setting = email_setting.checked;
  if (email_current_setting) {
    window.localStorage.setItem(`email`, `on`);
  } else {
      window.localStorage.setItem(`email`, `off`);
  }

  privacy_current_setting = privacy_setting.checked;
  if (privacy_current_setting) {
    window.localStorage.setItem(`privacy`, `on`);
  } else {
      window.localStorage.setItem(`privacy`, `off`);
  }

  timezone_current_setting = timezone_setting.selectedIndex;
  if (timezone_current_setting < 1 ) {
    window.localStorage.setItem(`timezone`, `none`);
  } else {
      window.localStorage.setItem(`timezone`, timezone_current_setting.toString() )
  }
}

if (localStorage.email === `on`) {
  email_setting.checked = true;
} else {
    email_setting.checked = false;
}

if (localStorage.privacy === `on`) {
  privacy_setting.checked = true;
} else {
    privacy_setting.checked  = false;
}

if (localStorage.timezone !== `none`) {
  timezone_setting.selectedIndex = parseInt(localStorage.timezone);
} else {
    timezone_setting.selectedIndex = 0;
}


// Below event removes alert notifications from the webpage

alert_container.addEventListener("click", (event)=> {
  e = event.target;
  if ( e.tagName.toLowerCase() === `button`) {
    let message = e.parentNode;
    message.style.display = "none";
  } else if (e.tagName.toLowerCase() === `i` ) {
    let message = e.parentNode.parentNode;
    message.style.display = "none";
  }
  
})

// Below event removes notifications from the bell notification container

notification_container.addEventListener("click", (event)=> {
  e = event.target;
  let message;
  if ( e.tagName.toLowerCase() === `button`) {
    message = e.parentNode;
    message.remove();
  } else if (e.tagName.toLowerCase() === `i` ) {
    message = e.parentNode.parentNode;
    message.remove();
  }
  bell_check();
})

/// Below code creates the traffic chart using the chart.js plugin

let traffic_chart = document.querySelector(`#traffic`);

let traffic_chart_view = new Chart(traffic_chart, {
    type: `line`,
    data: {
      labels: [],
      datasets: [{
        data: [],
        lineTension: 0,
        borderColor: `rgb(77, 75, 114)`,
        backgroundColor: `rgba(116, 119, 191, .4)`,
        pointBackgroundColor: `white`,
        pointRadius: 4,
        pointBorderWidth: 2,
        pointHoverRadius: 6,
        pointHoverBorderColor: `black`,
        pointHoverBorderWidth: 2,


      }]
    },
    options: {
        legend: {
            display: false,
        },
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            
            }],           
        }
    }
});

/// Below code creates the daily traffic chart using the chart.js plugin

let daily_chart = document.querySelector(`#daily_traffic`);

let daily_chart_view = new Chart(daily_chart, {
    type: `bar`,
    data: {
      labels: daily_traffic_labels,
      datasets: [{
        data: daily_traffic_data,
        borderColor: `rgb(77, 75, 114)`,
        backgroundColor: [`rgba(214, 247, 81, .7)`,
                          `rgba(247, 197, 81, .7)`,
                          `rgba(249, 192, 34, .7)`,
                          `rgba(0, 205, 209, .7)`,
                          `rgba(91, 155, 234, .7)`,
                          `rgba(229, 114, 75, .7)`,
                          `rgba(229, 75, 114, .7)`
        ]
      }]
    },
    options: {
        legend: {
            display: false,
        },
        responsiveAnimationDuration: 0,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    
                    stepSize: 50,
                }
            
            }],           
        }
    }
});

// Below code creates the mobile users chart using the chart.js plugin

let mobile_chart = document.querySelector(`#mobile_users`);

let mobile_chart_view = new Chart(mobile_chart, {
    type: `doughnut`,
    data: {
      labels: mobile_users_labels,
      datasets: [{
        data: mobile_users_data,
        borderColor: `rgb(77, 75, 114)`,
        backgroundColor: [ `rgba(132, 220, 198, 0.7)`,
                            `rgba(165, 255, 214, 0.7)`,
                            `rgba(255, 166, 158, 0.7)`
        ]
      }]
    },
    options: {
        legend: {
            position: `right`,
        },
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    display: false,
                }           
            }],           
        }
    }
});

// Below function updates the labels and data on the traffic chart

let nav_selection = `weekly`;

const chart_update = (timeline)=> {
  if (nav_selection === `daily`) {
    traffic_chart_view.data.datasets[0].data = daily_traffic_data;
    traffic_chart_view.data.labels = daily_traffic_labels;
  } else if (nav_selection === `weekly`) {
      traffic_chart_view.data.datasets[0].data = traffic_data;
      traffic_chart_view.data.labels = traffic_labels;
  } else if (nav_selection === `monthly`) {
      traffic_chart_view.data.datasets[0].data = monthly_traffic_data;
      traffic_chart_view.data.labels = monthly_traffic_labels;
  } else if (nav_selection === `hourly`) {
      traffic_chart_view.data.datasets[0].data = hourly_traffic_data;
      traffic_chart_view.data.labels = hourly_traffic_labels;
  }
  traffic_chart_view.update();
}

chart_update(nav_selection);

//  Below function highlights the selcted traffic chart

const traffic_highlight = ()=> {
    for (i = 0 ; i < traffic_nav_items.length ; i++) {
      let item;
      item = traffic_nav_items[i];
      if (item.textContent.toLowerCase() === nav_selection) {
        item.setAttribute(`class`, `selection`);
      } else {
          item.removeAttribute(`class`);
      }
    }
}

traffic_highlight();

// Below event updates chart data and labels based on user selection

traffic_nav.addEventListener("click", (event)=> {
    let e = event.target;
    if ( e.tagName.toLowerCase() === `li`){
      nav_selection = e.textContent.toLowerCase();
      chart_update(nav_selection);
      traffic_highlight();
    }
});

// Below event displays / hides the notification pane

notification_icon.addEventListener(`click`, (event)=> {
  let display = notification_container.style.display
  if (display === `none` || display === ``) {
    notification_container.style.display = `initial`;
  } else {
    notification_container.style.display = `none`;
  };
});
                    
// Below event saves / restores local storage settings

setting_buttons.addEventListener("click", (event)=> {
  let e = event.target;
  if (e.tagName.toLowerCase() === `button`) {
    if (e.textContent.toLowerCase() === `save`) {
      save_settings();
    } else {
        localStorage.clear();
    }
  }
});

// Below event displays / hides the autocomplete list when the user clicks on the search input

document.addEventListener(`click`, ()=>{
  if ( document.activeElement === search ) {
    autocomplete.style.display = `block`;
  } else {
      autocomplete.style.display = `none`;
  }
})

// Below event filters the autocomplete list when a keystroke is released

search.addEventListener(`keyup`, ()=>{
  filter();
})

// Below event allows the user to select a user name from the autocomplete list

document.addEventListener(`click`, (event)=>{
  let e = event.target;
  if (e.getAttribute(`class`) === `search_item`) {
    search.value = e.textContent;
  }
})

// Below event fires when the message is sent - checks for username / message 

message_user.addEventListener("click", (event)=> {
  let e = event.target;
  if ( e.tagName.toLowerCase() === `button`) {
    let user_available = username_check();
    if (user_available === false) {
      alert(`The user you have selected does not exist`);
    } else if ( message_text.value.trim() == ``) {
        alert(`Please type in a message`);
    } else {
        alert(`Message Sent`);
        alert_message(`Message to User: ${search.value} has been sent successfully.`);
        search.value = ``;
        message_text.value = ``;
        bell_check();
    }
  }
})

//  Below function and event adds a sticky nav on media `m` and above

const sticky_nav = ()=> {
  if (window.pageYOffset > header_height) {
    navigation.setAttribute(`class`, `sticky`);
  } else {
    navigation.removeAttribute(`class`);
  }
}

window.onscroll = ()=> {
  sticky_nav();
}

// Below function highlights the current page in the navigation bar

if (document.location.pathname === "/index.html") {
  navigation_items[0].className += ` current_page`;
}