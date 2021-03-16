import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styles from './start.module.scss'
import infoIcon from '../../businessman.svg'
import Info from '../Info/Info'

function Start() {
    const history = useHistory()
    const [toggleInfo, setToggleInfo] = useState('')


    function plus() {
    }


    function minus() {
    }

    function multiplication() {
        history.push('/multiplication')


    }

    function division() {
    }


    function toggleInfoFun() {
        setToggleInfo(true)
    }



    return (
        <div className={styles.startContainer}>
            <header>
                <div onClick={toggleInfoFun}>
                    <img src={infoIcon}></img>
                </div>
                <h1> Math Memory Game For Kids</h1>

            </header>
            {toggleInfo ? <Info toggle={setToggleInfo} /> :

                <main>

                    {/* <div>
                        <h1> Choose one! </h1>
                    </div> */}


                    <section>

                        <div className={styles.plusSignContainer} onClick={plus}>
                            <h4>  &#43; </h4>
                        </div>
                        <div className={styles.minusSignContainer} onClick={minus}>
                            <h4> &#8722; </h4>
                        </div>
                        <div className={styles.multiplicationSignContainer} onClick={multiplication}>
                            <h4> &#215; </h4>
                        </div>
                        <div className={styles.divisionSignContainer} onClick={division}>
                            <h4> &#247; </h4>
                        </div>
                    </section>

                </main>
            }
        </div>
    );
}

export default Start;