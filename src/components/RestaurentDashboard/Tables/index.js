import './index.css'
import AllInOne from '../../../complexOne'
import { useContext, useState, useEffect } from 'react'
import QRCode from 'qrcode';
import { BsQrCodeScan, BsDownload } from "react-icons/bs";

const statusOne = {
    INITIAL: "INITIAL",
    SUCCESS: "SUCCESS",
    FAILED: "FAILED",
    PENDING: "PENDING",
  }

const Tables = () => {
    const {areasData, areasDataStatus} = useContext(AllInOne);
    const [tablesData, setTablesData] = useState([]);
    const [tablesDataStatus, setTablesDataStatus] = useState(statusOne.INITIAL);
    const [qrCodes, setQrCodes] = useState({});

    

    useEffect(() => {
        if(areasDataStatus === statusOne.PENDING || areasDataStatus === statusOne.INITIAL){
            return;
        }
        areasData.map(async each => {
            const getTablesData = async () => {
                try{
                    console.log("each", each);
                    const url = `https://ttbackone-v48h.onrender.com/getTables/${each.id}`;
                    const response = await fetch(url);
                    // console.log("response", response);
                    if(response.ok){
                        const jsonOne = await response.json();
                        // console.log(jsonOne);
                        setTablesData(prev => [...prev, {
                            name: each.area_name,
                            tables: jsonOne
                        }]);
                        setTablesDataStatus(statusOne.SUCCESS);
                    }else{
                        console.log("error");
                        setTablesDataStatus(statusOne.FAILED);
                    }
                }
                catch(error){
                    setTablesDataStatus(statusOne.FAILED);
                }
            }
            getTablesData();
        })
    }, [areasDataStatus]);

    // console.log(tablesData);

    const generateQRCode = async (table) => {
        if (qrCodes[table.id]) return; // Already generated
        
        try {
            const tableData = {
                tableId: table.id,
                tableName: table.name,
                areaName: table.area_name || 'Main Area',
                seatCapacity: table.seat_capacity,
                restaurantId: table.restaurant_id,
                timestamp: new Date().toISOString(),
                type: 'table_qr'
            };
            
            const qrData = JSON.stringify(tableData);
            const url = await QRCode.toDataURL(qrData, {
                width: 128,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#FFFFFF'
                }
            });
            
            setQrCodes(prev => ({ ...prev, [table.id]: url }));
            
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
        
    };

    const downloadQRCode = (table) => {
        if (!qrCodes[table.id]) return;
        
        const link = document.createElement('a');
        link.download = `qr-code-${table.name}.png`;
        link.href = qrCodes[table.id];
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    useEffect(() => {
        tablesData.map((each) => {
            each.tables.map((eachTable) => {
                generateQRCode(eachTable);
            })
        })
    }, [tablesData]);
    
    return(
        <>
            <div className="tables-page-main-cont">
                            <div className="tables-page-main-cont-one">
                <h1 className="tables-page-main-cont-one-head">Tables</h1>
                <button className="tables-page-main-cont-one-button">Add Table</button>
            </div>
                <div className="tables-page-main-cont-two-main-cont">
                    <div className="tables-page-main-cont-two">
                        <div className="tables-page-main-cont-two-head-cont">
                            <h1 className="tables-page-main-cont-two-head">Areas</h1>
                            <div className="tables-page-main-cont-two-input-cont">
                                <input type="text" placeholder="Enter Area Name" className="tables-page-main-cont-two-input" />
                                <button className="tables-page-main-cont-two-input-button">Add Area</button>
                            </div>
                        </div>
                        <div className='tables-page-main-cont-two-ul-cont'>
                            <ul className='tables-page-main-cont-two-ul'>
                                {areasDataStatus === statusOne.PENDING && <li>Loading...</li>}
                                {areasDataStatus === statusOne.SUCCESS && areasData.map((each) => {
                                    if(tablesData.length === 0){
                                        return <li key={each.area_id}>{each.area_name} - 0</li>
                                    }
                                    const getTheCountOfActiveTables = tablesData.filter((eachTable) => eachTable.area_name === each.area_name);
                                    console.log("getTheCountOfActiveTables",getTheCountOfActiveTables)
                                    const getTheCountOfInactiveTables = tablesData.filter((eachTable) => eachTable.area_name === each.area_name && eachTable.is_active === false);
                                    console.log("getTheCountOfInactiveTables",getTheCountOfInactiveTables)
                                    return (
                                        <li key={each.id}>{each.area_name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tables-page-main-cont-three">
                    {tablesDataStatus === statusOne.PENDING && <li>Loading...</li>}
                    {tablesDataStatus === statusOne.SUCCESS && tablesData.map((each) => {
                        return (
                        <div>
                            <h1 className='tables-page-main-cont-three-h1'>{each.name}</h1>
                            <ul className='tables-page-main-cont-three-ul'>
                                {each.tables.map((eachTable) =>{
                                    return (
                                        <li className={`tables-page-main-cont-three-li ${eachTable.is_active ? 'tables-page-main-cont-three-li-active' : 'tables-page-main-cont-three-li-inactive'}`} key={eachTable.id}>
                                            <div className='tables-page-main-cont-three-li-div'>
                                                <h1 className='tables-page-main-cont-three-li-h1'>{eachTable.name}</h1>
                                                <p className='tables-page-main-cont-three-li-p'>{eachTable.seat_capacity}</p>
                                            </div>
                                            <div>
                                                {qrCodes[eachTable.id] ? (
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                                                        <img 
                                                            src={qrCodes[eachTable.id]} 
                                                            alt={`QR Code for ${eachTable.name}`}
                                                            style={{ width: '164px', height: '164px' }}
                                                        />
                                                        <button 
                                                            onClick={() => downloadQRCode(eachTable)}
                                                            className='tables-page-main-cont-three-li-button'
                                                        >
                                                            <BsDownload />
                                                            Download
                                                        </button>
                                                    </div>
                                                ) : null}
                                            </div>

                                        </li>
                                    );
                                })}
                            </ul>
                        </div>)
                    })}
                </div>

            </div>


        </>
    )
}

export default Tables;