let agenda = localStorage.getItem('agenda');
import agendaBackup from './agenda.json' assert {type: 'json'};

if(agenda)
{
    agenda = JSON.parse(agenda);
}else
{
    agenda = JSON.stringify(agendaBackup);
    agenda = JSON.parse(agenda);
}

console.log(agenda);

let uid=1;
let idx = agenda.profiles.findIndex (elem => elem.id == uid);
let currentChore = agenda.profiles.length;


function addChore()
{

    var choreName = document.getElementById("inputName").value;
    var choreHour = document.getElementById("inputHour").value;
    var chorelocal = document.getElementById("inputLocal").value;
    var choreInfo = document.getElementById("inputInfo").value;

    let newChore = new Chore(choreName, choreHour, chorelocal, choreInfo, currentChore);

    agenda.chores.push(newChore);
    localStorage.setItem('agenda', JSON.stringify(agenda));

}

function Chore(name, hour, local, info, id)
{
    this.userID = uid;
    this.id = id;
    this.name = name;
    this.hour = hour;
    this.local = local; 
    this.todo = 
    [
        this.id = 1,
        this.info = info,
        this.isDone = false
    ]
    
}

document.getElementById('button').addEventListener('click', addChore)