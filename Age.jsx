import React from "react";
import { useState } from "react";


const Age = () => {
    const [syu, setsyu] = useState()
    const [topa, settopa] = useState()
    const [lokk, setlokk] = useState()

    const joke = (e) => {
        setsyu(e.target.value)

    }

    const lonn = (e) => {
        settopa(e.target.value)
    }
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const cal = () => {
        let startDate = new Date(syu);
        let endDate = new Date(topa);

        let stddobyear = startDate.getFullYear();
        let stddobmonth = startDate.getMonth() + 1;
        let stddobdate = startDate.getDate();

        // console.log(`year ${stddobyear} month ${stddobmonth} day ${stddobdate}`);

        let givenYear = endDate.getFullYear();
        let givenMonth = endDate.getMonth() + 1;
        let givendte1 = endDate.getDate();


        leap(givenYear)



        if (
            stddobyear > givenYear ||
            (stddobmonth > givenMonth && stddobyear === givenYear) ||
            (stddobdate > givendte1 && stddobmonth === givenMonth && stddobyear === givenYear)
        ) {
            alert("must")
            return;
        }



        let diffyear = givenYear - stddobyear
        console.log(diffyear);
        let diffmonth, diffdate

        if (givenMonth >= stddobmonth) {
            diffmonth = givenMonth - stddobmonth
            console.log(diffmonth);
        } else {
            diffyear--
            diffmonth = 12 + givenMonth - stddobmonth;
            console.log(diffmonth);
        }
        if (givendte1 >= stddobdate) {
            diffdate = givendte1 - stddobdate
            console.log(diffdate);


        } else {
            diffmonth--
            let days = month[givenMonth - 2];
            diffdate = days + givendte1 - stddobdate
            console.log(diffdate);
        }

        if (diffmonth < 0) {
            diffmonth = 11;
            diffyear--
        }
        console.log(diffdate);
        Show(diffyear, diffmonth, diffdate)

    }




const Show = (totalyear, totalmonth, totalday) => {
    setlokk(`the year is${totalyear} yrs month ${totalmonth}  days${totalday}`)


}
const leap = (year) => {

    if ((year % 4 == 4) && (year % 100 != 0) || (year % 400 == 0)) {
        month[1] = 29;
        console.log("leap");
    } else {
        month[1] = 28
        console.log("nor");

    }

}






return (

    <>


        <input type="date" onChange={joke} />
        <input type="date" onChange={lonn} />
        <button onClick={cal}>click me</button>
        <li >{lokk}</li>
    </>
)

    }

export default Age;