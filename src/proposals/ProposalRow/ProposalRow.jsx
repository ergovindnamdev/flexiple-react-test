import React from "react";
import classNames from "classnames";

import "./ProposalRow.css";

const withoutEventDefault = (callback) =>
    event => {
        event.preventDefault();
        callback();
    };

const ProposalRow = ({ proposal, onStatusUpdate }) => {
    const { id, title, speaker, status, category } = proposal;
    return (
        <div data-testid={`proposal-id-${id}`} className={classNames("ProposalRow", (status ? `ProposalRow--${status}`:""))}>
            <div className="ProposalsRow__status_indicator"/>
            <div className="ProposalsRow__title">
                {title}
            </div>
            <div className="ProposalsRow__speaker">
                {speaker}
            </div>
            <div className="ProposalsRow__category">
                category: {category}
            </div>
            <div className="ProposalsRow__status">
                status : {status === "" ? "_unknown_" : "_"+status+"_"}
            </div>

            <button
                className="ProposalsRow__accept_button"
                onClick={withoutEventDefault(() => onStatusUpdate(id, "accepted"))}
            >
                Accept
            </button>
            <button
                className="ProposalsRow__reject_button"
                onClick={withoutEventDefault(() => onStatusUpdate(id, "rejected"))}
            >
                Reject
            </button>
            
        </div>
    );
};

export default ProposalRow;
