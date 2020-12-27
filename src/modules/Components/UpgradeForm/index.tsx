import React from 'react';
import {UpgradeFormStyled} from './styled';

const UpgradeForm = () => {

    const onHandleClick = e => {
        e.stopPropagation();
    };

    return (
        <UpgradeFormStyled>
            <div className="modal">
                <div className="upgrade-form" onClick={onHandleClick}>
                    <h1 className="upgrade-form-title">
                        This feature are in Premium.
                        <img className="upgrade-form-img" src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/410488f759be6944cd73b0456c35799b.png" alt="" />                     
                    </h1>

                    <div className="upgrade-form-main-content">
                        <p className="upgrade-form-notice">
                            Save time by upgrade to Premium and enjoy the Convenience!
                        </p>
                        <div className="upgrade-form-action-holder">
                            <a className="upgrade-form-link-upgrade" href="https://todoist.com/fr/premium/upgrade"  target="_blank" rel="noreferrer">Upgrade Now</a>
                            <a className="upgrade-form-link-more" href="https://todoist.com/fr/premium" target="_blank" rel="noreferrer">Learn more about Premium</a>
                        </div>
                    </div>

                </div>
            </div>
        </UpgradeFormStyled>
    );
};

export default UpgradeForm;