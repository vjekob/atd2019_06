import React, { PureComponent } from "react";
import styles from "./DataContainer.module.css";
import { DataEntry } from "../dataEntry/DataEntry";
import { connectToSimplerData } from "../../redux/simpler.state";

class DataContainerDisconnected extends PureComponent {
    render() {
        const { data } = this.props;
        console.log("Render => DataContainer")
        return (
            <div className={styles.data}>
                {
                    data.map(entry => (
                        <DataEntry
                            entryNo={entry.entryNo}
                            key={entry.entryNo} />
                    ))
                }
            </div>
        );
    }
}

export const DataContainer = connectToSimplerData(DataContainerDisconnected);
