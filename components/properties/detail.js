/* eslint-disable max-statements */
import PropTypes from "prop-types";
import React, { useState } from "react";
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
  Balance,
  AccountList,
  AccountListItem,
  InfoIcon,
  InfoText,
  Inset,
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
  };
  let mortgage;
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  return (
    <div>
      <Inset>
        <AccountSection>
          <AccountLabel>Estimated Value</AccountLabel>
          <AccountHeadline>
            <Balance>{`£${account.recentValuation.amount}`}</Balance>
          </AccountHeadline>
        </AccountSection>
        {/* {!account.closed && (
            <>
              {account.auto ? (
                <AccountList>
                  <LastUpdated
                    lastUpdated={account.providerLastUpdated}
                    timeBetweenUpdates={timeBetweenUpdates}
                  />
                  <AccountListItem>
                    <InfoIcon name="banks.zoopla.icon" size="24" />
                    <InfoText>
                      {T("accounts.details.type.properties.isAuto")}
                    </InfoText>
                  </AccountListItem>
                </AccountList>
              ) : (
                <>
                  <AccountListItem>
                    <InfoText>{getExplanation()}</InfoText>
                  </AccountListItem>
                  {isEnabled("mh2:enableZooplaConnections") && (
                    <ZooplaConnectionCTA
                      accountUid={account.uid}
                      navigateTo={routingService.navigateTo}
                    />
                  )}
                </>
              )}
            </>
          )}
        </AccountPanel>
        <ListPanel
          title={T("accounts.details.type.properties.details")}
          items={getDetails([account.name, account.bankName, account.postcode])}
        />

        {account.notes && (
          <ListPanel
            title={T("accounts.details.notesLabel")}
            items={getDetails([account.notes])}
          />
        )}

        {mortgage ? (
          <ListPanel
            onClick={gotoMortgage}
            title={T("accounts.details.type.properties.mortgage")}
            items={getDetails([
              numberFormatter.formatExpense(mortgage.currentBalance),
              mortgage.name,
            ])}
          >
            <Button onPress={() => setModalIsOpen(true)} type="secondary">
              {T("accounts.details.type.properties.changeMortgage")}
            </Button>
          </ListPanel>
        ) : (
          connectMortgageButton()
        )}

        <ButtonPanel>
          <ManageButton account={account} onPress={manageConnectionHandler} />
          <ArchiveButton onPress={archiveHandler} closed={account.closed} />
        </ButtonPanel>  */}
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
