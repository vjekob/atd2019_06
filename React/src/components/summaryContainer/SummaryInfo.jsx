import React, { Component } from "react";
import styles from "./SummaryContainer.module.css";

export class SummaryInfo extends Component {
    render() {
        return (
            <div className={styles.info}>(no invoices selected)</div>
        );
    }
}
