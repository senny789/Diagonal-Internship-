//Code used for reference:
// const formulatePayment = (choice, amount) => {
// const initialPayment = ((10 / 100) * amount).toFixed(2); const remainingTotal = amount - initialPayment;
// if (choice == 'weekly') {
// let weeklyAmountPayment = 0;
// let weekly = remainingTotal / weeklyAmountPayment;
// while (weekly > 156) {
// weeklyAmountPayment = weeklyAmountPayment + 50; let weeks = remainingTotal / weeklyAmountPayment; if (weeks % 50 !== 0) {
//         weekly = Math.ceil(weeks);
//       }
// }
// console.log(`You will be paid ${weeklyAmountPayment} for ${weekly} weeks.`);
// return { time: weekly, amount: weeklyAmountPayment }; } else if (choice == 'monthly') {
// let monthlyPrice = 0;
// 3

// let monthly = remainingTotal / monthlyPrice;
// while (monthly > 36) {
// monthlyPrice = monthlyPrice + 100;
// let months = remainingTotal / monthlyPrice; if (months % 100 !== 0) {
//         monthly = Math.ceil(months);
//       }
// }
// console.log(`You will be paid ${monthlyPrice} for ${monthly} months.`);
// return { time: monthly, amount: monthlyPrice }; } else {
// return null; }
// };


const formulatePayment = (choice, amount) => {
    const initialPayment = ((10 / 100) * amount).toFixed(2); 
    const remainingTotal = amount - initialPayment;
    if (choice == 'weekly') {
          let weeklyAmountPayment = 50;         /* changing the value from 0 to 50 since a multiple of 50 is needed for the payment during weeks */
          let weekly = remainingTotal / weeklyAmountPayment;
          while (weekly > 156) {
            weeklyAmountPayment = weeklyAmountPayment + 50; 
            weekly = remainingTotal / weeklyAmountPayment; /* here instead of declaring a new variable we can use the existing weekly variable */ 
            if (weekly % 50 !== 0) {
                  weekly = Math.ceil(weekly);
                }
             }
          console.log(`You will be paid ${weeklyAmountPayment} for ${weekly} weeks.`);
          return { time: weekly, amount: weeklyAmountPayment }; 
        } 
    else if (choice == 'monthly') {
        let monthlyPrice = 100; /* changing the value from 0 to 100 since a multiple of 100 is needed for the payment during months */
        let monthly = remainingTotal / monthlyPrice;
         while (monthly > 36) {
             monthlyPrice = monthlyPrice + 100;
                monthly = remainingTotal / monthlyPrice; /* here instead of declaring a new variable we can use the existing monthly variable */ 
             if (monthly % 100 !== 0) {
                    monthly = Math.ceil(monthly);
                 }
                  }
        console.log(`You will be paid ${monthlyPrice} for ${monthly} months.`);
        return { time: monthly, amount: monthlyPrice }; 
    } 
    else {
    return null; 
    }
    };
    