import React, { Fragment } from 'react';
import PresentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header'
import { Column, Section, Title, Container } from "rbx";
import '../../styles/home.scss';
import { Link } from 'react-router-dom'

const HomeScreen = () => (
    <>
        <Header />
        <Section size="medium" className="home">
            <Container>
                <Column.Group>
                    <Column size={5}>
                        <Title size={2} spaced className="has-text-white">
                            Create notes easily and access when you wants on the cloud
                        </Title>
                        <Title size={5} spaced className="has-text-light" subtitle>

                            Application made in React JS. Allows user management (registration, updating and deletion). It performs with activity the registration of notes, editing, listing, searching and deleting.
                        </Title>
                        <Link to='/register' className="button is-outlined is-white is-large">
                            <strong>Register for free Now</strong>
                        </Link>
                    </Column>
                    <Column size={6} offset={1}>
                        <img src={PresentationImage} />
                    </Column>
                </Column.Group>
            </ Container>
        </Section>
    </>
)

export default HomeScreen;