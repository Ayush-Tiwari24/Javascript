// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break; //if break is not used it will continue to execute next cases also utlil default
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid month");
}