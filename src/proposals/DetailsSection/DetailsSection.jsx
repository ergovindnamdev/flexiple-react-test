import React from "react";
import classNames from "classnames";

import "./DetailsSection.css";

const DetailsSection = ( { children, className, name }) => (
    <section className={classNames("DetailsSection", className)}>
        <div className="DetailsSection__name">
            {name}
        </div>
        <div className="DetailsSection__content">{children.props.children}</div>
    </section>
);

export default DetailsSection;
