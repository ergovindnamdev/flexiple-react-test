import React from "react";

import DetailsSection from "../DetailsSection";

import "./ProposalDetails.css";

const ProposalDetails = (talk) => {

   const { speaker, category, description } = talk;

  return (
    <div data-testid="proposal-details" className="ProposalDetails">
      <DetailsSection className="ProposalDetails__speaker" name="speaker">
        <span className="ProposalDetails__speaker__value">
          {talk.talk?.speaker}
        </span>
      </DetailsSection>
      <DetailsSection className="ProposalDetails__category" name="category">
        <span className="ProposalDetails__category__value">
          {talk.talk?.category}
        </span>
      </DetailsSection>
      <DetailsSection className="ProposalDetails__title" name="title">
        <span className="ProposalDetails__title__value">
          {talk.talk?.title}
        </span>
      </DetailsSection>
      <DetailsSection
        className="ProposalDetails__description"
        name="description"
      >
        <div className="ProposalDetails__description__value">
          {talk.talk?.description}
        </div>
      </DetailsSection>
    </div>
  );
};

export default ProposalDetails;
