function sendMessageOnEnter(event) {
    if (event.key === 'Enter') sendMessage();
  }
  
  function sendMessage() {
    const messageBox = document.getElementById("messageInput");
    const message = messageBox.value.trim();
  
    if (message) {
      addMessage("You", message);
      messageBox.value = ""; // Clear input
  
      // Check if the message is in Bengali
      if (/[^\u0000-\u007F]+/.test(message)) {
        setTimeout(() => autoReplyInBengali(message), 1000);
      } else {
        setTimeout(autoReply, 1000);
      }
    }
  }
  
  function autoReplyInBengali(message) {
    let replyMessage;
  
    if (message.includes("থাম্বেল")) {
      replyMessage = "হ্যাঁ, থাম্বেল তৈরি করতে আমাদের সাথে যোগাযোগ করতে পারেন ০১৭১৬১৬৩৮৪০।";
    } else if (message.includes("এডিট")) {
      replyMessage = "আপনার ভিডিও এডিট করতে সাহায্যের জন্য, আমাদের নম্বর ০১৭১৬১৬৩৮৪০ তে কল করুন।";
    } else if (message.includes("যোগাযোগ")) {
      replyMessage = "যোগাযোগের জন্য আমাদের ইমেইল irfandeveloperbd@gmail.com এ মেইল করুন।";
    } else {
      replyMessage = "ধন্যবাদ! আপনার মেসেজটি আমরা পেয়েছি।";
    }
  
    addMessage("Auto-Reply", replyMessage);
  }
  
  function autoReply() {
    const replies = [
      "Hello! How can I assist you? 😊",
      "Thank you for your message! 💬",
      "I’m here to help. What can I do for you?",
      "Could you please provide more details? 🤔",
    ];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    addMessage("Auto-Reply", randomReply);
  }
  
  function addMessage(sender, text) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender === "You" ? "user-message" : "auto-reply");
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
  }
  
  function sendRecommendedMessage(option) {
    let userMessage = "";
    let replyMessage = "";
  
    switch (option) {
      case 1:
        userMessage = "আপনি কি আপনার ভিডিওর থাম্বেল তৈরি করতে চাচ্ছেন? 😊";
        replyMessage = "হ্যাঁ আপনার ভিডিওর থাম্বেল তৈরি করতে আমাদের সাথে যোগাযোগ করুন: ০১৭১৬১৬৩৮৪০।";
        break;
      case 2:
        userMessage = "আপনি কি আপনার ভিডিও এডিট করতে চাচ্ছেন? 🎬";
        replyMessage = "ভিডিও এডিট করতে আমাদের নম্বরে কল করুন: ০১৭১৬১৬৩৮৪০।";
        break;
      case 3:
        userMessage = "আপনি কি সরাসরি আমাদের সাথে কথা বলতে চাচ্ছেন? 📞";
        replyMessage = "যোগাযোগের জন্য ০১৭১৬১৬৩৮৪০ নম্বরে কল করুন।";
        break;
      case 4:
        userMessage = "আপনি কি আপনার ইউটিউব চ্যানেলের অবস্থা জানতে চাচ্ছেন? 📈";
        replyMessage = "চ্যানেলের অবস্থা জানতে মেইল করুন: irfandeveloperbd@gmail.com";
        break;
    }
  
    addMessage("You", userMessage);
    setTimeout(() => addMessage("Auto-Reply", replyMessage), 1000);
  }
  

function goBack() {
  // Create loading animation
  const loadingDiv = document.createElement('div');
  loadingDiv.classList.add('loading');
  loadingDiv.innerHTML = '🔄 Loading...<br>Please wait! 😊';
  document.body.appendChild(loadingDiv);
  
  // Show the loading animation
  loadingDiv.style.display = 'block';

  // Redirect after a short delay to show loading
  setTimeout(() => {
    window.location.href = 'index.html'; // Change to your home page URL
  }, 2000); // Adjust the delay time as needed
}


function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
}

