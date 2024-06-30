const cursor = document.querySelector(".cursor");
var timeout;
//follow cursor on mouse
document.addEventListener("mousemove",(e)=>{
    let x=e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

//cursor effect onj mouse stopped 
function mouseStopped(){
    cursor.style.display ="none";
}
clearTimeout(timeout);
timeout = setTimeout(mouseStopped,1000);

});

//cursor effect on mouse
document.addEventListener("mouseout", ()=>{
    cursor.style.display = "none";
});


// scroll trigger 
var tl1= gsap.timeline({scrollTrigger:{
    trigger:".right-box",
    start:"15% 100%",
    end:"10% 10%",
    scrub:true,
    // markers:true,
}})
tl1.to("#rocket",{
    // rotate:"35deg",
    left:"50%",
    top:"450%",
})


// var tl2 = gsap.timeline({scrollTrigger:{
//     trigger:".right-box",
//     start:"15% 10%",
//     end:"10% 10%",
//     scrub:true,
//     markers:true,
// }})
// tl1.from("#rocket",{
//     // rotate:"35deg",
//     left:"50%",
//     top:"450%",
// })


// var tl = gsap.timeline({scrollTrigger:{
//     trigger:".right-box",
//     start:"0% 100%",
//     end:"10% 50%",
//     scrub:true,
//     // markers:true,
// }})
// tl.to("#rocket",{
//     // rotate:"45deg",
//     left:"50%",
//     top:"200%",
// })



// var tl = gsap.timeline({scrollTrigger:{
//     trigger:".right-box",
//     start:"15% 110%",
//     end:"10% 0%",
//     scrub:true,
//     // markers:true,
// }})
// tl.to("#rocket",{
//     rotate:"50deg",
//     left:"50%",
//     top:"200%",
// })




// var tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".right-box",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true,
//         markers: true // Set to true for debugging, remove or set to false in production
//     }
// });

// tl.to("#rocket", { duration: 2, x: "40%", y: "20%" })
//   .to("#rocket", { duration: 2, x: "60%", y: "40%" })
//   .to("#rocket", { duration: 2, x: "40%", y: "60%" });





// chatbot

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const API_KEY = "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"; //API key
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>`: `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

    //For generation of Response
const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

// // adding sounds to the navbar options 

//   document.querySelectorAll('.flip-card').forEach(card => {
//     card.addEventListener('mouseenter', () => {
//       const sound = document.getElementById('hover-sound');
//       sound.currentTime = 0; // Rewind to start
//       sound.play();
//     });
//   });

//   document.querySelectorAll('.uh-box').forEach(card => {
//     card.addEventListener('mouseenter', () => {
//       const sound = document.getElementById('hover-sound-nav');
//       sound.currentTime = 0; // Rewind to start
//       sound.play();
//     });
//   });

//   document.querySelectorAll('.sh-box').forEach(card => {
//     card.addEventListener('mouseenter', () => {
//       const sound = document.getElementById('hover-sound-nav');
//       sound.currentTime = 0; // Rewind to start
//       sound.play();
//     });
//   });

//     document.querySelectorAll('.logo').forEach(card => {
//     card.addEventListener('mouseenter', () => {
//       const sound = document.getElementById('hover-sound-nav');
//       sound.currentTime = 0; // Rewind to start
//       sound.play();
//     });
//   });



  