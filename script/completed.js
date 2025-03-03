

const completedButtons = document.querySelectorAll('.completed-btn')
console.log(completedButtons);
const currentNavNumber = document.getElementById('nav-number')
const currentTaskElement = document.getElementById('task-counter')
const activityLogText =  document.getElementById('activity-log-text')






for(const completeBtn of completedButtons){
    completeBtn.addEventListener('click', function(event){
        alert("Board update Successfully");
        event.target.disabled = true;
        const remainingTask = parseInt(currentTaskElement.innerText) -1
        currentTaskElement.innerText = remainingTask;
        const remainingNumber = parseInt(currentNavNumber.innerText) +1
        currentNavNumber.innerText = remainingNumber;
        
        const p = document.createElement('p')
        p.innerText = `You have Completed the task - ${new Date().toLocaleString()}`
        p.style.backgroundColor = 'gray'
        p.style.marginBottom = " 10px"
        console.log(p)
        activityLogText.appendChild(p);



        if(remainingTask === 0){
            alert("congrates!!! You have committed all the current task");
        }
        

    })
}


// Clear history 
const clearHistoryBtn = document.getElementById('clear-history');

clearHistoryBtn.addEventListener('click', function(){
    activityLogText.innerHTML = "";
})



// Date
document.querySelector('.date').innerText = new Date().toLocaleString();

