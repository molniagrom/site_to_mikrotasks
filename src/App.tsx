import styles from "./components/Site.module.css";
import {NavLink, Outlet} from 'react-router-dom';
import {S} from './components/pages/_styles';

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PRICES: '/pricies',
} as const

export const App = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Prices</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>

                    <Outlet/>

                    {/*<Routes>*/}
                    {/*  <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>*/}

                    {/*  <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*  <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*  <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
                    {/*  <Route path={PATH.PRICES} element={<Prices/>}/>*/}

                    {/*  <Route path={'/:model/:id'} element={<Model/>}/>*/}

                    {/*  <Route path={'/*'} element={<Error404/>}/>*/}

                    {/*</Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}
