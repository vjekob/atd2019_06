import React, { Component } from "react";
import { SummaryEntry } from "./SummaryEntry";

const getSummary = selected => selected.reduce(
    (prev, current) => {
        const currency = current.currency || "LCY";
        const result = { ...prev };
        result[currency] = (result[currency] || 0) + current.amount;
        return result;
    }, {});

export class SummaryDetails extends Component {
    render() {
        const { selected } = this.props;
        const data = getSummary(selected);
        console.log("Render => SummaryDetails")
        return (
            <table width="80%">
                <thead>
                    <tr>
                        <td width="30%">Currency</td>
                        <td width="70%">Amount</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(data).map(key =>
                            <SummaryEntry
                                currency={key}
                                amount={data[key]}
                                key={key} />)
                    }
                </tbody>
            </table>
        );
    }
}
