function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(`The Month No  ${month} is JANUARY`);
      break;
    case 2:
      console.log(`The Month No  ${month} is FEBRUARY`);
      break;
    case 3:
      console.log(`The Month No  ${month} is MARCH`);
      break;
    case 4:
      console.log(`The Month No  ${month} is APRIL`);
      break;
    case 5:
      console.log(`The Month No  ${month} is MAY`);
      break;
    case 6:
      console.log(`The Month No  ${month} is JUNE`);
      break;
    case 7:
      console.log(`The Month No  ${month} is JULY`);
      break;
    case 8:
      console.log(`The Month No  ${month} is AUGUST`);
      break;
    case 9:
      console.log(`The Month No  ${month} is SEPTMBER`);
      break;
    case 10:
      console.log(`The Month No  ${month} is OCTOMBER`);
      break;
    case 11:
      console.log(`The Month No  ${month} is NOVEMBER`);
      break;
    case 12:
      console.log(`The Month No  ${month} is DECMBER`);
      break;
    default:
      console.log( `You are entered "${month}" is Invalid Input `);
      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);

