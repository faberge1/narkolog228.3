window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 50) {
        document.getElementById("menu").className = "menuScrollBgColor";
    } else {
        document.getElementById("menu").className = "";
    }
}

    var modal = document.querySelector(".modal2");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");
    var modalButtonForm1 = document.querySelector(".modal-button-form1");
    var modalButtonForm2 = document.querySelector(".modal-button-form2");
    var modalButtonForm3 = document.querySelector(".modal-button-form3");
    var modalButtonForm4 = document.querySelector(".modal-button-form4");
    var modalButtonForm5 = document.querySelector(".modal-button-form5");
    var modalButtonForm6 = document.querySelector(".modal-button-form6");
    var modalButtonForm7 = document.querySelector(".modal-button-form7");
    var modalButtonForm8 = document.querySelector(".modal-button-form8");
    var modalButtonForm9 = document.querySelector(".modal-button-form9");
    var modalButtonForm10 = document.querySelector(".modal-button-form10");
    var modalButtonForm11 = document.querySelector(".modal-button-form11");
    var modalButtonForm12 = document.querySelector(".modal-button-form12");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
    ////////////////////////////
    
    modalButtonForm1.addEventListener("click", toggleModal);
    modalButtonForm2.addEventListener("click", toggleModal);
    modalButtonForm3.addEventListener("click", toggleModal);
    modalButtonForm4.addEventListener("click", toggleModal);
    modalButtonForm5.addEventListener("click", toggleModal);
    modalButtonForm6.addEventListener("click", toggleModal);
    modalButtonForm7.addEventListener("click", toggleModal);
    modalButtonForm8.addEventListener("click", toggleModal);
    modalButtonForm9.addEventListener("click", toggleModal);
    modalButtonForm10.addEventListener("click", toggleModal);
    modalButtonForm11.addEventListener("click", toggleModal);
    modalButtonForm12.addEventListener("click", toggleModal);



