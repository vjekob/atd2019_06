import React, { Component } from "react";
import { DataContainer } from "../dataContainer/DataContainer";
import { SummaryContainer } from "../summaryContainer/SummaryContainer";
import { store } from "../../redux/store";
import { update } from "../../redux/simpler.actions";

window.SendData = data => store.dispatch(update(data));

export class View extends Component {
    render() {
        return (
            <>
                <DataContainer />
                <SummaryContainer />
            </>
        );
    }
}
