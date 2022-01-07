import Head from 'next/head';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import loginImage from './assets/login-image.png';
import styles from './style.module.css';

export const IndexApp: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>Next_App_Template</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div className={styles.container}>
                <div>
                    <p className={styles.title}>Login to your account</p>
                    <p>e-mail</p>
                    <div>
                        <input placeholder="Your e-mail" />
                    </div>
                    <p>password</p>
                    <div>
                        <input placeholder="Your password" />
                    </div>
                    <div>
                        <button>Register</button>
                        <button>Login</button>
                    </div>
                </div>
                <Image className={styles.loginImage} alt="test" src={loginImage} />
            </div>
        </div>
    );
};
IndexApp.displayName = 'IndexApp';