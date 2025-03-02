const zenQuotes = [
    "Nothing is hidden.",
    "This moment is complete. Nothing needs to be added.",
    "Mountains are mountains, rivers are rivers. Then they are not. Then they are.",
    "Everything changes. Nothing was ever the same.",
    "No snowflake ever lands in the wrong place.",
    "A finger pointing at the moon is not the moon.",
    "When the wind blows, the tree bows.",
    "You cannot step into the same river twice.",
    "Form is emptiness; emptiness is form.",
    "Chop wood, carry water.",
    "Who were you before your parents were born?",
    "The one who asks is the one who answers.",
    "Show me your original face before you were born.",
    "If you meet the Buddha on the road, kill him.",
    "Do not mistake the raft for the shore.",
    "When the ego weeps for what it has lost, the spirit laughs at what it has found.",
    "The house of the self is empty, but the lights are always on.",
    "The greatest way to control a sheep is to let it think it is free.",
    "A painted rice cake does not satisfy hunger.",
    "No self, no problem.",
    "Just sit. Nothing more, nothing less.",
    "The obstacle *is* the path.",
    "A thousand miles begins with a single step.",
    "Meditation is not about achieving peace; it is about seeing the chaos clearly.",
    "A monkey mind only disturbs you if you try to fight it.",
    "Before enlightenment: laundry. After enlightenment: laundry.",
    "Better to sit for one breath in full presence than an hour lost in thought.",
    "The most difficult thing is to keep the mind where the body is.",
    "The tighter you grasp, the more you lose.",
    "When hungry, eat. When tired, sleep.",
    "The more you chase, the faster it runs.",
    "You will never drink enough salt water to quench your thirst.",
    "Freedom is not getting what you want; it is seeing that you never needed it.",
    "Wanting things to be different than they are is the root of suffering.",
    "Let go, or be dragged.",
    "When you realize there is nothing missing, the whole world belongs to you.",
    "Do not seek the truth, only stop cherishing opinions.",
    "The coin lost in the river is seen in the moonlight.",
    "You can hold the world in your hands, but you cannot catch the wind.",
    "When the shoe fits, you forget your feet.",
    "Sitting silently, doing nothing, spring comes, and the grass grows by itself.",
    "The instant you speak of a thing, you miss the mark.",
    "First there is a mountain, then there is no mountain, then there is.",
    "Enlightenment is an accident. Practice makes you accident-prone.",
    "No matter how many times you polish a brick, it will never become a mirror.",
    "The barn has burned down—now I can see the moon.",
    "What is the sound of one hand clapping?",
    "Great doubt, great enlightenment. Small doubt, small enlightenment. No doubt, no enlightenment.",
    "I have nothing to say, and I am saying it.",
    "You are free to do as you wish, but you are not free to wish as you wish."
];

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const reminderTime = document.getElementById('reminderText').value;
    
    if (!taskInput.trim()) {
        alert("Please enter a task");
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task">${taskInput}</span>
        <span class="reminder">${reminderTime ? 'Reminder: ' + reminderTime : 'No reminder'}</span>
        <input type="checkbox">
    `;
    
    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', saveTasks);
    
    document.getElementById('taskList').appendChild(li);
    document.getElementById('taskInput').value = '';
    document.getElementById('reminderText').value = '';
    
    saveTasks();
}

function clearDoneTasks() {
    const tasks = document.querySelectorAll('#taskList li');
    let tasksRemoved = false;
    
    tasks.forEach(task => {
        if (task.querySelector('input').checked) {
            task.remove();
            tasksRemoved = true;
        }
    });
    
    if (tasksRemoved) {
        saveTasks();
        const randomQuote = zenQuotes[Math.floor(Math.random() * zenQuotes.length)];
        alert(randomQuote);
    } else {
        alert("No completed tasks to clear");
    }
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        const task = li.querySelector('.task').textContent;
        const reminder = li.querySelector('.reminder').textContent;
        const done = li.querySelector('input').checked;
        tasks.push({ task: task, reminder: reminder, done: done });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const taskList = document.getElementById('taskList');
    
    taskList.innerHTML = '';
    
    tasks.forEach(taskObj => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task">${taskObj.task}</span>
            <span class="reminder">${taskObj.reminder}</span>
            <input type="checkbox"${taskObj.done ? ' checked' : ''}>
        `;
        
        const checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', saveTasks);
        
        taskList.appendChild(li);
    });
}

function parseReminderTime(reminderText) {
    if (!reminderText || reminderText === 'No reminder') return null;
    
    if (reminderText.includes(' ')) {
        const [time, period] = reminderText.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        
        if (isNaN(hours) || isNaN(minutes)) return null;
        if (hours < 0 || hours > 12 || minutes < 0 || minutes > 59) return null;
        
        if (period === 'PM' && hours < 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        
        return { hours, minutes };
    } 
    else {
        let [hours, minutes] = reminderText.split(':').map(Number);
        
        if (isNaN(hours) || isNaN(minutes)) return null;
        if (hours < 0 || hours >= 24 || minutes < 0 || minutes > 59) return null;
        
        return { hours, minutes };
    }
}

function checkReminders() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => {
        const reminderText = task.querySelector('.reminder').textContent.replace('Reminder: ', '');
        const reminder = parseReminderTime(reminderText);
        
        if (reminder && reminder.hours === currentHour && reminder.minutes === currentMinute) {
            const taskName = task.querySelector('.task').textContent;
            
            if (Notification.permission === 'granted') {
                new Notification(`Reminder: ${taskName}`);
            } else {
                alert(`Reminder: ${taskName}`);
            }
        }
    });
}

function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            console.log('Notification permission:', permission);
        });
    }
}

setInterval(checkReminders, 60000);

document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
    
    const addButton = document.querySelector('.add-btn');
    addButton.addEventListener('click', addTask);
    
    const zenButton = document.querySelector('.zen-btn');
    zenButton.addEventListener('click', clearDoneTasks);
    
    if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        console.log('Tip: Enable notifications for task reminders');
    }
});