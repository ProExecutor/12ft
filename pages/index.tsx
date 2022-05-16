import { Grid, Input, Page } from '@geist-ui/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import useKeyPressAlt from '../common/hooks/useKeyPressAlt';
import Content from '../components/content';
import Default from '../components/default';
import SearchModal from '../components/search-modal/search-modal';

const Home: NextPage = () => {
    const [url, setUrl] = useState('');
    const [state, setState] = useState(false);
    const isKeyPressed = useKeyPressAlt('k');

    useEffect(() => {
        if (isKeyPressed) {
            setState(true);
        }
    }, [isKeyPressed]);

    return (
        <div>
            <Head>
                <title>12ft | Access articles behind paywall</title>
                <meta name='description' content='Access articles behind paywalls' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {!url || state ? <Default /> : null}
            <SearchModal modalState={state} setModalState={setState} setValue={setUrl} />
            {url ? (
                <Page padding={0} margin={0}>
                    <Content url={url} />
                </Page>
            ) : null}
        </div>
    );
};

export default Home;
