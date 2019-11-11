import React, { PureComponent } from "react";
import styles from "./SummaryContainer.module.css";
import { SummaryDetails } from "./SummaryDetails";
import { SummaryInfo } from "./SummaryInfo";
import { connectToSimplerSelected } from "../../redux/simpler.state";

class SummaryContainerDisconnected extends PureComponent {
    render() {
        const { selected } = this.props;
        console.log("Render => SummaryContainer")
        return (
            <div className={styles.summary}>
                <div className={styles.label}>Payment summary</div>
                {
                    selected.length
                        ? <SummaryDetails selected={selected} />
                        : <SummaryInfo />
                }
            </div>
        );
    }
}

export const SummaryContainer = connectToSimplerSelected(SummaryContainerDisconnected);