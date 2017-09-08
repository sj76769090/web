	send.onclick =function(){
    create();
    write.value ="";
	}
	function create(){
		var chatbox2 =document.createElement("div");
		chatbox2.className = "chat-box2";
		box.appendChild(chatbox2);	
		
		var chattext2 =document.createElement("div");
	    chattext2.innerHTML =input.value;
	    chattext2.className = "chat-text2";
	    chatbox2.appendChild(chattext2);
	    
		var chathp2 =document.createElement("div");
		chathp2.innerHTML="<img src='img/IMG_2819.JPG' />"//头像添加
		chathp2.className ="chat-hp2";
		chatbox2.appendChild(chathp2);
		
		var chatbox1 =document.createElement("div");
		chatbox1.className = "chat-box1";
		box.appendChild(chatbox1);
		
		var chathp1 =document.createElement("div");
		chathp1.innerHTML="<img src='img/IMG_2818.JPG' />"//头像添加
		chathp1.className ="chat-hp1";
		chatbox1.appendChild(chathp1);
		
		var chattext1 =document.createElement("div");
	    chattext1.innerHTML ="都听你的，没问题❤";
	    chattext1.className = "chat-text1";
	    chatbox1.appendChild(chattext1);
	    
	    input.value=""
	    
	}