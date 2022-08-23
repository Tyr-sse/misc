import React, { useContext, useState } from "react";
import { Accordion } from "react-bootstrap";
import { currentTheme, Iitem, leftZeroes, dateToString, ListContext, stringToDate } from "../../global";

interface IitemP extends Iitem {
    pos: number,
    listPos: number
}


export default function ListItem(props: IitemP) {
    //const [st, setSt] = useState<boolean>(false);

    const [stStatus, setStStatus] = useState<boolean>(props.status);
    const [stInfo, setStInfo] = useState<string>(props.info);
    const [stTitle, setTitle] = useState<string>(props.title);
    const [stDt, setStDt] = useState<string>(dateToString(props.dt));
    const [isOnEditMode, setIsOnEditMode] = useState<boolean>(false);
    //console.log('LI k > ', props.pos)
    const ctxt = useContext(ListContext);
    //console.log('I> ', ctxt)

    const dt = dateToString(props.dt);

    // const defaultDisplay = (
    //     <>
    //         <p >
    //             <td>{'ID: ' + props.id}</td>
    //             <span>{dt.substring(6, 8) + ' / ' + dt.substring(4, 6) + ' / ' + dt.substring(0, 4)}</span>
    //         </p>
    //         <td>
    //             {JSON.stringify(props.ref_list)}
    //         </td>
    //         <td>
    //             <button onClick={() => setIsOnEditMode(true)/*ctxt.editF(props.listPos, props.pos)*/}>EDIT</button>
    //         </td>
    //         <td>
    //             <button onClick={() => ctxt.deleteF(props.listPos, props.pos)}>DELETE</button>
    //         </td>
    //         <td>
    //             {props.status ? 'TRUE' : 'FALSE'}
    //         </td>
    //     </>);
    // const displayOnEditMode = (
    //     <>
    //         <td>
    //             {props.id}
    //         </td>
    //         <td style={{ minWidth: '400px', maxWidth: '400px' }}>
    //             <input
    //                 checked={stStatus}
    //                 onChange={e => setStStatus(!stStatus)}
    //                 type="checkbox"
    //                 name="lastName"
    //                 required
    //             />
    //             <input
    //                 value={stTitle}
    //                 onChange={e => setTitle(e.target.value)}
    //                 placeholder="Title"
    //                 type="text"
    //                 required
    //             />
    //             <input
    //                 value={stInfo}
    //                 onChange={e => seInfoist(e.target.value)}
    //                 placeholder="Ref List"
    //                 type="text"
    //                 required
    //             />
    //             <span
    //                 style={
    //                     {
    //                         display: 'flex',
    //                         flexDirection: 'column',
    //                         borderColor: currentTheme.txt,
    //                         borderWidth: '2px'
    //                     }}
    //             >
    //                 <span >Valor anterior:</span>
    //                 <span>{dt.substring(6, 8) + ' / ' + dt.substring(4, 6) + ' / ' + dt.substring(0, 4)}</span>

    //                 <input
    //                     defaultValue={'2000-20-20'}
    //                     onChange={e => {
    //                         console.log(e.target.value);
    //                         setStDt(e.target.value);

    //                     }}//Adicionar tratamento
    //                     type="date"

    //                 />
    //             </span>

    //         </td>
    //         <td>

    //         </td>
    //         <td>
    //             <button
    //                 onClick={
    //                     () => {
    //                         //checar campos
    //                         console.log('ASD',
    //                             {
    //                                 "status": stStatus,
    //                                 "id": props.id,
    //                                 "title": stTitle,
    //                                 "ref_list": [],//tratar lista
    //                                 "dt": stringToDate(stDt)//tratar data
    //                             })
    //                         ctxt.updateF(props.listPos, props.pos,
    //                             {
    //                                 "status": stStatus,
    //                                 "id": props.id,
    //                                 "title": stTitle,
    //                                 "ref_list": [],//tratar lista
    //                                 "dt": stringToDate(stDt)//tratar data
    //                             }
    //                         );

    //                         setIsOnEditMode(false);

    //                     }
    //                 }
    //             >
    //                 UPDATE
    //             </button>
    //         </td>
    //         <td>
    //         </td>
    //     </>);


    //console.log("RENDER ", isOnEditMode)
    return (
        <Accordion.Item key={props.id} eventKey={props.id}>
            <Accordion.Header>
                {props.title}
            </Accordion.Header>
            <Accordion.Body>
                <table>
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        <tr style={ctxt.theme.itemLine}>
                            <>
                                <td style={ctxt.theme.id}>
                                    <span style={ctxt.theme.idLbl}>{!props.status ? 'FINAL' : 'ANDANDO'}</span>
                                    <p style={ctxt.theme.lbl_01}>STATUS</p>
                                    {isOnEditMode &&
                                        <input
                                            checked={stStatus}
                                            onChange={e => setStStatus(!stStatus)}
                                            type="checkbox"
                                            name="lastName"
                                            required
                                        />}
                                </td>
                                <td style={ctxt.theme.id}>
                                    <span style={ctxt.theme.idLbl}>{props.id}</span>
                                    <p style={ctxt.theme.lbl_01}>ID</p>

                                </td>
                                <td style={ctxt.theme.id}>
                                    <span style={ctxt.theme.idLbl}>{props.title}</span>
                                    <p style={ctxt.theme.lbl_01}>TITLE</p>
                                    {isOnEditMode &&
                                        <input
                                            value={stTitle}
                                            onChange={e => setTitle(e.target.value)}
                                            placeholder="Title"
                                            type="text"
                                            required
                                        />
                                    }
                                </td>
                                <td>
                                    <span style={ctxt.theme.idLbl}>{props.info}</span>
                                    <p style={ctxt.theme.lbl_01}>INFO</p>
                                    {isOnEditMode &&
                                        <input
                                            defaultValue={stInfo}
                                            onChange={e => setStInfo(e.target.value)}
                                            placeholder="INFO"
                                            type="text"
                                            required
                                        />
                                    }
                                </td>

                                <td style={{ fontSize: '14px' }}>
                                    <span style={ctxt.theme.idLbl}>{dt.substring(6, 8) + ' / ' + dt.substring(4, 6) + ' / ' + dt.substring(0, 4)}</span>
                                    <p style={ctxt.theme.lbl_01}>Date</p>
                                    {isOnEditMode &&
                                        <input
                                            onChange={e => {
                                                console.log(e.target.value);
                                                setStDt(e.target.value);

                                            }}//Adicionar tratamento
                                            type="date"

                                        />
                                    }
                                </td>

                                <td>
                                    <button style={{ borderRadius: '8px' }}
                                        onClick={
                                            () => setIsOnEditMode(isOnEditMode => !isOnEditMode)/*ctxt.editF(props.listPos, props.pos)*/
                                        }
                                    >{isOnEditMode ? 'CANCEL' : 'EDIT'}</button>
                                    {isOnEditMode &&
                                        <button style={ctxt.theme.btnUpdate}
                                            onClick={
                                                () => {
                                                    //checar campos
                                                    console.log('ASD',
                                                        {
                                                            "status": stStatus,
                                                            "id": props.id,
                                                            "title": stTitle,
                                                            "ref_list": [],//tratar lista
                                                            "dt": stringToDate(stDt)//tratar data
                                                        })
                                                    ctxt.updateF(props.listPos, props.pos,
                                                        {
                                                            "status": stStatus,
                                                            "id": props.id,
                                                            "title": stTitle,
                                                            "ref_list": [],//tratar lista
                                                            "dt": stringToDate(stDt)//tratar data
                                                        }
                                                    );

                                                    setIsOnEditMode(false);

                                                }
                                            }
                                        >
                                            UPDATE
                                        </button>
                                    }
                                    <button style={ctxt.theme.btnDelete}
                                    onClick={() => ctxt.deleteF(props.listPos, props.pos)}>DELETE</button>
                                    
                                </td>


                            </>

                            {/* 

<input
    //                     

                                <td>ID: {props.id}</td>
                                <td>STATUS
                                    <input
                                        checked={stStatus}
                                        onChange={e => setStStatus(!stStatus)}
                                        type="checkbox"
                                        name="lastName"
                                        required
                                    />
                                </td>
                                <td>TITLE:
                                    <input
                                        value={stTitle}
                                        onChange={e => setTitle(e.target.value)}
                                        placeholder="Title"
                                        type="text"
                                        required
                                    /></td>
                                <td>INFO:
                                    <input
                                        defaultValue={stInfo}
                                        onChange={e => setStInfo(e.target.value)}
                                        placeholder="INFO"
                                        type="text"
                                        required
                                    />

                                </td>
                                <td>DATE</td>
                                <td>ACTIONS</td> */}
                        </tr>

                    </tbody>
                </table>

            </Accordion.Body>
        </Accordion.Item>);

    // return (
    //     <Accordion.Item key={props.id} eventKey={props.id}>
    //         <Accordion.Header>
    //             {props.title}
    //         </Accordion.Header>
    //         <Accordion.Body>
    //             <table >
    //                 <tbody>
    //                     <tr style={ctxt.theme.itemLine}>
    //                         <td >
    //                             {'ID: ' + props.id}
    //                             ...

    //                             <span>{dt.substring(6, 8)}|</span>

    //                             <span>{dt.substring(4, 6)}|</span>
    //                             <span>{dt.substring(0, 4)}|</span>
    //                             ...
    //                         </td>
    //                         <td>
    //                             {
    //                                 props.ref_list.length ?
    //                                     props.ref_list.map((x) => {

    //                                         return <p>{'[' + x + ']'}</p>

    //                                     }) : <p>[0]</p>
    //                             }


    //                         </td>
    //                         <td>

    //                             <button onClick={()=>ctxt.editF(props.listPos,props.pos)}>EDIT</button>
    //                             <button onClick={()=>ctxt.deleteF(props.listPos,props.pos)}>DELETE</button>

    //                         </td>
    //                         <td>
    //                             ...status: {props.status ? 'TRUE' : 'FALSE'}^...
    //                         </td>
    //                     </tr>
    //                 </tbody>
    //             </table>

    //         </Accordion.Body>
    //     </Accordion.Item>);

}