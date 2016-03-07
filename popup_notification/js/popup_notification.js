/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function showPopup(title, message, action){
    var popupTitle = document.getElementById("popup_title");
    var popupMessage = document.getElementById("popup_message");
    var popupAction = document.getElementById("popup_action");
    
    popupTitle.innerHTML = title;
    popupMessage.innerHTML = message;
    popupAction.innerHTML = action;
    
    //setup close action
    popupAction.onclick = hidePopup;
    
    //display the popup
    var popup = document.getElementById("popup1");
    popup.style.visibility = "visible";
    popup.style.opacity = 1;
    
}

function hidePopup(){
    var popup = document.getElementById("popup1");
    popup.style.visibility = "hidden";
    popup.style.opacity = 0;
}