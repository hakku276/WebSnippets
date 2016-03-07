1. link the style sheet
2. include script
3. put the code as follows in your html

<div id="popup1" class="overlay">
 <div class="popup">
  <h2 id="popup_title">Here i am</h2>
   <div class="content" id="popup_message">
    Thanks for pop me out of that button, but now i'm done so you can close this window.
   </div>
  <button type = "button" id = "popup_action" class = "btn btn-default submit-btn form_submit">       Understood
  </button>
 </div>
</div>

4. In any javascript code, use the following command,

showPopup(title,message,action)

 where "action" is the text displayed on the button below the message

5. style the button as you would like to