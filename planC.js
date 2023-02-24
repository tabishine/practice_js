// Создать функцию `leaveFast`, которая
// после двух секунд должна вернуть в resolve "leave the bank in 2 seconds"
// и после 4 секунд должна вернуть в resolve "close the road in 4 seconds"
// Если два условия выполнены вывести в консоль "we almost did it!" и promise all
// переписать глобальную переменную `window.plans.planC=true;`
const firstTask = "leave the bank in 2 seconds";
const secondTask = "close the road in 4 seconds";
function leaveFast(time, text){
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(text), time)

    });
}

    Promise.all[leaveFast(2000, firstTask), leaveFast(4000, secondTask)].then(
        (res) => {
            console.log("promiseAll result", res);
            console.log("we almost did it!");
            window.plans.planC = true;
        }
    );
