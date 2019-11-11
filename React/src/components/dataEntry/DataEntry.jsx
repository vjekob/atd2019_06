import React, { Component } from "react";
import styles from "./DataEntry.module.css";
import numeral from "numeral";
import { NUMERAL_FORMAT } from "../../constants";
import { connectToSimplerEntry } from "../../redux/simpler.state";

class DataEntryDisconnected extends Component {
    render() {
        const { entry, entryNo, selected } = this.props;
        console.log(`Render => DataEntry ${entryNo}`)
        return (
            <div
                className={`${styles.entry} ${selected ? styles.selected : ""}`}
                onClick={() => this.props.select(entry)}>
                <div className={styles.date}>{entry.documentDate}</div>
                <div className={styles.customer}>
                    <div className={styles.no}>{entry.customerNo}</div>
                    <div className={styles.name}>{entry.customerName}</div>
                </div>
                <div className={styles.amount}>
                    <span className={styles.currency}>{entry.currency}</span>
                    <span className={styles.number}>{numeral(entry.amount).format(NUMERAL_FORMAT)}</span>
                </div>
            </div>
        );
    }
}

export const DataEntry = connectToSimplerEntry(DataEntryDisconnected);