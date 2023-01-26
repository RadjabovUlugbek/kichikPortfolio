window.addEventListener("DOMContentLoaded", () => {

    let menyu_bars = render(".fa-ellipsis-vertical")
    let menyu_menyu = render(".menyu")

    function menyu() {
        menyu_bars.classList.toggle("fa-x");
        menyu_bars.style.margin = "9px 10px"
        menyu_menyu.style.transition = ".4s ease all"
        menyu_menyu.classList.toggle("change")
        console.log(true);
    }
    menyu_bars.addEventListener("click", menyu)
    let submit = render(".submit")
    let name = render(".your_name")
    let email = render(".email")
    let massage = render(".massage")
    function handleSub() {
        
        let object = {
            name: name.value,
            email:email.value,
            massage:massage.value
        }
        console.log(object);
    }
    submit.addEventListener("click", handleSub)
})