import styled from 'styled-components';

export const UpgradeFormStyled = styled.div`
    cursor: default;

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        animation: fadeIn linear 0.1s;
        transition: opacity linear 0.2s;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);

        @keyframes growth {
            from {
                transform: scale(var(0.7));
            }
            to {
                transform: scale(var(1));
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .upgrade-form {
            margin: 10vh auto 0;
            position: relative;
            z-index: 1;
            animation: linear 0.1s;
            background-color: white;
            width: 42%;
            height: 230px;
            border-radius: 4px;
            overflow: hidden;
            padding: 24px 0;

            .upgrade-form-title {
                font-size: 1.3rem;
                font-weight: 400;
                display: flex;
                margin: 11px 0 20px;
                padding: 17px 100px 17px 30px;
                background-color: #F1F1F1;
                position: relative;
                overflow: hidden;

                .upgrade-form-img {
                    width: 76px;
                    position: absolute;
                    top: -14px;
                    right: 20px;
                }
            }

            .upgrade-form-main-content {
                margin: 0 30px;

                .upgrade-form-notice {
                    margin: 13px 0;
                    font-size: 1.3rem;
                }

                .upgrade-form-action-holder {
                    margin-top: 20px;

                    .upgrade-form-link-upgrade {
                        color: white;
                        text-decoration: none;
                        background-color: #db4c3f;
                        border-radius:3px;
                        font-weight: 600;
                        display:inline-block;
                        padding: 6px 10px;
                        margin-right: 13px;
                    }

                    .upgrade-form-link-more {
                        color: #db4c3f;
                    }
                }
            }

        }
    }
`;