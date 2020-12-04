/* eslint-disable max-statements */
import PropTypes from "prop-types";
import React, { useState } from "react";
import { add, format } from "date-fns";
// import ZooplaConnectionCTA from "../../banking-integration/components/cta-zoopla-property";
// import LastUpdated from "../../connections/details/data/components/last-updated";

// import ListPanel from "../components/detail/list-panel";
// // import AccountPanel from "../components/account-panel";
// // import ButtonPanel from "../components/detail/button-panel";

// import ArchiveButton from "../components/detail/archive-button";
// import ManageButton from "../components/detail/manage-button";
// import LinkPropertyModal from "./link-mortgage";

import {
  AccountHeadline,
  AccountLabel,
  AccountSection,
  AccountList,
  AccountListItem,
  InfoIcon,
  InfoText,
  Inset,
  RowContainer,
  Chevron,
} from "./style";

const Detail = () => {
  const account = {
    uid: "65156cdc-5cfd-4b34-b626-49c83569f35e",
    deleted: false,
    dateCreated: "2020-12-03T08:55:33.421Z",
    currency: "GBP",
    name: "15 Temple Way",
    bankName: "Residential",
    type: "properties",
    subType: "residential",
    originalPurchasePrice: 250000,
    originalPurchasePriceDate: "2017-12-03",
    recentValuation: { amount: 310000, status: "good" },
    associatedMortgages: [
      {
        name: "HSBC Repayment Mortgage",
        uid: "fb463121-b51a-490d-9f19-d2ea76f05e25",
        currentBalance: -175000,
      },
    ],
    canBeManaged: false,
    postcode: "BS1 2AA",
    lastUpdate: "2020-12-03T08:55:33.421Z",
    updateAfterDays: 30,
  };

  let mortgage;
  const onClick = () => alert("You have navigated away");
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  return (
    <div>
      <Inset>
        <AccountSection>
          <AccountLabel>Estimated Value</AccountLabel>
          <AccountHeadline>
            {`£${account.recentValuation.amount}`}
          </AccountHeadline>
          <AccountList>
            {/* <Flex> */}
            <InfoText>
              {`Last updated ${format(lastUpdate, "Do MMM yyyy")}`}
            </InfoText>
            <InfoText>
              {`Next update ${format(
                add(lastUpdate, { days: account.updateAfterDays }),
                "Do MMM yyyy"
              )}`}
            </InfoText>
          </AccountList>
        </AccountSection>
        <AccountSection>
          <AccountLabel>Property details</AccountLabel>
          <RowContainer>
            <AccountList>
              <AccountListItem key="name">
                <InfoText>{account.name}</InfoText>
              </AccountListItem>
              <AccountListItem key="type">
                <InfoText>{account.bankName}</InfoText>
              </AccountListItem>
              <AccountListItem key="postcode">
                <InfoText>{account.postcode}</InfoText>
              </AccountListItem>
            </AccountList>
          </RowContainer>
        </AccountSection>
        {mortgage && (
          <AccountSection>
            <AccountLabel>Mortgage</AccountLabel>
            <RowContainer onClick={onClick}>
              <AccountListItem key="balance">
                <InfoText>{`£${Math.abs(
                  account.associatedMortgages[0].currentBalance
                )}`}</InfoText>
              </AccountListItem>
              <AccountListItem key="mortgage">
                <InfoText>{account.associatedMortgages[0].name}</InfoText>
              </AccountListItem>

              {onClick && <Chevron>></Chevron>}
            </RowContainer>
          </AccountSection>
          // <Button onPress={() => setModalIsOpen(true)} type="secondary">
          //   {T("accounts.details.type.properties.changeMortgage")}
          // </Button>
        )}
      </Inset>
    </div>
  );
};

Detail.propTypes = {
  accountDetailsActionCreator: PropTypes.object.isRequired,
  navigationActionCreator: PropTypes.object.isRequired,
  manageConnectionHandler: PropTypes.func.isRequired,
  confirmationActionCreator: PropTypes.object.isRequired,
  mortgageActionCreator: PropTypes.object.isRequired,
  routingService: PropTypes.object.isRequired,
  iconService: PropTypes.object.isRequired,
  settingsStore: PropTypes.object,
  editHandler: PropTypes.func.isRequired,
  archiveHandler: PropTypes.func.isRequired,
  tenantConfiguration: PropTypes.object.isRequired,
  mortgagesWithoutProperties: PropTypes.array.isRequired,
  account: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    associatedMortgages: PropTypes.array.isRequired,
    yearlyAppreciation: PropTypes.number,
    type: PropTypes.string.isRequired,
    closed: PropTypes.string,
    linkWithMortgages: PropTypes.bool,
    name: PropTypes.string.isRequired,
    bankName: PropTypes.string,
    recentValuation: PropTypes.object,
    notes: PropTypes.string,
    postcode: PropTypes.string,
    providerLastUpdated: PropTypes.string,
    auto: PropTypes.bool,
    originalPurchasePrice: PropTypes.number,
    originalPurchasePriceDate: PropTypes.string,
  }),
};

Detail.contextTypes = {
  numberFormatter: PropTypes.object.isRequired,
  dateService: PropTypes.object.isRequired,
};

export default Detail;
