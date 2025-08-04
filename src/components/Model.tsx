import {useParams} from "react-router-dom";
import {SneakerItem} from "../App.tsx";

type ModelProps = {
    items: SneakerItem[];
};

export const Model = ({items}:ModelProps) => {
    const params = useParams();
    const cell = items.find(a =>
        a.id === Number(params.id));
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