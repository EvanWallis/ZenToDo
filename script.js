// ===========================
// Configuration Constants
// ===========================
const FEATURE_PROBABILITIES = {
    TASK_VANISH: 0.2,  // Base vanish chance for tasks due today or in the past
    ALREADY_DONE: 0.2  // Chance a task is immediately done upon creation
  };
  
  const VANISH_TIMES = [10000, 30000, 3600000, 86400000]; // 10s, 30s, 1hr, 1day
  const MAX_TASK_LENGTH = 200;
  
  
  // ===========================
  // Zen Quote Collections
  // ===========================
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
    "You are free to do as you wish, but you are not free to wish as you wish.",
    "The mind is like water—still when calm, turbulent when disturbed.",
    "Walk as if you are kissing the Earth with your feet.",
    "In the midst of movement and chaos, keep stillness inside of you.",
    "Everything that has a front has a back.",
    "This too shall pass.",
    "The waves may rise, but the ocean remains.",
    "When the clouds disappear, the moon is still there.",
    "Yesterday's enlightenment is today's delusion.",
    "A single candle can light a thousand others.",
    "Do not seek to follow in the footsteps of the wise—seek what they sought.",
    "The river does not struggle to reach the sea.",
    "One moment can be ten thousand years.",
    "No coming, no going.",
    "Sitting quietly, doing nothing, spring comes, and the grass grows by itself.",
    "The bird does not cling to the sky.",
    "Do what you are doing while you are doing it.",
    "Water does nothing, yet carves mountains.",
    "No mind, no problem.",
    "Walk as if your feet are kissing the ground.",
    "First, learn the rules. Then, forget them.",
    "A path is made by walking it.",
    "The slower you go, the faster you get there.",
    "No fish needs a bicycle, no enlightened one needs enlightenment.",
    "The mind makes a good servant but a poor master.",
    "The quieter you become, the more you hear.",
    "An open hand holds the world. A clenched fist holds nothing.",
    "Be neither the chaser nor the chased.",
    "A thought comes; let it come. A thought goes; let it go.",
    "A fool sees only form; the wise see emptiness in form.",
    "When the shoe is tight, you feel the foot. When the shoe fits, you forget the foot.",
    "You cannot stir the ocean with a teaspoon.",
    "A full cup takes nothing in.",
    "Why worry about the shadow when the body is already free?",
    "The tighter you hold, the more slips through.",
    "Desire is a contract you make with yourself to be unhappy until you get what you want.",
    "You suffer because you think things should be different than they are.",
    "No tree clings to its leaves in autumn.",
    "The hungry ghost eats but is never full.",
    "Let go, not because you must, but because you can.",
    "A golden chain still binds.",
    "You will never find peace in a tomorrow that never comes.",
    "A man chases the horizon, never reaching it. Then he stops, and it is already there.",
    "Nothing in the world is yours, yet nothing is separate from you.",
    "When you reach the top of the mountain, keep climbing.",
    "I am never not hungry, and yet I have never been hungry.",
    "The moment you grasp, it disappears. The moment you release, it is yours.",
    "Find your path, but do not walk in a straight line.",
    "The sound of a bell is neither inside nor outside the bell.",
    "The answer is in the question, but the question must disappear.",
    "A wise man points to the moon, but the fool examines the finger.",
    "Without a place to stand, how do you take a step?",
    "Not knowing is most intimate.",
    "You already have what you are looking for.",
    "The path is not the path, and that is why it is the path.",
    "Do not mistake the finger for the moon, nor the moon for the finger, nor the finger for itself.",
    "The moment you stop looking, you will see it.",
    "There is no enlightenment, and this is it.",
    "If you think you understand, you don't. If you don't think you understand, you might.",
    "The way out is through. The way through is to realize there was never an 'in.'",
    "There is no solution, because there is no problem.",
    "I have never said a single word, and yet you have heard me.",
    "If you do not speak, I will understand.",
    "Before you can be free, you must see that you were never bound.",
    "An enlightened man falls into a well. What does he do? He falls.",
    "A thief broke into a Zen master's hut. The master said, 'Take whatever you want, but leave the moon.'",
    "Nothing is serious. Not even this.",
    "The man said, 'I am lost!' The master said, 'Show me your lostness.'",
    "He searched for enlightenment for 20 years. Then he sneezed, and that was that.",
    "The river flows. The mountain sits. The fool tries to trade places with them both.",
    "He asked, 'What happens after we die?' The master said, 'I don't know.' 'But you're a Zen master!' 'Yes, but not a dead one.'",
    "The sound of one hand clapping is the same as the sound of two hands not clapping.",
    "A fool and a wise man both laugh at the same thing. Only the fool thinks it is funny.",
    "A monk asked, 'How do I enter Zen?' The master closed the door.",
    "When you have a question, I will answer. When you have no question, I will answer better.",
    "If you cannot find the truth right where you are, where else do you expect to find it?",
    "What is the best way to cross a river? You are already on the other side.",
    "If you see a turtle on a fence post, either help it down or ask it for wisdom.",
    "The master said, 'Come closer.' The student stepped forward. 'Closer.' The student stepped again. The master poked him in the forehead.",
    "A Zen master lived at the top of a mountain. When people asked, 'How do I get there?' he said, 'You are already here.'",
    "'Master, I want to be free.' 'Who is holding you?'",
    "If you wish to trap a bird, open the cage door.",
    "A student chased the master, demanding enlightenment. The master stopped, turned around, and ran away. The student understood.",
    "'Master, I am afraid of emptiness!' 'Then close your eyes.'",
    "The sky is vast, and yet it does not hold a single thought.",
    "The entire universe fits in a teacup, but you must pour out your opinions first.",
    "You cannot grasp the wind, but it touches you all the same.",
    "The mountain does not laugh at the valley for being low.",
    "The fish knows nothing of water, the human knows nothing of mind.",
    "A single raindrop contains the whole sky.",
    "If you take a step back, you will realize there was never a wall in front of you.",
    "'What is the sound of ultimate truth?' The master picked up a bowl and threw it out the window.",
    "A mirror reflects everything, but holds onto nothing.",
    "To reach the farthest place, sit exactly where you are.",
    "If you want to know the truth, count the hairs on a cat's tail.",
    "He asked, 'How can I awaken?' The master said, 'Sell your shoes.'",
    "Knock on a door that was never built.",
    "The spoon does not know the taste of soup. The soup does not know the taste of itself.",
    "A rock and a cloud have never had an argument.",
    "When you are hungry, eat. When you are tired, sleep. When you are confused, laugh.",
    "Two monks argued about a flag waving. One said the wind moves it, the other said the flag moves. The master said, 'Your mind moves.'",
    "A student said, 'I have been searching for the truth my whole life.' The master poured him more tea.",
    "The more you say, the less I hear.",
    "Silence is the most eloquent response.",
    "The present moment is all that is."
  ];
  
  const alreadyDoneQuotes = [
    "Before you even wrote it down, it was finished.",
    "What needed doing was already done.",
    "The task was never separate from you.",
    "Action and inaction are one and the same."
  ];
  
  /********************************************************
 * Utility Functions
 ********************************************************/
