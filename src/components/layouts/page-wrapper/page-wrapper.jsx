import React, { Component} from "react";
import Header from "../header/header";
import Clock from "../../ui/clock/clock";


export default function PageWrapper() {
    return (
        <>
        <Header />
        <main>
            <div className="container">
                <p className="App__paragraf"> Текущее время </p>
                <Clock />
            </div>
        </main>
        </>
        
    )
}
