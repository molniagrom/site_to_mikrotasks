import {useParams} from "react-router-dom";
import {SneakerItem} from "../App.tsx";
import {pumaArr} from "./pages/Puma.tsx";
import {adidasArr} from "./pages/Adidas.tsx";
import {funnyShoeArr} from "./pages/Abibas.tsx";

// type ModelProps = {
//     items: SneakerItem[];
// };

type ObjectType = {
    [key: string]: SneakerItem[]
}

const object: ObjectType = {
    puma: pumaArr,
    adidas: adidasArr,
    abibas: funnyShoeArr
}

export const Model = () => {
    const {model, id} = useParams();

    console.log(model)

    const cell = model
        ? object[model].find(a => a.id === Number(id))
        : null


    console.log(cell);

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {cell ? (
                    <>
                        <h2>{cell.model}</h2>
                        <img
                            style={{width: "50%", height: "50%"}}
                            src={cell.picture}
                            alt="adidas"
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