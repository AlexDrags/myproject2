import React, { Component} from "react";

export default function Button(props) {
    if(props.isLoggedIn) {
        return (
            <button type="button" onClick={props.onClick}>
              Выйти
            </button>
        );
    }
    return (
        <button onClick={props.onClick}>
          Войти
        </button>
    );
}