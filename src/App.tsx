import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {Error404} from "./components/pages/Error404.tsx";

export const App = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavLink to={"/page1"}
                             className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
                        Page 1
                    </NavLink>
                    <NavLink to={"/page2"}
                             className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
                        Page 2
                    </NavLink>
                    <NavLink to={"/page3"}
                             className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
                        Page 3
                    </NavLink>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/page1"}/>}/>

                        <Route path="/page1" Component={PageOne}/>
                        <Route path="/page2" Component={PageTwo}/>
                        <Route path="/page3" Component={PageThree}/>

                        <Route path="/error404" Component={Error404}/>
                        <Route path="/*" element={<Navigate to={"/error404"}/>}/>
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}
