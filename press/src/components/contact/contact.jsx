import React from "react";
import "./contact.css";

function Contact() {
    return (
        <>
            <section id="contact">
                <div className="form">
                    <h2>Готовы начать?</h2>
                    <p>У вас есть идея или появились вопросы? Свяжитесь с нами прямо сейчас и мы обсудим ваш проект!</p>
                    <form action="https://sheetdb.io/api/v1/2mo80vr5jnjmp" method="post" id="sheetdb-form">
                        <input className="input" placeholder="E-mail" type="email" name="data[email]" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" required/>
                        <button className="btn__send" >Отправить</button>
                    </form>
                </div>
            </section>
        </>
    )
    var form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        }).then(
            response => response.json()
        ).then((html) => {
            alert("Ваше собщение отправлено!");
            e.target.reset(); 
        });
    });
}



export default Contact;