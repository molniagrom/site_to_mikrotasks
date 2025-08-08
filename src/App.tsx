import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Adidas} from "./components/pages/Adidas.tsx";
import {Abibas} from "./components/pages/Abibas.tsx";
import {Puma} from "./components/pages/Puma.tsx";
import {Error404} from "./components/pages/Error404.tsx";
import {S} from "./_styles.ts"
import {Model} from "./components/Model.tsx";

export const PATH = {
    adidas: "/adidas",
    puma: "/puma",
    abibas: "/abibas",
    Error404: "/error404",
    model: "/model"
} as const;

export interface SneakerItem {
    id: number;
    model: string;
    collection: string;
    price: string;
    picture: string;
}

export const App = () => {
    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NavWrapper>
                        <NavLink to={PATH.adidas}>Adidas</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.puma}>Puma</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.abibas}>Abibas</NavLink>
                    </S.NavWrapper>

                </S.Nav>
                <S.Content>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.adidas}/>}/>

                        <Route path={PATH.adidas} Component={Adidas}/>
                        <Route path={PATH.puma} Component={Puma}/>
                        <Route path={PATH.abibas} Component={Abibas}/>

                        <Route path="/:model/:id" element={<Model />}/>

                        <Route path="/*" Component={Error404}/>
                    </Routes>

                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}

