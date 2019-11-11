import React, { PureComponent } from "react";
import numeral from "numeral";
import { NUMERAL_FORMAT } from "../../constants";

export class SummaryEntry extends PureComponent {
    render() {
        const { currency, amount } = this.props;
        if (!amount)
            return null;
        console.log(`Render => SummaryEntry ${currency}`)
        return (
            <tr>
                <td>{currency}</td>
                <td>{numeral(amount).format(NUMERAL_FORMAT)}</td>
            </tr>
        );
    }
}
