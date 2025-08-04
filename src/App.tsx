import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {Error404} from "./components/pages/Error404.tsx";
import {S} from "./_styles.ts"

const PATH = {
    PAGE1: "/page1",
    PAGE2: "/page2",
    PAGE3: "/page3",
    Error404: "/error404",
} as const;

export const App = () => {
    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE1}>Page 1</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE2}>Page 2</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE3}>Page 3</NavLink>
                    </S.NavWrapper>

                </S.Nav>
                <S.Content>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/page1"}/>}/>

                        <Route path={PATH.PAGE1} Component={PageOne}/>
                        <Route path={PATH.PAGE2} Component={PageTwo}/>
                        <Route path={PATH.PAGE3} Component={PageThree}/>

                        {/*<Route path={PATH.Error404} Component={Error404}/>*/}
                        <Route path="/*" Component={Error404}/>
                    </Routes>

                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}

