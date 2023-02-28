# Project 1 - Translate-for-sats 🧙

## Overview:
The project is a simple crowdsourcing platform where users can translate Bitcoin-related articles in native African languages and be compensated with bitcoin. The platform will be built using Nodejs for the back-end and React.js for the front-end.

## System Architecture:
The system will be comprised of the following components:

## User Flow:
- User claims article and language for translation.
- User submits a translated article.
- Once the translated article is confirmed,the application displays a button to claim funds, which the user clicks.
- A specified amount of sats is sent to the user’s bitcoin address
- User’s wallet balance is updated

The front-end, which will be built using Reactjs and will handle user interaction with the platform, Ant design for css styling.
Components include:
- Articles 
- Article
- Payment
- Payment history

The back-end, which will be built using Nodejs and will handle the article retrieval and payment processing. API endpoints include:
- [GET] SSO auth callback
- [GET] Payment history
- [GET] Article to translate
- [GET] Articles translated by user
- [POST] Translated article
- [POST] Initialize a payment
    Create a Payment Invoice (for lightning payment)
- [POST] Sign out

A bitcoin node, which will be used to handle payments.

## Modus Operandi:
The application will be a bunch of translation tasks with mode of operation similar to Amazon’s Mechanical Turk, but the scope will be limited to only English and four other African languages i.e. Swahili, Zulu, Yoruba and Arabic. The translation will be from English to other languages and not the other way round.

## Payment Processing:
All payments will be done on-chain with bitcoin. Once an article has been submitted and confirmed, the user clicks a button to claim funds. A lightning invoice is generated and sats are transferred to the user’s wallet. The user also has the option to withdraw the claimed funds to an outside wallet. 

## MVP Milestone:
- Translations Completed
- Payments made

## Non-Goals:
- There is no mechanism for reviewing translated articles.
- There is no mechanism for combating address reuse
- There are no intentions to give users self custody to the wallet


## Dependencies:
- Reactjs
- Ant design(for css)
- Nodejs
- bitcoind - github.com/bitcoin/bitcoin
- Postgres 

