
const todoList=[{todoname:'none',tododate:'none'}];
  
  

  function displaylist(){
    let todolistHtml='';


    todoList.forEach(function(todoObject,index){

      if(index===0){
        return;
      }

      const todoname=todoObject.todoname;
    const tododate=todoObject.tododate;
    /*SHORT CUT

     const{todoname}=todoObject;    /*since variable name and object name are equal
     const {tododate}=todoObject;    /* Destructuring
     */
   
    const html=`
    <div>${todoname} </div>
    <div>${tododate}</div>
    <button class="delete-button" onclick="
    todoList.splice(${index},1) 
    displaylist();
    ">Delete</button>
    `;
    todolistHtml+=html;

   }); /* here in the button, it will delete index i and number of item 1, and when the display function calls it will redisplay the udated one */


    
    
    
  
    
   const inputElement=document.querySelector('.js-todo-list');
   inputElement.innerHTML=todolistHtml;
   console.log(todolistHtml);


  }



  function Addtodo() {
    const inputElement=document.querySelector('.js-todo-name');
    const todoname=inputElement.value;

    const inputDate =document.querySelector('.js-todo-date');
    const tododate=inputDate.value;
    
    console.log(todoList);
    inputElement.value='';
    inputDate.value='';
    if(todoname!=='' &&  tododate!=='')
   {
    todoList.push({todoname,tododate});
    
    displaylist();
  
  }
    
  }
  
  function keydown(event){
    if(event.key==='Enter')
    Addtodo();
  }