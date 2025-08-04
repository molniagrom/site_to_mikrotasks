import { useParams, useLocation } from "react-router-dom";
import { adidasArr } from "./pages/Adidas.tsx";
import { pumaArr } from "./pages/Puma.tsx";

export const Model = () => {
    const params = useParams();
    const location = useLocation();

    // Определяем, с какой страницы пришел запрос
    const isPuma = location.pathname.includes("/puma");
    const dataArr = isPuma ? pumaArr : adidasArr;

    // Ищем элемент в нужном массиве
    const cell = dataArr.find(item => item.id === Number(params.id));

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {cell ? (
                    <>
                        <h2>{cell.model}</h2>
                        <img
                            style={{ width: "50%", height: "50%" }}
                            src={cell.picture}
                            alt={cell.model}
                        />
                        <p>{cell.collection}</p>
                        <p>{cell.price}</p>
                    </>
                ) : (
                    <p>There's no such sneaker</p>
                )}
            </div>
        </div>
    );
};