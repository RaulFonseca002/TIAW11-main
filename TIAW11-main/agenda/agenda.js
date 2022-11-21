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


let checkoff = null;
console.log(checkoff);

function checkoffLoop(){
    console.log("test");
    for(let c = 0; c<checkoff.length; c++){
        checkoff[c].addEventListener("click", remove)
    }
}

function remove(event)
{
    console.log(event.target);
}



document.body.onload = () => {
    //perfil 
    let uid=1
    let idx = agenda.profiles.findIndex (elem => elem.id == uid)

    checkoff = document.getElementsByClassName("checkoffButton");

    const name = agenda.profiles[idx].name
    document.getElementById('name').textContent = name;

    const title = agenda.profiles[idx].title
    document.getElementById('title').textContent = title;

    const status = agenda.profiles[idx].status
    document.getElementById('status').textContent = status;

    //setup de variaveis para a grade horaria
    var hourLocate;
    var choreNameLocate;
    var localLocate;
    var todoLocate;
   
    var locate = 0;
    var max = 0;
    let buttonCheck = '';
    let buttonLocate;
    let buttonCount = 0;


    //grade horaria
    for(var c = 0; c<agenda.chores.length; c++)
    {   if(agenda.chores[c].isDone == false)
        {
            hourLocate = "hour" + locate;


            const hour = agenda.chores[c].hour
            document.getElementById(hourLocate).textContent = hour;
        
            choreNameLocate = "choreName" + locate;
            const choreName = agenda.chores[c].name
            document.getElementById(choreNameLocate).textContent = choreName;
        
            localLocate = "local" + locate;
            const place = agenda.chores[c].place
            document.getElementById(localLocate).textContent = place;
        
            var todoOutput = '';

            for(var i = 0; i<agenda.chores[c].todo.length; i++)
            {
                if(agenda.chores[c].todo[i].isDone == false && max <5)
                {
                    todoOutput += '<li>'+agenda.chores[c].todo[i].info+'</li>'
                    max++
                }

            }

            todoLocate = 'todos' + locate;
            document.getElementById(todoLocate).innerHTML = todoOutput;
            
            buttonLocate = "button" + locate;
            buttonCheck = '<button class=" btn btn-outline-info checkoffButton" id="Checkoff0">OK</button>'
            document.getElementById(buttonLocate).innerHTML = buttonCheck;

            locate++
        }

        max = 0;
    }

    //setup de variaveis para as tarefas
    var taskOutput = '';
    var locateTask = 0;
    var maxTask = 0;



    //tarefas
    for (var c = 0; c<agenda.tasks.length; c++)
    {
        if(agenda.tasks[c].isDone == false && maxTask<7)
        {
            taskOutput += '<ul class="taskBox"><input class="form-check-input mt-0 big-checkbox2" type="checkbox"></input>' +agenda.tasks[c].info+'</ul>'
            document.getElementById('tasks').innerHTML = taskOutput;



            locateTask++;
            maxTask++;
            buttonCount++;
        }

    }

    checkoffLoop();
    
}