// import { AbstractControl } from "@angular/forms";

// export class TicketValidator{
    
//     public static checkTitle(myControl:AbstractControl){
//         if(myControl.value){
//          var value = myControl.value as string;
//          var spacePosition = value.indexOf(' ');
//          if(spacePosition==0){
//             return {"titleError":" Title can't be whitespace "};
//          }
//         else if(spacePosition>0)
//          {
//             var firstWord = value.substring(0,spacePosition);
//             var secondWord = value.substring(spacePosition+1,value.length);
//             if(firstWord.length>=3 && secondWord.length>=3)
//                 return null;
//             else 
//                 return {"titleError":"Each word should contain minimum of 3 letters"}
  
//          }
//         }
//         return {"titleError":"Please enter 2 words for title"};
//      }
// }