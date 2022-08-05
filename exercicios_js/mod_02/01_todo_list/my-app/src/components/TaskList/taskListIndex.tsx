import React from "react";

import Accordion from 'react-bootstrap/Accordion';

function leftZeroes(val: (number | string), n: number) {
    n = Math.floor(n);
    val = '' + val;
    let str = val + '';
    let r = '';
    for (let i = 0; i < n - str.length; i++) r += '0';
    return r + str;
}



export default function TaskList(props: any) {

    let list: any[] = props.taskList ?? [];
   

    return <Accordion defaultActiveKey="0">
        {
            list.map((x) => {
                let dt = x.dueDate.toString().split(' ');
                return <>{/*JSON.stringify(x)*/}
                    <Accordion.Item eventKey={x.id} key={'hd'+x.id} 
                        style={{//QUADRO
                            //borderColor: currentTheme.col04,
                            
                            //maxWidth: "100%",
                            borderRadius: 10,
                            borderWidth: 4,
                            //margin:5,
                            borderColor: "#ff00ff",
                            padding: 1,
                            alignContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly'
                    
                        }} 
                    >
                        <Accordion.Header><h3>{x.title}</h3></Accordion.Header>
                        <Accordion.Body>
                            Due Date: { leftZeroes(x.dueDate.getDay(),2 )+' / '+leftZeroes(x.dueDate.getMonth() ,2)+' / '+leftZeroes(x.dueDate.getFullYear(),2 )}
                        </Accordion.Body>
                    </Accordion.Item>
                    

                </>

            })


        }



    </Accordion>



}


function BasicExample() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

//export default BasicExample;