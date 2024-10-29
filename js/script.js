const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
function renderTeam() {
const teamContainer = document.getElementById('team-members');
teamMembers.forEach(member => {
  const memberCard = `
    <div class="col-md-4 mb-4">
       <div class="card team-card d-flex flex-row">
        <img src="./${member.img}" class="card-img-left" alt="${member.name}">
         <div class="card-body bg-dark text-light d-flex flex-column justify-content-center">
           <h3 class="card-title h5">${member.name}</h3>
            <h4 class="card-text h6">${member.role}</h4>
            <a href="mailto:${member.email}" class="text-info">${member.email}</a>
            </div>
         </div>
      </div>
  `;
teamContainer.innerHTML += memberCard;
  });
}

renderTeam();
