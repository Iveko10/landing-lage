import React from 'react'
import { TextInput, Button, Checkbox, Link } from 'carbon-components-react';
import { Login16, DownToBottom24, WatsonHealthZoomPan32, DocumentDownload32, Wallet32, Notification32 } from '@carbon/icons-react';

import './home.css';

const Home = () => {
    return (
        <>
        <div className="welcome-first">
                <div className="invoices-ibm-icon">
                    <h3 className="white-color padding1">IBM</h3>
                </div>
                <div className="welcome-box shadow">
                    
                    <div className="box-left padding2">
                        <div className="title-left">
                            <div className="logo-invoices"></div>
                            {/* <h1 className="white-color">
                                Invoices@IBM
                                {/* Providing invoice and payment information to Clients,
                                Partners and IBM employees
                            </h1> 
                            */}
                        </div>
                        <div className="body white-color">
                                {/* <h3 className="weight300">Providing invoice and payment information to Clients,
                                Partners and IBM employees
                                </h3> */}
                            <ul className="ul">
                                <li><WatsonHealthZoomPan32 className="align-svg" /> Search and view invoice details</li>
                                <li><DocumentDownload32 className="align-svg" /><span>Download PDF and/or Spreadsheet</span></li>
                                <li><Wallet32 className="align-svg" /> Pay the invoices</li>
                                <li><Notification32 className="align-svg" />Receive notifications for new invoices</li>
                            </ul>
                            {/* <p>Search and view invoice details</p>
                            <p>Download PDF and/or Spreadsheet</p>
                            <p>Raise online requests</p>
                            <p>Receive notifications for new invoices</p> */}
                        </div>
                    </div>
                    {/*  */}
                    <div className="box-right padding2">
                        <div className="title">
                            <h2>Sign in</h2>
                        </div>
                        <form className="login-wrapper">
                            {/* <TextInput
                             className="signin-input"
                            defaultValue=""
                            disabled={false}
                            id="test1"
                            invalid={false}
                            invalidText="A valid value is required"
                            light={false}
                            onChange={function noRefCheck(){}}
                            onClick={function noRefCheck(){}}
                            placeholder="Username"
                            size="xl"
                            type="email"
                            />
                            <TextInput
                             className="signin-input"
                            defaultValue="password"
                            disabled={false}
                            id="test2"
                            invalid={false}
                            invalidText="A valid value is required"
                            light={false}
                            onChange={function noRefCheck(){}}
                            onClick={function noRefCheck(){}}
                            placeholder="Password"
                            size="xl"
                            type="password"
                            />
                            <div className="">
                                <div className="inline-block padding-right1">
                                    <legend className="bx--label">
                                    </legend>
                                    <Checkbox
                                        className=""
                                        id="checkbox-label-1"
                                        indeterminate={false}
                                        labelText="Remember ID"
                                        onChange={function noRefCheck(){}}
                                        wrapperClassName=""
                                    />
                                </div>
                                <div className="inline-block">
                                    <Link
                                    className=""
                                    href="#"
                                    onClick={function noRefCheck(){}}
                                    >
                                    Forgot ID?
                                    </Link>
                                </div>
                            </div> */}

                            <div className="signin-button">
                                <Button 
                                 className="white-color"
                                 disabled={false}
                                 iconDescription="sign in icon"
                                 kind="primary"
                                 onClick={function noRefCheck(){}}
                                 onFocus={function noRefCheck(){}}
                                 renderIcon={() => <Login16 />}
                                 size="default"
                                 tabIndex={0}
                                 type="button"
                               >
                                 Continue
                               </Button>
                            </div>
                        </form>
                        <div className="additional-info center">
                            <span className="small">© Copyright IBM Corp. 2014, 2020. All rights reserved.</span>
                        </div>
                    </div>
                </div>
                <div className="icon-down white-color">
                    <p>scroll down</p>
                    <DownToBottom24/>
                </div>

        </div>
        <div className="welcome-second">
            <header className="header center">
                <h1>Invoices@IBM</h1>
            </header>
            <div className="little-section">
                <span>text 1</span>
                <span>text 2</span>
                <span>text 3</span>
                <span>text 4</span>
            </div>
            <div className="big-section-box4">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div> 
            <div className="big-section-box2">
                <div className="box"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor veritatis maxime facere delectus exercitationem recusandae non? Ad neque non doloremque sequi qui, mollitia velit. Quaerat, consectetur aspernatur, voluptas sunt possimus voluptate expedita, accusantium alias ex aperiam suscipit quis harum iste!</p></div>
                <div className="box"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam, illum sint porro eveniet impedit soluta ipsa sunt ducimus animi cum iste tenetur repellat qui, temporibus dolores explicabo maxime eligendi maiores accusamus! Magni pariatur, maxime illo exercitationem qui facere omnis commodi saepe reiciendis aliquam neque incidunt explicabo eum quos temporibus iusto maiores, alias non eaque nesciunt amet inventore? Omnis porro odit rem. Rerum libero aperiam corporis similique amet ex doloribus laudantium neque suscipit cupiditate. Dolor autem eligendi nesciunt repudiandae ducimus voluptas accusamus. Distinctio qui, quas asperiores nam minima nesciunt maiores consequuntur inventore adipisci sequi provident, praesentium corrupti culpa excepturi impedit!</p></div>
            </div>
            <footer>
                <h2>Footer</h2>
                <section>
                    <span>text 1 | </span>
                    <span>text 2 | </span>
                    <span>text 3 | </span>
                    <span>text 4 | </span>
                </section>
                <section>
                    <a>link a </a>
                    <a>link b </a>
                    <a>link c </a>
                    <a>link d </a>
                </section>
            </footer>
        </div>
        </>
    )
}

export default Home;