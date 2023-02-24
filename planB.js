// Создать функцию `placeABomb` которая должна взорваться через 2 секунды с текстом "BANG!"
// Взрыв должен быть в `reject`
// Метод `catch` должен переписать глобальную переменную `window.plans.planB=true;`
function placeBomb(time){
    return new Promise((resolve, reject) =>{
        setTimeout(() => reject("BANG!"), time);

    })
}
placeBomb(2000).catch((err) => {
    console.log(err);
    window.plans.planB=true;
})