// Format a Date object as MM/DD/YYYY
function formatDateObj(dateObj) {
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year}`;
  }
  
  // Return today's date as YYYY-MM-DD (for <input type="date">)
  function getTodayDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  
  /********************************************************
   * Zen Task Manager (with Firestore + Auth)
   ********************************************************/
  class ZenTaskManager {
    constructor() {
      this.initAuth();
      this.initEventListeners();
    }
  
    /********************************************************
     * AUTHENTICATION
     ********************************************************/
    initAuth() {
      // Sign in with Google popup
      document.getElementById("signInBtn").addEventListener("click", () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
          .catch(err => {
            console.error("Sign-in failed:", err);
            alert("Sign-in failed!");
          });
      });
  
      // Sign out
      document.getElementById("signOutBtn").addEventListener("click", () => {
        firebase.auth().signOut()
          .catch(err => {
            console.error("Sign-out failed:", err);
            alert("Sign-out failed!");
          });
      });
  
      // Listen for auth changes
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log("User signed in:", user.uid);
          document.getElementById("signInBtn").style.display = "none";
          document.getElementById("signOutBtn").style.display = "inline-block";
          this.loadTasksForUser(user.uid);
        } else {
          console.log("No user signed in.");
          document.getElementById("signInBtn").style.display = "inline-block";
          document.getElementById("signOutBtn").style.display = "none";
          // Clear tasks from UI
          document.getElementById("taskList").innerHTML = "";
        }
      });
    }
  
    /********************************************************
     * VALIDATION
     ********************************************************/
    validateTask(taskText, dueDateInput) {
      if (!taskText.trim()) {
        throw new Error("Please enter a task");
      }
      if (!dueDateInput) {
        throw new Error("Please enter a due date");
      }
      if (taskText.length > MAX_TASK_LENGTH) {
        throw new Error(`Task must be under ${MAX_TASK_LENGTH} characters`);
      }
    }
  
    /********************************************************
     * FIRESTORE CRUD OPERATIONS
     ********************************************************/
    // Add a new task doc for the current user
    async addTaskToFirestore(userId, taskObj) {
      try {
        const docRef = await db.collection("tasks").add({
          ...taskObj,
          userId: userId
        });
        return docRef.id;
      } catch (error) {
        console.error("Error adding task to Firestore:", error);
        alert("Failed to add task to Firestore. Check console for details.");
        return null;
      }
    }
  
    // Fetch tasks for a specific user
    async fetchTasksFromFirestore(userId) {
      try {
        // Only load tasks for this user
        const snapshot = await db.collection("tasks")
          .where("userId", "==", userId)
          .get();
  
        const tasks = [];
        snapshot.forEach(doc => {
          tasks.push({ ...doc.data(), firestoreId: doc.id });
        });
        return tasks;
      } catch (error) {
        console.error("Error fetching tasks from Firestore:", error);
        alert("Failed to load tasks from Firestore. Check console for details.");
        return [];
      }
    }
  
    // Update a task's "done" status
    async updateTaskStatusInFirestore(firestoreId, done) {
      try {
        await db.collection("tasks").doc(firestoreId).update({ done: done });
      } catch (error) {
        console.error("Error updating task status in Firestore:", error);
      }
    }
  
    // Delete a task from Firestore
    async deleteTaskFromFirestore(firestoreId) {
      try {
        await db.collection("tasks").doc(firestoreId).delete();
      } catch (error) {
        console.error("Error deleting task from Firestore:", error);
      }
    }
  
    /********************************************************
     * ZEN LOGIC
     ********************************************************/
    // Add a new task (UI + Firestore)
    async addTask() {
      const user = firebase.auth().currentUser;
      if (!user) {
        alert("You must be signed in to add tasks!");
        return;
      }
  
      const taskInputField = document.getElementById("taskInput");
      const dueDateField = document.getElementById("dueDateInput");
  
      let taskText = taskInputField.value;
      const dueDateInput = dueDateField.value;
  
      try {
        // Validate user input
        this.validateTask(taskText, dueDateInput);
  
        // Fix for time zone offset
        let dueDateObj = new Date(dueDateInput + "T12:00:00");
        let today = new Date();
        today.setHours(0, 0, 0, 0);
  
        // 20% chance the task is immediately "done"
        let alreadyDone = Math.random() < FEATURE_PROBABILITIES.ALREADY_DONE;
        let createdAt = Date.now();
  
        // Prepare the task object
        const newTask = {
          task: taskText,
          done: alreadyDone,
          dueDate: dueDateInput,
          createdAt: createdAt
        };
  
        // Add to Firestore
        const firestoreId = await this.addTaskToFirestore(user.uid, newTask);
        if (!firestoreId) return; // If adding failed
  
        // Render the task in the UI
        this.renderTask({
          ...newTask,
          firestoreId: firestoreId
        });
  
        // "Already Done" quote if triggered
        if (alreadyDone) {
          const alreadyDoneQuote = alreadyDoneQuotes[Math.floor(Math.random() * alreadyDoneQuotes.length)];
          alert(alreadyDoneQuote);
        }
  
        // Vanishing Task Feature
        let vanishProbability = dueDateObj > today ? 0.5 : FEATURE_PROBABILITIES.TASK_VANISH;
        if (Math.random() < vanishProbability) {
          const vanishTime = VANISH_TIMES[Math.floor(Math.random() * VANISH_TIMES.length)];
          const ghost = Math.random() < 0.5;
  
          setTimeout(async () => {
            // Remove from DOM
            const li = document.querySelector(`li[data-firestore-id='${firestoreId}']`);
            if (li) li.remove();
  
            // Remove from Firestore
            await this.deleteTaskFromFirestore(firestoreId);
  
            // Ghost reappearance
            if (ghost) {
              setTimeout(async () => {
                // Re-add the same task doc
                const ghostTask = {
                  task: taskText,
                  done: alreadyDone,
                  dueDate: dueDateInput,
                  createdAt: createdAt
                };
                const ghostId = await this.addTaskToFirestore(user.uid, ghostTask);
                if (!ghostId) return;
                this.renderTask({ ...ghostTask, firestoreId: ghostId });
                alert("You thought it was gone, but was it ever truly finished?");
              }, vanishTime);
            }
          }, vanishTime);
        }
  
        // Clear input fields
        taskInputField.value = "";
        dueDateField.value = getTodayDateString();
  
      } catch (error) {
        alert(error.message);
      }
    }
  
    // Render a single task in the UI
    renderTask(taskObj) {
      const { task, done, dueDate, createdAt, firestoreId } = taskObj;
  
      // Create the <li> element
      const li = document.createElement("li");
      li.setAttribute("data-firestore-id", firestoreId || "");
      li.setAttribute("data-due-date", dueDate);
      li.setAttribute("data-created-at", createdAt);
  
      // Format the date for display
      let dueDateObj = new Date(dueDate + "T12:00:00");
      let isDone = done ? "checked" : "";
  
      li.innerHTML = `
        <input type="checkbox" ${isDone}>
        <div class="task-info">
          <span class="task">${task}</span>
          <span class="due-date">Due: ${formatDateObj(dueDateObj)}</span>
        </div>
      `;
  
      // Handle "done" updates
      const checkbox = li.querySelector("input[type='checkbox']");
      checkbox.addEventListener("change", async () => {
        await this.updateTaskStatusInFirestore(firestoreId, checkbox.checked);
      });
  
      // Append to the list
      document.getElementById("taskList").appendChild(li);
    }
  
    // Load tasks for the signed-in user
    async loadTasksForUser(userId) {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";
  
      // Get tasks from Firestore for this user
      const tasks = await this.fetchTasksFromFirestore(userId);
  
      // Sort by due date
      tasks.sort((a, b) => {
        return new Date(a.dueDate + "T12:00:00") - new Date(b.dueDate + "T12:00:00");
      });
  
      // Handle auto-complete for tasks older than 24 hours
      const now = Date.now();
      for (let taskObj of tasks) {
        const { createdAt, firestoreId, done } = taskObj;
        if (!done && now - Number(createdAt) > 86400000) {
          // 30% chance to auto-complete
          if (Math.random() < 0.3) {
            const alreadyDoneQuote = alreadyDoneQuotes[Math.floor(Math.random() * alreadyDoneQuotes.length)];
            alert(alreadyDoneQuote);
            // Mark as done in Firestore
            await this.updateTaskStatusInFirestore(firestoreId, true);
            taskObj.done = true;
          }
        }
      }
  
      // Now re-fetch tasks if any were updated
      const updatedTasks = await this.fetchTasksFromFirestore(userId);
  
      // Sort again
      updatedTasks.sort((a, b) => {
        return new Date(a.dueDate + "T12:00:00") - new Date(b.dueDate + "T12:00:00");
      });
  
      // Render them
      updatedTasks.forEach(task => {
        this.renderTask(task);
      });
    }
  
    // Clear done tasks from both UI and Firestore
    async clearDoneTasks() {
      const user = firebase.auth().currentUser;
      if (!user) {
        alert("You must be signed in to use Zen Mode!");
        return;
      }
  
      const tasks = document.querySelectorAll("#taskList li");
      let tasksRemoved = false;
  
      for (let li of tasks) {
        const checkbox = li.querySelector("input[type='checkbox']");
        if (checkbox && checkbox.checked) {
          const firestoreId = li.getAttribute("data-firestore-id");
          // Remove from DOM
          li.remove();
          tasksRemoved = true;
          // Remove from Firestore
          await this.deleteTaskFromFirestore(firestoreId);
        }
      }
  
      if (tasksRemoved) {
        const randomQuote = zenQuotes[Math.floor(Math.random() * zenQuotes.length)];
        alert(randomQuote);
      } else {
        alert("No completed tasks to clear");
      }
    }
  
    /********************************************************
     * Initialize event listeners
     ********************************************************/
    initEventListeners() {
      document.addEventListener("DOMContentLoaded", () => {
        // Auto-fill today's date
        const dateInput = document.getElementById("dueDateInput");
        dateInput.value = getTodayDateString();
  
        // The tasks will load automatically once the user is signed in
        // (via onAuthStateChanged in initAuth())
  
        // Add Task button
        const addButton = document.querySelector(".add-btn");
        addButton.addEventListener("click", () => this.addTask());
  
        // Zen Mode button (clear done tasks)
        const zenButton = document.querySelector(".zen-btn");
        zenButton.addEventListener("click", () => this.clearDoneTasks());
      });
    }
  }
  
  // Instantiate the Zen Task Manager
  new ZenTaskManager();